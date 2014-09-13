(ns webstack.core
  (:require [clout.core :as clout]
            [kits.clout :as kc]
            [kits.ring :as ring]
            [liberator.core :as lib]
            [stencil.core :as stenc]))

(defn- render-template [template data-map]
  (stenc/render-file (str "templates/" template) data-map))

(defn- param [ctx k]
  (-> ctx :request :params k))

(defn ping [_]
  (ring/text-plain-response "pong"))

(lib/defresource home-page
  :allowed-methods [:get]
  :available-media-types ["text/html"]
  :handle-ok (fn [ctx]
               (render-template "page.mustache" {:content (param ctx :msg)})))

(defonce comments-atom (atom {}))

(lib/defresource comments
  :allowed-methods [:get :post :put :delete]
  :available-media-types ["application/json"]
  :malformed? (fn [_] false)
  :post! (fn [ctx]
           (swap! comments-atom assoc (param ctx :id) (param ctx :comment)))
  :put! #(%)
  :delete! #(%)
  :handle-ok ::comment)
;; SEE: http://clojure-liberator.github.io/liberator/tutorial/all-together.html

(defn ->routes [& uris+handlers]
  (mapv (fn [[uri handler]]
          [(clout/route-compile uri) handler])
        (partition 2 uris+handlers)))

(def ^:private routes
  (->routes
   "/"                   home-page
   "/ping"               ping
   "/resources/comments" comments))

(defn handler [req]
  (if-let [{hdlr :handler
            params :params} (kc/find-matching-handler routes (:uri req))]
    (hdlr (update-in req [:params] conj params))
    (comment 'do-something)))

(comment
  (handler {:uri "/"
            :params {:msg "Welcome Alex!"}
            :request-method :get})

  (handler {:uri "/ping"
            :request-method :get})

  (handler {:uri "/resources/comments"
            :params {:id "comment-1"
                     :comment "hi!"}
            :request-method :post})
  )
