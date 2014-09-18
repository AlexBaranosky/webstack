(ns webstack.server.resources.db
  (:require [clojure.java.jdbc :as jdbc]
            [webstack.dev :refer :all]))

(def db {:classname "com.mysql.jdbc.Driver",
         :password "retold-fever",
         :subname "//localhost/webstack",
         :subprotocol "mysql",
         :user "root"})

(defn make:create-fn [table-name]
  (fn [id value]
    (jdbc/insert! db table-name (assoc value :id id))))

(defn make:read-fn [table-name]
  (fn [id]
    (first (jdbc/query db
                       [(format (str "SELECT *
                                      FROM " table-name
                                      " WHERE id=%s
                                      LIMIT 1")
                                id)]))))

(defn make:update-fn [table-name]
  (fn [id partial-value]
    (jdbc/update! db table-name partial-value ["id = ?" id])))

(defn make:delete-fn [table-name]
  (fn [id]
    (jdbc/delete! db table-name ["id = ?" id])))

(defn make:read-all-fn [table-name]
  (fn []
    (jdbc/query db [(str "SELECT * FROM " table-name)])))

(defn make:create-multi-fn [table-name]
  (fn [values]
    (doseq [v values]
      (jdbc/insert! db table-name v))))
