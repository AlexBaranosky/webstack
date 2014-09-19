(ns webstack.server.resources
  (:refer-clojure :exclude [comment])
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.string :as str]
            [liberator.core :as lib]
            [schema.core :as s]
            [webstack.dev :refer :all]
            [webstack.server.resources.db :as db]
            [webstack.server.resources.liberator :as liberator]
            [webstack.server.resources.routes :as resources-routes]))

(defonce registry (atom {}))

(defn- sym* [& pieces]
  (symbol (apply str pieces)))

(defn- register [resource]
  (swap! registry assoc (:name resource) resource))

(defn has-many [resource]
  (get-in (look @registry) [resource :has-many]))

(def ResourceName String)

(def Resource 
  {:name ResourceName
   :ddl (s/pred map?)
   :schema (s/pred map?)
   ;;(s/optional-key :belongs-to) ResourceName
   (s/optional-key :has-many) ResourceName})

(defmacro defresource [{:keys [name ddl schema belongs-to has-many]
                        :as resource}]
  (s/validate Resource resource)
  (register resource)
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
       (def ~db-create-fn-sym (db/make:create-fn registry ~name))
       (def ~db-read-fn-sym   (db/make:read-fn registry ~name))
       (def ~db-update-fn-sym (db/make:update-fn registry ~name))
       (def ~db-delete-fn-sym (db/make:delete-fn registry ~name))

       (def ~db-read-all-fn-sym     (db/make:read-all-fn registry ~name))
       (def ~db-create-multi-fn-sym  (db/make:create-multi-fn registry ~name))

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

(def resource-configs
  [{:name "comment"
    :ddl {"text" "VARCHAR(50)"}
    :schema {(s/required-key "text") String}}

   {:name "user"
    :has-many "role"
    :ddl {"email" "VARCHAR(50)"
          "password" "VARCHAR(50)"
          "username" "VARCHAR(50)"}
    :schema {(s/required-key "email")    String
             (s/required-key "password") String
             (s/required-key "roles")    [(s/enum "admin")]
             (s/required-key "username") String}}

   {:name "role"
    ;;:belongs-to "user"
    :ddl {"name" "VARCHAR(50)"
          "user_id" "INT NOT NULL"}
    :schema {(s/required-key "name") String}}])

(defmacro gen-resources []
  `(do
     ~@(for [config resource-configs]
         `(defresource ~config))))

;; registry
;; (reset! registry {})
(gen-resources)

(defn gen-ddl []
  (vec (for [[table resource] @registry
             :let [col-spec (->> resource
                                 :ddl
                                 (map (fn [[k v]]
                                        (str k " " v)))
                                 (str/join ", \n"))]]
         (format "CREATE TABLE IF NOT EXISTS %s (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
%s);"
                 table
                 col-spec))))

(defn make-tables! []
  (doseq [ddl (gen-ddl)]
    (jdbc/execute! db/db [ddl])))

(clojure.core/comment

  (jdbc/execute! db/db ["DROP TABLE comment"])
  (jdbc/execute! db/db ["DROP TABLE user"])
  (jdbc/execute! db/db ["DROP TABLE role"]) 

  (make-tables!)

  (doseq [line (gen-ddl)]
    (println line))

  (sort (keys (ns-publics 'webstack.server.resources)))
  )
