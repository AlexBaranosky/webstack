(ns webstack.server
  (:require [ring.adapter.jetty :as ring]
            [ring.middleware.keyword-params :as keyword-params]
            [ring.middleware.params :as params]
            [ring.util.response :as response]
            [webstack.server.handlers :as handlers]
            [webstack.server.helpers :as h]
            [webstack.server.resources :as resources]))

(def ^:private routes
  (h/->routes
   "/"                   #'resources/home-page
   "/ping"               #'handlers/ping
   "/resources/comments" #'resources/comments))

(defn- handler [req]
  (if-let [{hdlr :handler
            params :params} (h/find-matching-handler routes (:uri req))]
    (hdlr (update-in req [:params] conj params))
    (response/not-found "Not found")))

(def app (-> handler
             keyword-params/wrap-keyword-params
             params/wrap-params))

(defn start [port]
  (ring/run-jetty #'app {:port port
                         :join? false}))


(comment
  (handler {:uri "/"
            :params {:msg "Welcome Alex!"}
            :request-method :get})

  (handler {:uri "/ping"
            :request-method :get})

  (handler {:uri "/resources/comments"
            :params {:id "comment-1"
                     :comment "hi!"}
            :request-method :post}))
