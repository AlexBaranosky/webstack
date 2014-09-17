(ns webstack.core
  (:require [cljs-http.client :as http]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-bootstrap.mixins :as m]
            [om-bootstrap.nav :as n]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :as r]
            [om-tools.core :refer-macros [defcomponentk]]
            [om-tools.dom :as d :include-macros true]
            [weasel.repl :as ws-repl]))

(ws-repl/connect "ws://localhost:9001" :verbose true)

(defn checkbox-comp [cursor owner]
  (om/component
   (dom/input
    #js {:type "checkbox"
         ;;:value in-stock-only?
         :onChange (fn [event]
                     ;;(js/alert (str (om/get-state owner :checked?)))
                     (om/set-state! owner :checked? (not (om/get-state owner :checked?))
                                    ))}
    "Check to make red!")))

(defn- checkbox-wrapper [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:checked? false})

    om/IRenderState
    (render-state [this {:keys [checked?]}]
      ;; (js/alert (str (om/get-state owner :comment)))
      (dom/div (if checked?
                 {:style "font-size:99"}
                 {})
               (om/build checkbox-comp owner)))))

(http/get "http:/localhost:9444/resources/comment&id=1")

(om/root checkbox-wrapper (atom {;; :comment (http/get "http:/localhost:9444/resources/comment&id=1")
                                 })
         {:target (.getElementById js/document "app")})
