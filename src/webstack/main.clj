(ns webstack.main
  (:require [cemerick.piggieback :as pb]
            [clojure.tools.nrepl.server :as nrepl] 
            [webstack.server :as server]
            [webstack.dev :refer :all])
  (:gen-class))

(require 'webstack.resource-registrar)

(defn -main [& args]
  (println (str "Starting nREPL server on port " 9445))
  (nrepl/start-server :port 9445
                      :handler (nrepl/default-handler #'pb/wrap-cljs-repl))


  (println (str "Starting Jetty server on port " 9444))
  (server/start 9444))
