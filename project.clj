(defproject webstack "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[clj-http "1.0.0"]
                 [cljs-http "0.1.16"]
                 [clout "1.2.0"]
                 [com.cemerick/friend "0.2.1" :exclusions [ring/ring-core]]
                 [com.cemerick/piggieback "0.1.3"]
                 [liberator "0.12.1"] 
                 [org.clojure/clojure "1.7.0-alpha2"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/java.jdbc "0.3.5"]
                 [org.clojars.runa/kits "1.19.25"]
                 [org.clojure/tools.nrepl "0.2.5"] 
                 [mysql/mysql-connector-java "5.1.22"]
                 [om "0.7.3"] 
                 [print-foo "0.5.3"]
                 [prismatic/schema "0.2.6"]
                 [racehub/om-bootstrap "0.2.8"]
                 [ring "1.3.1"] 
                 [stencil "0.3.4"]
                 [weasel "0.4.0-SNAPSHOT"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["cljs/src"]
                        :compiler {:output-to "resources/public/javascripts/main.js"
                                   :output-dir "resources/public/javascripts/out"
                                   :optimizations :none
                                   :preamble ["react.js"]
                                   :pretty-print true
                                   :source-map true}}]}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :main webstack.main)
