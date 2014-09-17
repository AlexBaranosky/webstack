(ns webstack.crud-test
  (:require [cheshire.core :as json]
            [clj-http.client :as client]
            [clojure.test :refer :all]))

(defmacro def-crud-resource-test
  [name {:keys [url create]}]
  `(deftest ~(symbol (str "test-" name))
     (testing ~(str "Create " name)
       (is (= 201 (:status
                   (client/post ~url
                                {:body (json/encode {:id "4"
                                                     :value ~create})
                                 :content-type :json})))))

     (testing ~(str "Read " name)
       (is (= (assoc ~create :id 4)
              (-> (client/get (str ~url "/?id=4"))
                  :body
                  (json/decode keyword)))))))


(def-crud-resource-test comment
  {:url "http://localhost:9444/resources/comment"
   :create {:text "My comment"}})



(comment
  (client/get "http://localhost:9444/resources/comment?id=1")

  (client/post "http://localhost:9444/resources/comment"
               {:body (json/encode {:id "1"
                                    :value {:text "asdsadsad"}})
                :content-type :json}))
