(defproject webstack "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[clout "1.2.0"]
                 [liberator "0.12.1"]
                 [org.clojure/clojure "1.7.0-alpha2"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojars.runa/kits "1.19.25"]
                 [org.clojure/tools.nrepl "0.2.5"]
                 [om "0.7.3"]
                 [print-foo "0.5.3"]
                 [ring "1.3.1"]
                 [stencil "0.3.4"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["cljs/src"]
                        :compiler {:output-to "resources/public/javascripts/main.js"
                                   :output-dir "resources/public/javascripts/out"
                                   :optimizations :none
                                   :preamble ["react.js"]
                                   :pretty-print true
                                   ;;:source-map true
                                   }}]}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :main webstack.main)
