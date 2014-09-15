(ns webstack.resources.comments)

(defonce comments (atom {}))

(defn create [id comment]
  (swap! comments assoc id comment))

(defn read [id]
  (get @comments id))

(def update create)

(defn delete [id]
  (swap! comments dissoc id))
