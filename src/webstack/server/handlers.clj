(ns webstack.server.handlers
  (:require [kits.ring :as ring]
            [webstack.dev :refer :all]
            [webstack.server.helpers :as h]))

(defn ping [_]
  (ring/text-plain-response "pong"))

(defn home-page [request]
  (ring/html-response
   (h/render-template "page.mustache" {:content (-> request :params :msg)})))

(defn om [_]
  (ring/html-response
   (h/render-template "om.mustache" {:cljs-ns "webstack.core"})))
