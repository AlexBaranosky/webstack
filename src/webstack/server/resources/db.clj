(ns webstack.server.resources.db
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.string :as str]
            [webstack.dev :refer :all]
            [webstack.server.resources.state :as state]))

(def db {:classname "com.mysql.jdbc.Driver",
         :password "retold-fever",
         :subname "//localhost/webstack",
         :subprotocol "mysql",
         :user "root"})

(defn make:create-fn [table-name]
  (fn [id value]
    (if-let [has-many-table (state/has-many table-name)]
      (let [child-table (str has-many-table "s")
            parent-id (str table-name "_id")]
        (jdbc/insert! db table-name (-> value
                                        (assoc "id" id)
                                        (dissoc child-table)))
        (doseq [child (get value child-table)]
          (jdbc/insert! db has-many-table (assoc child parent-id id))))
      (jdbc/insert! db table-name (assoc value "id" id)))))

(defn make:read-fn [table-name]
  (fn [id]
    (let [result (-> db
                     (jdbc/query [(format "SELECT * FROM %s WHERE id=%s LIMIT 1"
                                          table-name id)])
                     first)]
      (if-let [has-many-table (look (state/has-many table-name))]
        (let [children (-> db
                           (jdbc/query [(format "SELECT * FROM %s WHERE %s=%s LIMIT 1"
                                                has-many-table
                                                (str table-name "_id")
                                                id)]))]
          (-> result
              (cond->
               (seq children)
               (assoc
                   (str has-many-table "s")
                 (mapv #(dissoc % :id (keyword (str table-name "_id")))
                       children)))))
        result))))

(defn make:update-fn [table-name]
  (fn [id partial-value]
    (jdbc/update! db table-name partial-value ["id = ?" id])))

(defn- delete-children [table-name id]
  (when-let [has-many-table-name (state/has-many table-name)]
    (let [delete-children-fn (state/delete-multi-fn has-many-table-name)]
      (delete-children-fn table-name id))))

(defn make:delete-fn [table-name]
  (fn [id]
    (delete-children table-name id)
    (jdbc/delete! db table-name ["id = ?" id])))

(defn make:create-multi-fn [table-name]
  (let [create-single-fn (make:create-fn table-name)]
    (fn [values]
      (doseq [v values]
        (create-single-fn (get v "id") v)))))

(defn make:read-all-fn [table-name]
  (fn []
    (if-let [has-many-table (state/has-many table-name)]
      (let [results (jdbc/query db [(str "SELECT * FROM " table-name)])]
        (mapv (fn [r]
                (assoc r
                  (str has-many-table "s")
                  (->> (jdbc/query db [(format "SELECT * FROM %s WHERE %s_id=%s"
                                               has-many-table table-name (:id r))])
                       (map #(dissoc % :id (keyword (str table-name "_id")))))))
              results))
      (jdbc/query db [(str "SELECT * FROM " table-name)]))))

(defn make:update-multi-fn [table-name]
  (fn [partial-values]
    (doseq [pv partial-values]
      (jdbc/update! db table-name pv ["id = ?" (get pv "id")]))))

(defn make:delete-multi-fn [table-name]
  (fn
    ([parent-table-name foreign-key-value]
       (jdbc/execute! db  [(format "DELETE FROM %s WHERE %s_id=%s"
                                   table-name
                                   parent-table-name
                                   foreign-key-value)]))
    ([ids]
       (doseq [id ids]
         (delete-children table-name id))
       (jdbc/execute! db [(format "DELETE FROM %s WHERE id IN (%s)"
                                  table-name
                                  (str/join ", " ids))]))))
