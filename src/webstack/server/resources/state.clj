(ns webstack.server.resources.state)

(defonce registry (atom {}))

(defn register [resource]
  (swap! registry assoc (:name resource) resource))

(defn has-many [resource-name]
  (get-in @registry [resource-name :has-many]))

(defn register-create-multi-fn [resource-name create-multi-fn]
  (swap! registry assoc-in [resource-name :create-multi-fn] create-multi-fn))

(defn create-multi-fn [resource-name]
  (get-in @registry [resource-name :create-multi-fn]))

(defn register-update-multi-fn [resource-name update-multi-fn]
  (swap! registry assoc-in [resource-name :update-multi-fn] update-multi-fn))

(defn update-multi-fn [resource-name]
  (get-in @registry [resource-name :update-multi-fn]))

(defn register-delete-multi-fn [resource-name delete-multi-fn]
  (swap! registry assoc-in [resource-name :delete-multi-fn] delete-multi-fn))

(defn delete-multi-fn [resource-name]
  (get-in @registry [resource-name :delete-multi-fn]))
