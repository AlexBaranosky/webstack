(ns webstack.resources.resource-maker
  (:require [webstack.dev :refer :all]))

(defmacro def-crud-resource [default-store]
  `(do
     (defonce ~'store (atom ~default-store))

     (defn ~'create [~'id ~'value]
       (swap! ~'store assoc ~'id ~'value))

     (defn ~'read [~'id]
       (get (deref ~'store) ~'id))

     (def ~'update ~'create)

     (defn ~'delete [~'id]
       (swap! ~'store dissoc ~'id))))
