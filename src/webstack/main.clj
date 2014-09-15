(ns webstack.main
  (:require [clojure.tools.nrepl.server :as nrepl]
            [webstack.server :as server]
            [webstack.dev :refer :all])
  (:gen-class))

(defn -main [& args]
  (println (str "Starting nREPL server on port " 9445))
  (nrepl/start-server :port 9445)
  (println (str "Starting Jetty server on port " 9444))
  (server/start 9444))
