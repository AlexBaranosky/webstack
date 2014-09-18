(ns webstack.server.resources
  (:refer-clojure :exclude [comment])
  (:require [liberator.core :as lib] 
            [schema.core :as s]
            [webstack.dev :refer :all]
            [webstack.server.resources.db :as db]
            [webstack.server.resources.liberator :as liberator]
            [webstack.server.resources.routes :as resources-routes])
  (:import (clojure.lang Keyword)))

;;(defonce crud-fns (atom {}))

(defn- sym* [& pieces]
  (symbol (apply str pieces)))

(defmacro defresource [{:keys [name ddl schema]
                        :as _resource-config}]
  (assert name)
  (assert ddl)
  (assert schema)
  (let [liberator-single-resource-name (sym* "liberator-single-resource-" name)
        liberator-multi-resource-name  (sym* "liberator-multi-resource-" name)

        schema-sym       (sym* name "-schema")
        validate-fn-sym  (sym* name "-validate")
        db-create-fn-sym (sym* name "-db-create")
        db-read-fn-sym   (sym* name "-db-read")
        db-update-fn-sym (sym* name "-db-update")
        db-delete-fn-sym (sym* name "-db-delete")

        db-read-all-fn-sym     (sym* name "-db-read-all")
        db-create-multi-fn-sym (sym* name "-db-create-multi")

        resource-single-post!-fn-sym   (sym* name "-resource-single-post!")
        resource-single-put!-fn-sym    (sym* name "-resource-single-put!")
        resource-single-delete!-fn-sym (sym* name "-resource-single-delete!")
        resource-single-exists?-fn-sym (sym* name "-resource-single-exists?")

        resource-multi-post!-fn-sym   (sym* name "-resource-multi-post!")
        resource-multi-exists?-fn-sym (sym* name "-resource-multi-exists?")]
    `(do
       (def ~schema-sym       ~schema)
       (def ~validate-fn-sym  (liberator/make:validate-fn '~schema-sym))
       (def ~db-create-fn-sym (db/make:create-fn '~name))
       (def ~db-read-fn-sym   (db/make:read-fn '~name))
       (def ~db-update-fn-sym (db/make:update-fn '~name))
       (def ~db-delete-fn-sym (db/make:delete-fn '~name))

       (def ~db-read-all-fn-sym (db/make:read-all-fn '~name))
       (def ~db-create-multi-fn-sym (db/make:create-multi-fn '~name))

       (def ~resource-single-post!-fn-sym
         (liberator/make:resource-single-post! ~db-create-fn-sym))
       (def ~resource-single-put!-fn-sym
         (liberator/make:resource-single-put! ~db-update-fn-sym))
       (def ~resource-single-delete!-fn-sym
         (liberator/make:resource-single-delete! ~db-delete-fn-sym))
       (def ~resource-single-exists?-fn-sym
         (liberator/make:resource-single-exists? ~db-read-fn-sym))

       (def ~resource-multi-post!-fn-sym
         (liberator/make:resource-multi-post! ~db-create-multi-fn-sym))
       (def ~resource-multi-exists?-fn-sym
         (liberator/make:resource-multi-exists? ~db-read-all-fn-sym))

       (let [shared-resource-opts#
             {:authorized? (fn [ctx#]
                             (liberator/authorized? liberator/default-auth ctx#))
              :available-media-types ["application/json"]
              :handle-exception liberator/resource-handle-exception}]
         (lib/defresource ~liberator-single-resource-name
           shared-resource-opts#
           :allowed-methods [:get :post :put :delete]
           ;; :allowed? (fn [ctx#]
           ;;             (look (::value ctx#))
           ;;             (let [v# (::value ctx#)
           ;;                   errs# (s/check ~schema-sym v#)]
           ;;               [(not errs#) v#]))
           :post! ~resource-single-post!-fn-sym
           :put! ~resource-single-put!-fn-sym
           :delete! ~resource-single-delete!-fn-sym
           :exists? ~resource-single-exists?-fn-sym
           :handle-ok liberator/resource-single-handle-ok)

         (lib/defresource ~liberator-multi-resource-name
           shared-resource-opts#
           :allowed-methods [:get :post]
           :post! ~resource-multi-post!-fn-sym
           :exists? ~resource-multi-exists?-fn-sym
           :handle-ok liberator/resource-multi-handle-ok))

       (resources-routes/add '~name
                             ~(str "/resources/" name "s")
                             ~liberator-single-resource-name
                             ~liberator-multi-resource-name))))

;; (reset! crud-fns {})

(def resource-configs
  [{:name "comment"
    :ddl {"text" "VARCHAR(50)"}
    :schema {:text String}}
   
   {:name "user"
    :ddl {"email" "VARCHAR(50)"
          "password" "VARCHAR(50)"
          "username" "VARCHAR(50)"}
    :schema {(s/required-key :email)    String
             (s/required-key :password) String
             (s/required-key :roles)    #{Keyword}
             (s/required-key :username) String}}])

(defmacro gen-resources []
  `(do 
     ~@(for [config resource-configs]
         `(defresource ~config))))

;; (defn- register-ddl [name ddl]
;;   (swap! crud-fns assoc-in [(keyword name) :ddl] ddl))

;; (defn- register-fns [name crud-fn-syms]
;;   (println "Defining resource" name)
;;   (swap! crud-fns assoc-in [(keyword name) :fns] crud-fn-syms))

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

  (sort (keys (ns-publics 'webstack.server.resources)))
  )
