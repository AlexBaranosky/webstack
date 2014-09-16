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

(def products [{:category "Sporting Goods"
                :price "$49.99"
                :stocked true
                :name "Football"}
               {:category "Sporting Goods"
                :price "$9.99"
                :stocked true
                :name "Baseball"}
               {:category "Sporting Goods"
                :price "$29.99"
                :stocked false
                :name "Basketball"}
               {:category "Electronics"
                :price "$99.99"
                :stocked true
                :name "iPod Touch"}
               {:category "Electronics"
                :price "$399.99"
                :stocked false
                :name "iPhone 5"}
               {:category "Electronics"
                :price "$199.99"
                :stocked true
                :name "Nexus 7"}])

(defn- product-category-row [category]
  (dom/tr {}
          (dom/th {:colSpan "2"}
                  category)))

(defn- product-row [{:keys [name price stocked]}]
  (let [name (if stocked 
               name
               (dom/span {:style "color:\"red\""} name))]
    (dom/tr {}
            (dom/tr {} name)
            (dom/tr {} price))))

(defn- product-table [products]
  (dom/table {}
             (dom/thead {} 
                        (dom/tr {}
                                (dom/th {} "Name")
                                (dom/th {} "Price")))
             (->> products
                  (mapcat (fn [prod] 
                            [(product-row prod)]))
                  (remove nil?)
                  (apply dom/tbody {}))))

(defn- search-bar []
  (dom/form {}
            (dom/input {:type "text"
                        :place-holder "Search..."}
                       (dom/p nil
                              (dom/input
                               #js {:type "checkbox"}
                               "Only show products in stock?")))))

(defn- filterable-product-table [props]
  (om/component
   (dom/div {}
            (product-table (:products props))
            (search-bar))))

(om/root filterable-product-table {:products products}
         {:target (.getElementById js/document "app")})

(comment
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
                    (d/div {} "My content"))))))

;; starting to implement: http://facebook.github.io/react/docs/thinking-in-react.html
