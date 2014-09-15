(ns webstack.server.resources
  (:require [kits.ring :as ring]
            [liberator.core :as lib]
            [webstack.dev :refer :all]
            [webstack.resources.comments :as comments]
            [webstack.server.helpers :as h]))

(defonce comments-atom (atom {})) ;; in comments.clj

(lib/defresource comments
  :allowed-methods [:get :post :put :delete]
  :available-media-types ["application/json"]
  :post! (fn [ctx]
           (comments/create (h/param ctx :id) (h/param ctx :comment)))
  :put! (fn [ctx]
          (comments/update (h/param ctx :id) (h/param ctx :comment)))
  :delete! (fn [ctx]
             (comments/delete (h/param ctx :id)))
  :exists? (fn [ctx]
             (some->> (comments/read (h/param ctx :id))
                      (hash-map ::comment)))
  :handle-ok ::comment)
;; SEE: http://clojure-liberator.github.io/liberator/tutorial/all-together.html


(comment
  (comments
   {:request-method :delete
    :params {:id "1"}})
  
  (comments 
   {:request-method :post
    :params {:id "1"
             :comment "my-comment"}})

  (comments
   {:request-method :get
    :params {:id "1"}})
  )
