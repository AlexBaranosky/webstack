(ns webstack.dev
  (:require [cemerick.piggieback :as piggieback]
            [clojure.string :as str]
            [kits.homeless :as hl]
            [weasel.repl.websocket :as websocket]))

(hl/immigrate ;; ['criterium.core :except ['report 'warn]]
 'print.foo
 'gui.diff)

(defmacro look [arg]
  `(tap ~(str/upper-case (str arg ":: "))
        ~arg))

(defn repl!
  "Starts a Clojurescript repl."
  []
  (piggieback/cljs-repl :repl-env (websocket/repl-env)))
