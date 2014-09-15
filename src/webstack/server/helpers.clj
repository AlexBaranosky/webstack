(ns webstack.server.helpers
  (:require [clout.core :as clout]
            [kits.clout :as kc]
            [stencil.core :as stenc]
            [webstack.dev :refer :all]))

(defn render-template [template data-map]
  (stenc/render-file (str "public/templates/" template) data-map))

(defn param [ctx k]
  (-> ctx :request :params k))

(defn routes [{rts :routes middleware :middleware}]
  (->> (partition 2 rts)
       (mapv (fn [[uri handler]]
               (if middleware
                 [(clout/route-compile uri) (middleware handler)]
                 [(clout/route-compile uri) handler])))))

(defn find-matching-handler [routes uri]
  (kc/find-matching-handler routes uri))
