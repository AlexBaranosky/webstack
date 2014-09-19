(ns webstack.server.resources.liberator
  (:require [cheshire.core :as json]
            [schema.core :as s]
            [webstack.dev :refer :all]))

(def default-auth
  {:get    #{:admin :readonly}
   :post   #{:admin}
   :put    #{:admin}
   :delete #{:admin}})

(defn make:validate-fn [schema]
  (fn [value]
    (s/validate schema value)))

(defn authorized? [method->role-set ctx]
  true #_(friend/authorized? (get method->role-set (-> ctx :request :request-method))
                             (friend/identity (:request ctx))))

(defn resource-single-handle-ok [ctx]
  (json/encode (::value ctx)))

(defn resource-multi-handle-ok [ctx]
  (json/encode (::values ctx)))

(defn resource-handle-exception [ctx]
  (throw (:exception ctx)))

(defn make:resource-single-post! [db-create-fn]
  (fn [ctx]
    (let [id (-> ctx :request :params :id)
          {:strs [value]} (-> ctx :request :body slurp json/decode)]
      (db-create-fn id value))))

(defn make:resource-single-put! [db-update-fn]
  (fn [ctx]
    (let [id (-> ctx :request :params :id)
          {:strs [partial-value]} (-> ctx :request :body slurp json/decode)]
      (db-update-fn id partial-value))))

(defn make:resource-single-delete! [db-delete-fn]
  (fn [ctx]
    (db-delete-fn (-> ctx :request :params :id))))

(defn make:resource-single-exists? [db-read-fn]
  (fn [ctx]
    (some->> (db-read-fn (-> ctx :request :params :id))
             (hash-map ::value))))

(defn make:resource-multi-post! [db-create-multi-fn]
  (fn [ctx]
    (db-create-multi-fn 
     (-> ctx :request :body slurp json/decode (get "values")))))

(defn make:resource-multi-put! [db-update-multi-fn]
  (fn [ctx]
    (db-update-multi-fn
     (-> ctx :request :body slurp json/decode (get "partial-values")))))

(defn make:resource-multi-delete! [db-delete-multi-fn]
  (fn [ctx]
    (db-delete-multi-fn
     (-> ctx :request :body slurp json/decode (get "ids")))))

(defn make:resource-multi-exists? [db-read-all-fn]
  (fn [ctx]
    {::values (db-read-all-fn)}))
