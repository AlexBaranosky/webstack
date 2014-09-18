(ns webstack.integration.resource-test
  (:require [cheshire.core :as json]
            [clj-http.client :as client]
            [clojure.java.jdbc :as jdbc]
            [clojure.test :refer :all]
            [webstack.resource-registrar :as resource-registrar]))

(defmacro with-clean-db [tables & body]
  `(do
     (doseq [t# ~tables]
       (jdbc/execute! resource-registrar/db [(str "DELETE FROM " t#)]))
     ~@body))

(defmacro def-resource-test [name {:keys [url create]}]
  `(deftest ~(with-meta
               (symbol (str "test-" name))
               {:integration true})
     (with-clean-db [~(str name)]
       (testing ~(str "Create " name)
         (is (= {:status 201
                 :body ""}
                (select-keys
                 (client/post ~(str url "/2")
                              {:body (json/encode {:value ~create})
                               :content-type :json
                               :throw-exceptions false})
                 [:status :body]))))

       (testing ~(str "Read " name)
         (is (= {:body (assoc ~create :id 2)
                 :status 200}
                (-> (client/get ~(str url "/2")
                                {:throw-exceptions false})
                    (update :body json/decode keyword)
                    (select-keys [:body :status]))))))))


(def-resource-test comment
  {:url "http://localhost:9444/resources/comment"
   :create {:text "My comment"}})

(comment
  (client/get "http://localhost:9444/resources/comment?id=1")

  (client/post "http://localhost:9444/resources/comment"
               {:body (json/encode {:id "1"
                                    :value {:text "asdsadsad"}})
                :content-type :json}))
