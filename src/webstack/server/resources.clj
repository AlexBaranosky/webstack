(ns webstack.server.resources
  (:require [kits.ring :as ring]
            [liberator.core :as lib]
            [webstack.dev :refer :all]
            [webstack.server.helpers :as h]))

(lib/defresource home-page
  :allowed-methods [:get]
  :available-media-types ["text/html"]
  :handle-ok (fn [ctx]
               (h/render-template "page.mustache" {:content (h/param ctx :msg)})))

(defonce comments-atom (atom {})) ;; in comments.clj

(lib/defresource comments
  :allowed-methods [:get :post :put :delete]
  :available-media-types ["application/json"]
  :malformed? (fn [_] false)
  :post! (fn [ctx]
           (swap! comments-atom assoc (h/param ctx :id) (h/param ctx :comment)))
  :put! #(%)
  :delete! #(%)
  :handle-ok ::comment)
;; SEE: http://clojure-liberator.github.io/liberator/tutorial/all-together.html
