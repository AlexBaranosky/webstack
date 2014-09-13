(ns webstack.helpers
  (:require [clout.core :as clout]
            [kits.clout :as kc]
            [stencil.core :as stenc]))

(defn render-template [template data-map]
  (stenc/render-file (str "templates/" template) data-map))

(defn param [ctx k]
  (-> ctx :request :params k))

(defn ->routes [& uris+handlers]
  (mapv (fn [[uri handler]]
          [(clout/route-compile uri) handler])
        (partition 2 uris+handlers)))

(defn find-matching-handler [routes uri]
  (kc/find-matching-handler routes uri))
