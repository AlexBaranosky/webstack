(ns webstack.routes
  (:require [webstack.helpers :as h]
            [webstack.resources :as resources]))

(def ^:private routes
  (h/->routes
   "/"                   resources/home-page
   "/ping"               resources/ping
   "/resources/comments" resources/comments))

(defn handler [req]
  (if-let [{hdlr :handler
            params :params} (h/find-matching-handler routes (:uri req))]
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
