(ns webstack.server.resources.routes
  (:require [webstack.server.helpers :as h]
            [webstack.dev :refer :all]))

(defonce routes (atom {}))

(defn add [name route resource-single-handler resource-multi-handler]
  (swap! routes
         assoc
         (keyword (str name))
         {:single-route (first
                         (h/routes
                          {:routes [(str route "/:id") resource-single-handler]}))
          :multi-route (first
                        (h/routes
                         {:routes [route resource-multi-handler]}))}))

(defn- resource-single-routes []
  (->> (vals @routes)
       (map :single-route)))

(defn- resource-multi-routes []
  (->> (vals @routes)
       (map :multi-route)))

(defn all []
  (concat (resource-single-routes)
          (resource-multi-routes)))
