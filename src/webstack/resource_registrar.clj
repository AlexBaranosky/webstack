(ns webstack.resource-registrar
  (:refer-clojure :exclude [comment])
  (:require [cheshire.core :as json]
            [clojure.java.jdbc :as jdbc]
            [clojure.string :as str]
            [liberator.core :as lib]
            [schema.core :as s]
            [webstack.dev :refer :all]
            [webstack.server :as server]))

(defonce crud-fns (atom {}))

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

(defn- crud-defn-sexps
  [table-name
   {:syms [schema-fn-sym
           validate-fn-sym
           db-create-fn-sym
           db-read-fn-sym
           db-update-fn-sym
           db-delete-fn-sym]}
   {:keys [schema] :or {schema s/Any}}]
  (let [table-kw (keyword table-name)]
    `(let [schema# ~schema]
       (def ~schema-fn-sym schema#)

       (defn ~validate-fn-sym [value#]
         (s/validate ~schema-fn-sym value#))

       (defn ~db-create-fn-sym [id# value#]
         (jdbc/insert! db ~table-kw (assoc value# :id id#)))

       (defn ~db-read-fn-sym [id#]
         (first (jdbc/query db
                            [(format ~(str "SELECT * 
                                            FROM " table-name 
                                          " WHERE id=%s
                                            LIMIT 1")
                                     id#)])))

       (defn ~db-update-fn-sym [id# partial-value#]
         (jdbc/update! db ~table-kw partial-value# ["id = ?" id#]))

       (defn ~db-delete-fn-sym [id#]
         (jdbc/delete! db ~table-kw ["id = ?" id#])))))

(defn authorized? [method->role-set ctx]
  true #_(friend/authorized? (get method->role-set (-> ctx :request :request-method))
                             (friend/identity (:request ctx))))

(defn resource-handle-ok [ctx]
  (json/encode (::value ctx)))

(defn resource-handle-exception [ctx]
  (throw (:exception ctx)))

(defn- liberator-resource-sexp
  [name
   liberator-resource-name
   {:syms [schema-fn-sym
           validate-fn-sym
           db-create-fn-sym
           db-read-fn-sym
           db-update-fn-sym
           db-delete-fn-sym]}]
  (let [resource-post!-fn-sym (symbol (str name "-resource-post!"))
        resource-put!-fn-sym (symbol (str name "-resource-put!"))
        resource-delete!-fn-sym (symbol (str name "-resource-delete!"))
        resource-exists?-fn-sym (symbol (str name "-resource-exists?"))]
    `(do
       (defn ~resource-post!-fn-sym [ctx#]
         (look (-> ctx# :request))
         (let [{:strs [~'id ~'value]} (-> ctx# :request :body slurp json/decode)]
           (~db-create-fn-sym ~'id ~'value)))

       (defn ~resource-put!-fn-sym [ctx#]
         (let [{:strs [~'id ~'partial-value]} 
               (-> ctx# :request :body slurp json/decode)]
           (~db-update-fn-sym ~'id ~'partial-value)))

       (defn ~resource-delete!-fn-sym [ctx#]
         (let [{:strs [~'id]} (-> ctx# :request :body slurp json/decode)]
           (~db-delete-fn-sym ~'id)))

       (defn ~resource-exists?-fn-sym [ctx#]
         (some->> (~db-read-fn-sym (-> ctx# :request :params :id))
                  (hash-map ::value)))

       (lib/defresource ~liberator-resource-name
         {:allowed-methods [:get :post :put :delete]
          :authorized? (fn [ctx#]
                         (authorized? default-auth ctx#))
          :available-media-types ["application/json"]
          :post! ~resource-post!-fn-sym
          :put! ~resource-put!-fn-sym
          :delete! ~resource-delete!-fn-sym
          :exists? ~resource-exists?-fn-sym
          :handle-ok resource-handle-ok
          :handle-exception resource-handle-exception}))))

(defn- register-ddl [name ddl]
  (swap! crud-fns assoc-in [(keyword name) :ddl] ddl))

(defn- register-fns [name crud-fn-syms]
  (println "Defining resource" name)
  (swap! crud-fns assoc-in [(keyword name) :fns] crud-fn-syms))

(def ^:private resource-route-prefix "/resources/")

(defmacro defresource [name {:keys [ddl schema]
                             :or {schema s/Any}}]
  (assert ddl)
  (let [route (str resource-route-prefix (str name))
        liberator-resource-name (symbol (str "liberator-resource-" name))
        crud-fn-syms {'schema-fn-sym    (symbol (str name "-schema"))
                      'validate-fn-sym  (symbol (str name "-validate"))
                      'db-create-fn-sym (symbol (str name "-db-create"))
                      'db-read-fn-sym   (symbol (str name "-db-read"))
                      'db-update-fn-sym (symbol (str name "-db-update"))
                      'db-delete-fn-sym (symbol (str name "-db-delete"))}]
    (register-ddl name ddl)
    (register-fns name crud-fn-syms)
    `(do
       ~(crud-defn-sexps name crud-fn-syms schema)
       ~(liberator-resource-sexp name liberator-resource-name crud-fn-syms)
       (server/add-resource-route '~name ~route ~liberator-resource-name))))

(reset! crud-fns {})

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

(defn gen-ddl []
  (vec (for [[table {:keys [ddl]}] @crud-fns
             :let [col-spec (->> ddl
                                 (map (fn [[k v]]
                                        (str k " " v)))
                                 (str/join ", \n"))]]
         (format "CREATE TABLE IF NOT EXISTS %s (
id INT PRIMARY KEY NOT NULL,
%s);"
                 (name table)
                 col-spec))))

(defn make-tables! []
  (doseq [ddl (gen-ddl)]
    (jdbc/execute! db [ddl])))

(clojure.core/comment

  (make-tables!)

  crud-fns

  (doseq [line (gen-ddl)]
    (println line))

  (sort (keys (ns-publics 'webstack.resource-registrar)))
  )