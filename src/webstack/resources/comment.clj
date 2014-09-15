(ns webstack.resources.comment
  (:refer-clojure :exclude [comment])
  (:require [webstack.dev :refer :all]))

(defonce store (atom {}))

(defn create [id comment-body]
  (swap! store assoc id comment-body))

(defn read [id]
  (get @store id))

(def update create)

(defn delete [id]
  (swap! store dissoc id))
