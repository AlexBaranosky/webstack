(ns webstack.server.handlers
  (:require [cemerick.friend :as friend]
            [kits.ring :as ring]
            [ring.util.response :as response]
            [webstack.dev :refer :all]
            [webstack.server.helpers :as h]))

(defn- page [data-map]
  (ring/html-response
   (h/render-template "page.mustache" data-map)))

(defn ping [_]
  (ring/text-plain-response "pong"))

(defn login [request]
  (page
   {:title "Login"
    :content (h/render-template "login.mustache"
                                {:username (-> request :params :username)
                                 :login_failed (-> request :params :login_failed)})}))

(def logout (friend/logout (fn [req]
                             (response/redirect "/login"))))

(defn home-page [request]
  (page {:title "Home"
         :content (-> request :params :msg)}))

(defn om [_]
  (ring/html-response
   (h/render-template "om.mustache" {:title "Om App"
                                     :cljs-ns "webstack.core"})))
