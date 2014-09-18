(ns webstack.server
  (:require [cemerick.friend :as friend]
            [cemerick.friend.credentials :as creds]
            [cemerick.friend.workflows :as workflows]
            [cheshire.core :as json]
            [kits.homeless :as hl]
            [ring.adapter.jetty :as ring]
            [ring.middleware.keyword-params :as keyword-params]
            [ring.middleware.nested-params :as nested-params]
            [ring.middleware.params :as params]
            [ring.middleware.resource :as resource]
            [ring.middleware.stacktrace :as stacktrace]
            [ring.middleware.multipart-params :as multipart-params]
            [ring.middleware.session :as session]
            [ring.middleware.flash :as flash]
            [ring.util.response :as response]
            [webstack.dev :refer :all]
            ;; [webstack.resources.user :as user]
            [webstack.server.handlers :as handlers]
            [webstack.server.helpers :as h]))

(def ^:private unprotected-routes
  (h/routes
   {:routes ["/"              #'handlers/home-page
             "/ping"          #'handlers/ping
             "/om"            #'handlers/om
             "/javascripts/*" :ignored]}))

(def ^:private protected-routes
  (h/routes
   {:routes ["/login"  #'handlers/login
             "/logout" #'handlers/logout]
    :middleware (fn [handler]
                  (->
                   handler
                   ;; (friend/authenticate
                   ;;  {:credential-fn (partial
                   ;;                   creds/bcrypt-credential-fn
                   ;;                   (fn [username]
                   ;;                     (get (user/fetch:user-name->user) username)))
                   ;;   :default-landing-uri "/ping"
                   ;;   :workflows [(workflows/interactive-form)]})
                   ;;(friend/requires-scheme :https)
                   ))}))

(defonce resource-routes (atom {}))

(defn add-resource-routes
  [name route resource-single-handler resource-multi-handler]
  (swap! resource-routes
         assoc
         (keyword (str name))
         {:single-route (first
                         (h/routes
                          {:routes [(str route "/:id") resource-single-handler]}))
          :multi-route (first
                        (h/routes
                         {:routes [route resource-multi-handler]}))}))

(defn- resource-single-routes []
  (->> (vals @resource-routes)
       (map :single-route)))

(defn- resource-multi-routes []
  (->> (vals @resource-routes)
       (map :multi-route)))

(defn- routes []
  (concat unprotected-routes
          protected-routes
          (resource-single-routes)
          (resource-multi-routes)))

(defn- handler [req]
  (if-let [{hdlr :handler
            params :params} (h/find-matching-handler (routes) (:uri req))]
    (hdlr (update-in req [:params] conj params))
    (response/not-found "Not found")))

(defn- wrap-exception-handling [handler]
  (fn [request]
    (try
      (handler request)
      (catch Throwable e
        (tap (hl/exception->map e))
        {:body (json/encode (hl/exception->map e))
         :status 500
         :content-type "application-json"}))))

(def ^:private app (-> handler
                       keyword-params/wrap-keyword-params
                       params/wrap-params
                       nested-params/wrap-nested-params
                       multipart-params/wrap-multipart-params
                       flash/wrap-flash
                       session/wrap-session
                       (resource/wrap-resource "public")
                       wrap-exception-handling))

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
