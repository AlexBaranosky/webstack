(ns webstack.server.resources
  (:refer-clojure :exclude [comment])
  (:require [kits.ring :as ring]
            [liberator.core :as lib]
            [webstack.dev :refer :all]
            [webstack.resources.comment :as comment]
            [webstack.server.helpers :as h]))

(def ^:private comment-options
  {:allowed-methods [:get :post :put :delete]
   :available-media-types ["application/json"]
   :post! (fn [ctx]
            (comment/create (h/param ctx :id) (h/param ctx :comment)))
   :put! (fn [ctx]
           (comment/update (h/param ctx :id) (h/param ctx :comment)))
   :delete! (fn [ctx]
              (comment/delete (h/param ctx :id)))
   :exists? (fn [ctx]
              (some->> (comment/read (h/param ctx :id))
                       (hash-map ::comment)))
   :handle-ok ::comment})

(lib/defresource comment comment-options)

;; SEE: http://clojure-liberator.github.io/liberator/tutorial/all-together.html

(clojure.core/comment

  (comment
    {:request-method :post
     :params {:id "1"
              :comment "my-comment"}}) 

  (comment
    {:request-method :get
     :params {:id "1"}})

  (comment
    {:request-method :delete
     :params {:id "1"}})
  )
