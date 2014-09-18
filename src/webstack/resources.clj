(ns webstack.resources
  (:refer-clojure :exclude [comment])
  (:require [cheshire.core :as json]
            [clojure.java.jdbc :as jdbc]
            [liberator.core :as lib]
            [schema.core :as s]
            [webstack.dev :refer :all]
            [webstack.server :as server])
  (:import (clojure.lang Keyword)))

;;(defonce crud-fns (atom {}))

(def ^:private default-auth
  {:get    #{:admin :readonly}
   :post   #{:admin}
   :put    #{:admin}
   :delete #{:admin}})

(def db {:classname "com.mysql.jdbc.Driver",
         :password "retold-fever",
         :subname "//localhost/webstack",
         :subprotocol "mysql",
         :user "root"})

(defn- make:validate-fn [schema]
  (fn [value]
    (s/validate schema value)))

(defn- make:create-fn [table-name]
  (fn [id value]
    (jdbc/insert! db table-name (assoc value :id id))))

(defn- make:read-fn [table-name]
  (fn [id]
    (first (jdbc/query db
                       [(format (str "SELECT *
                                      FROM " table-name
                                      " WHERE id=%s
                                      LIMIT 1")
                                id)]))))

(defn- make:update-fn [table-name]
  (fn [id partial-value]
    (jdbc/update! db table-name partial-value ["id = ?" id])))

(defn- make:delete-fn [table-name]
  (fn [id]
    (jdbc/delete! db table-name ["id = ?" id])))

(defn- make:read-all-fn [table-name]
  (fn []
    (jdbc/query db [(str "SELECT * FROM " table-name)])))

(defn- make:create-multi-fn [table-name]
  (fn [values]
    (doseq [v values]
      (jdbc/insert! db table-name v))))

(defn- authorized? [method->role-set ctx]
  true #_(friend/authorized? (get method->role-set (-> ctx :request :request-method))
                             (friend/identity (:request ctx))))

(defn- resource-single-handle-ok [ctx]
  (json/encode (::value ctx)))

(defn- resource-multi-handle-ok [ctx]
  (json/encode (::values ctx)))

(defn- resource-handle-exception [ctx]
  (throw (:exception ctx)))

(defn- make:resource-single-post! [db-create-fn]
  (fn [ctx]
    (let [id (-> ctx :request :params :id)
          {:strs [value]} (-> ctx :request :body slurp json/decode)]
      (db-create-fn id value))))

(defn- make:resource-single-put! [db-update-fn]
  (fn [ctx]
    (let [id (-> ctx :request :params :id)
          {:strs [partial-value]} (-> ctx :request :body slurp json/decode)]
      (db-update-fn id partial-value))))

(defn- make:resource-single-delete! [db-delete-fn]
  (fn [ctx]
    (db-delete-fn (-> ctx :request :params :id))))

(defn- make:resource-single-exists? [db-read-fn]
  (fn [ctx]
    (some->> (db-read-fn (-> ctx :request :params :id))
             (hash-map ::value))))

(defn- make:resource-multi-post! [db-create-multi-fn]
  (fn [ctx]
    (db-create-multi-fn 
     (-> ctx :request :body slurp (json/decode keyword) :values))))

(defn- make:resource-multi-exists? [db-read-all-fn]
  (fn [ctx]
    (some->> (db-read-all-fn)
             (hash-map ::values))))

;; (defn- register-ddl [name ddl]
;;   (swap! crud-fns assoc-in [(keyword name) :ddl] ddl))

;; (defn- register-fns [name crud-fn-syms]
;;   (println "Defining resource" name)
;;   (swap! crud-fns assoc-in [(keyword name) :fns] crud-fn-syms))

(defmacro defresource [name {:keys [ddl schema]}]
  (assert ddl)
  (assert schema)
  (let [liberator-single-resource-name
        (symbol (str "liberator-single-resource-" name))
        liberator-multi-resource-name
        (symbol (str "liberator-multi-resource-" name))

        schema-sym       (symbol (str name "-schema"))
        validate-fn-sym  (symbol (str name "-validate"))
        db-create-fn-sym (symbol (str name "-db-create"))
        db-read-fn-sym   (symbol (str name "-db-read"))
        db-update-fn-sym (symbol (str name "-db-update"))
        db-delete-fn-sym (symbol (str name "-db-delete"))

        db-read-all-fn-sym (symbol (str name "-db-read-all"))
        db-create-multi-fn-sym (symbol (str name "-db-create-multi"))

        resource-single-post!-fn-sym   (symbol (str name "-resource-single-post!"))
        resource-single-put!-fn-sym    (symbol (str name "-resource-single-put!"))
        resource-single-delete!-fn-sym (symbol (str name "-resource-single-delete!"))
        resource-single-exists?-fn-sym (symbol (str name "-resource-single-exists?"))

        resource-multi-post!-fn-sym   (symbol (str name "-resource-multi-post!"))
        resource-multi-exists?-fn-sym (symbol (str name "-resource-multi-exists?"))]
    `(do
       (def ~schema-sym       ~schema)
       (def ~validate-fn-sym  (make:validate-fn '~schema-sym))
       (def ~db-create-fn-sym (make:create-fn '~name))
       (def ~db-read-fn-sym   (make:read-fn '~name))
       (def ~db-update-fn-sym (make:update-fn '~name))
       (def ~db-delete-fn-sym (make:delete-fn '~name))

       (def ~db-read-all-fn-sym (make:read-all-fn '~name))
       (def ~db-create-multi-fn-sym (make:create-multi-fn '~name))

       (def ~resource-single-post!-fn-sym   
         (make:resource-single-post! ~db-create-fn-sym))
       (def ~resource-single-put!-fn-sym
         (make:resource-single-put! ~db-update-fn-sym))
       (def ~resource-single-delete!-fn-sym
         (make:resource-single-delete! ~db-delete-fn-sym))
       (def ~resource-single-exists?-fn-sym
         (make:resource-single-exists? ~db-read-fn-sym))

       (def ~resource-multi-post!-fn-sym
         (make:resource-multi-post! ~db-create-multi-fn-sym))
       (def ~resource-multi-exists?-fn-sym
         (make:resource-multi-exists? ~db-read-all-fn-sym))

       (let [shared-resource-opts# {:authorized? (fn [ctx#]
                                                  (authorized? default-auth ctx#))
                                   :available-media-types ["application/json"]
                                   :handle-exception resource-handle-exception}]
         (lib/defresource ~liberator-single-resource-name
           shared-resource-opts#
           :allowed-methods [:get :post :put :delete]
           :post! ~resource-single-post!-fn-sym
           :put! ~resource-single-put!-fn-sym
           :delete! ~resource-single-delete!-fn-sym
           :exists? ~resource-single-exists?-fn-sym
           :handle-ok resource-single-handle-ok)

         (lib/defresource ~liberator-multi-resource-name
           shared-resource-opts#
           :allowed-methods [:get :post]
           :post! ~resource-multi-post!-fn-sym
           :exists? ~resource-multi-exists?-fn-sym
           :handle-ok resource-multi-handle-ok))

       (server/add-resource-routes '~name
                                   ~(str "/resources/" name "s")
                                   ~liberator-single-resource-name
                                   ~liberator-multi-resource-name))))

;; (reset! crud-fns {})

(defresource comment
  {:ddl {"text" "VARCHAR(50)"}
   :schema {:text String}})

(defresource user
  {:ddl {"email" "VARCHAR(50)"
         "password" "VARCHAR(50)"
         "username" "VARCHAR(50)"}
   :schema {(s/required-key :email)    String
            (s/required-key :password) String
            (s/required-key :roles)    #{Keyword}
            (s/required-key :username) String}})

;; (defn gen-ddl []
;;   (vec (for [[table {:keys [ddl]}] @crud-fns
;;              :let [col-spec (->> ddl
;;                                  (map (fn [[k v]]
;;                                         (str k " " v)))
;;                                  (str/join ", \n"))]]
;;          (format "CREATE TABLE IF NOT EXISTS %s (
;; id INT PRIMARY KEY NOT NULL,
;; %s);"
;;                  (name table)
;;                  col-spec))))

;; (defn make-tables! []
;;   (doseq [ddl (gen-ddl)]
;;     (jdbc/execute! db [ddl])))

(clojure.core/comment

  (make-tables!)

  ;;  crud-fns

  (doseq [line (gen-ddl)]
    (println line))

  (sort (keys (ns-publics 'webstack.resources)))
  )
