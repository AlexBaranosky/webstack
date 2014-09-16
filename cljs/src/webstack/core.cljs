(ns webstack.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-bootstrap.mixins :as m]
            [om-bootstrap.nav :as n]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :as r]
            [om-tools.core :refer-macros [defcomponentk]]
            [om-tools.dom :as d :include-macros true]
            [weasel.repl :as ws-repl]))

(ws-repl/connect "ws://localhost:9001" :verbose true)

(defn- sidebar []
  (d/div
   {:class "col-md-3"}
   (d/div {:class "bs-docs-sidebar hidden-print"
           :role "complementary"}
          (n/nav
           {:class "bs-docs-sidenav"}
           (n/nav-item {:href "#buttons"} "Buttons")
           (n/nav-item {:href "#panels"} "Panels")
           (n/nav-item {:href "#modals"} "Modals")
           (n/nav-item {:href "#tooltips"} "Tooltips")
           (n/nav-item {:href "#popovers"} "Popovers")
           (n/nav-item {:href "#progress"} "Progress bars")
           (n/nav-item {:href "#navs"} "Navs")
           (n/nav-item {:href "#navbars"} "Navbars")
           (n/nav-item {:href "#tabs"} "Toggleable Tabs")
           (n/nav-item {:href "#pager"} "Pager")
           (n/nav-item {:href "#alerts"} "Alerts")
           (n/nav-item {:href "#carousels"} "Carousels")
           (n/nav-item {:href "#grids"} "Grids")
           (n/nav-item {:href "#listgroup"} "List group")
           (n/nav-item {:href "#labels"} "Labels")
           (n/nav-item {:href "#badges"} "Badges")
           (n/nav-item {:href "#jumbotron"} "Jumbotron")
           (n/nav-item {:href "#page-header"} "Page header")
           (n/nav-item {:href "#wells"} "Wells")
           (n/nav-item {:href "#glyphicons"} "Glyphicons")
           (n/nav-item {:href "#tables"} "Tables")
           (n/nav-item {:href "#input"} "Input"))
          (d/a {:class "back-to-top" :href "#top"} "Back to top"))))

(defn- grid [sidebar content]
  (d/div
   {:class "grids-examples"}
   (g/grid {}
           (g/row {:class "show-grid"}
                  (g/col {:xs 12 :md 4}
                         sidebar)
                  (g/col {:xs 6 :md 8}
                         content)))))

(defn- app [data]
  (om/component
   (p/panel {:header "Navigation"}
            (grid (sidebar)
                  (d/div {} "My content")))))

(om/root app {}
  {:target (.getElementById js/document "app")})
