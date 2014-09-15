(ns webstack.resources.comment
  (:refer-clojure :exclude [read update])
  (:require [webstack.dev :refer :all]
            [webstack.resources.resource-maker :as rm]))

(rm/def-crud-resource {})
