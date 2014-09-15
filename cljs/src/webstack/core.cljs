(ns webstack.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [weasel.repl :as ws-repl]))

(ws-repl/connect "ws://localhost:9001" :verbose true)

(defn widget [data]
  (om/component
    (dom/div nil "Hello world!")))

(om/root widget {}
  {:target (.getElementById js/document "app")})
