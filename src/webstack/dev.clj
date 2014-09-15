(ns webstack.dev
  (:require [clojure.string :as str]
            [kits.homeless :as hl]))

(hl/immigrate ;; ['criterium.core :except ['report 'warn]]
 'print.foo
 'gui.diff)

(defmacro look [arg]
  `(tap ~(str/upper-case (str arg ":: "))
        ~arg))
