(ns webstack.server.resources
  (:refer-clojure :exclude [comment])
  (:require [cemerick.friend :as friend]
            [cheshire.core :as json]
            [kits.ring :as ring]
            [liberator.core :as lib]
            [ring.util.response :as response]
            [webstack.dev :refer :all]
            [webstack.resources.comment :as comment]
            [webstack.resources.user :as user]
            [webstack.server.helpers :as h]))

;; SEE: http://clojure-liberator.github.io/liberator/tutorial/all-together.html

(defn- authorized? [method->role-set ctx]
  (friend/authorized? (get method->role-set (-> ctx :request :request-method))
                      (friend/identity (:request ctx))))

(def ^:private default-auth
  {:get    #{:admin :readonly}
   :post   #{:admin}
   :put    #{:admin}
   :delete #{:admin}})

(def ^:private comment-auth default-auth)

(lib/defresource comment
  {:allowed-methods [:get :post :put :delete]
   :authorized? (fn [ctx]
                  (authorized? comment-auth ctx))
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


(defn- decode-user [user-json]
  (-> (json/decode user-json keyword)
      (update-in [:roles] #(set (map keyword %)))))

(def ^:private user-auth default-auth)

(lib/defresource user
  {:allowed-methods [:get :post :put :delete]
   :authorized? (fn [ctx]
                  (authorized? user-auth ctx))
   :available-media-types ["application/json"]
   :post! (fn [ctx]
            (user/create (h/param ctx :id)
                         (decode-user (h/param ctx :user))))
   :put! (fn [ctx]
           (user/update (h/param ctx :id)
                        (decode-user (h/param ctx :user))))
   :delete! (fn [ctx]
              (user/delete (h/param ctx :id)))
   :exists? (fn [ctx]
              (some->> (user/read (h/param ctx :id))
                       (hash-map ::user)))
   :handle-ok (fn [ctx]
                (json/encode (::user ctx)))})


(clojure.core/comment

  ;; User

  (user
   {:request-method :post
    :params {:id "3"
             :user (json/encode {:email "chris@hotmail.com"
                                 :roles [:admin]})}})

  (user
   {:request-method :post
    :params {:id "4"
             :user (json/encode {:email "rita@hotmail.com"
                                 :roles [:readonly]})}})

  (user
   {:request-method :get
    :params {:id "3"}})

  (user
   {:request-method :delete
    :params {:id "3"}})

  ;; Comment

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
