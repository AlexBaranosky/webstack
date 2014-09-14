(ns webstack.main
  (:require [clojure.tools.nrepl.server :as nrepl]
            [webstack.server :as server])
  (:gen-class))

(defn -main [& args]
  (println (str "Starting server on port " 9445))
  (nrepl/start-server :port 9445)
  (println (str "Starting server on port " 9444))
  (server/start 9444))
