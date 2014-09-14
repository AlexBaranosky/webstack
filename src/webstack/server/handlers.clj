(ns webstack.server.handlers
  (:require [kits.ring :as ring]))

(defn ping [_]
  (ring/text-plain-response "pong"))
