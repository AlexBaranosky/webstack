(ns webstack.server.resources.db
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.string :as str]
            [webstack.dev :refer :all]))

(def db {:classname "com.mysql.jdbc.Driver",
         :password "retold-fever",
         :subname "//localhost/webstack",
         :subprotocol "mysql",
         :user "root"})

(defn make:create-fn [registry-a table-name]
  (fn [id value]
    (if-let [has-many-table (get-in @registry-a [table-name :has-many])]
      (let [child-table (str has-many-table "s")
            parent-id (str table-name "_id")]
        (jdbc/insert! db table-name (-> value
                                        (assoc "id" id)
                                        (dissoc child-table)))
        (doseq [child (get value child-table)]
          (jdbc/insert! db has-many-table (assoc child parent-id id))))
      (jdbc/insert! db table-name (assoc value "id" id)))))

(defn make:read-fn [registry-a table-name]
  (fn [id]
    (let [result (first (jdbc/query db
                                    [(format "SELECT *
                                              FROM %s
                                              WHERE id=%s
                                              LIMIT 1"
                                             table-name
                                             id)]))]
      (if-let [has-many-table (get-in @registry-a [table-name :has-many])]
        (let [children (jdbc/query db
                                   [(format "SELECT *
                                             FROM %s
                                             WHERE %s=%s
                                             LIMIT 1"
                                            has-many-table
                                            (str table-name "_id")
                                            id)])]
          (assoc result
            (str has-many-table "s")
            (mapv #(dissoc % :id (keyword (str table-name "_id")))
                  children)))
        result))))

(defn make:update-fn [registry-a table-name]
  (fn [id partial-value]
    (jdbc/update! db table-name partial-value ["id = ?" id])))

(defn make:delete-fn [registry-a table-name]
  (fn [id]
    (jdbc/delete! db table-name ["id = ?" id])))

(defn make:create-multi-fn [registry-a table-name]
  (let [create-single-fn (make:create-fn registry-a table-name)]
    (fn [values]
      (doseq [v values]
        (create-single-fn (get v "id") v)))))

(defn make:read-all-fn [registry-a table-name]
  (fn []
    (if-let [has-many-table (get-in @registry-a [table-name :has-many])]
      (let [results (jdbc/query db [(str "SELECT * FROM " table-name)])]
        (mapv (fn [r]
                (assoc r
                  (str has-many-table "s")
                  (->> (jdbc/query db [(format "SELECT * 
                                                FROM %s
                                                WHERE %s_id=%s"
                                           has-many-table
                                           table-name
                                           (:id r))])
                   (map #(dissoc % :id (keyword (str table-name "_id")))))))
              results))
      (jdbc/query db [(str "SELECT * FROM " table-name)]))))

(defn make:update-multi-fn [registry-a table-name]
  (fn [partial-values]
    (doseq [pv partial-values]
      (look
       (jdbc/update! db table-name pv ["id = ?" (get pv "id")])))))

(defn make:delete-multi-fn [registry-a table-name]
  (fn [ids]
    (jdbc/execute! db [(format "DELETE FROM %s WHERE id IN (%s)"
                               table-name
                               (str/join ", " ids))])))
