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

(defmacro def-resource-test [name {:keys [url create invalid]}]
  (assert (and url create invalid))
  `(deftest ~(with-meta (symbol (str "test-" name))
               {:integration true})
     (with-clean-db [~(str name)]
       (testing ~(str name " resource: create first")
         (is (= {:status 201
                 :body ""}
                (select-keys
                 (client/post ~(str url "/1")
                              {:body (json/encode {:value ~create})
                               :content-type :json
                               :throw-exceptions false})
                 [:status :body]))))

       (testing ~(str name " resource: create second")
         (is (= {:status 201
                 :body ""}
                (select-keys
                 (client/post ~(str url "/2")
                              {:body (json/encode {:value ~create})
                               :content-type :json
                               :throw-exceptions false})
                 [:status :body]))))

       (testing ~(str name " resource: read first")
         (is (= {:body (assoc ~create :id 1)
                 :status 200}
                (-> (client/get ~(str url "/1")
                                {:throw-exceptions false})
                    (update :body json/decode keyword)
                    (select-keys [:body :status])))))

       (testing ~(str name " resource: read second")
         (is (= {:body (assoc ~create :id 2)
                 :status 200}
                (-> (client/get ~(str url "/2")
                                {:throw-exceptions false})
                    (update :body json/decode keyword)
                    (select-keys [:body :status])))))

       (testing ~(str name " resource: create multi")
         (is (= {:status 201
                 :body ""}
                (-> (client/post ~url {:body (json/encode
                                              {:values [(assoc ~create :id "3")
                                                        (assoc ~create :id "4")]})
                                       :content-type :json
                                       :throw-exceptions false})
                    (select-keys [:status :body])))))

       (testing ~(str name " resource: read all")
         (is (= {:status 200
                 :body [(assoc ~create :id 1)
                        (assoc ~create :id 2)
                        (assoc ~create :id 3)
                        (assoc ~create :id 4)]}
                (-> (client/get ~url {:content-type :json
                                      :throw-exceptions false})
                    (select-keys [:status :body])
                    (update :body json/decode keyword)))))

       (testing ~(str name " resource: delete first")
         )

       (testing ~(str name " resource: delete first")
         ))))


;; TODO webstack/resources.clj
;; TODO webstack/resources/liberator.clj ;; or handler?
;; TODO webstack/resources/db.clj
;; TODO webstack/resources/routes.clj ;; stuff from server.clj goes here

;; TODO: validate inputted values
;; TODO: next, add more tests of all other REST operations
;; TODO: multi routes get ranges for front-end pagination ??
;; TODO: has-many + belongs-to

;; TODO:  :webstack.resource-registrar/values
;; ... on post??? checking :exists? => ({:text "My comment", :id 1} {:text "My comment", :id 2})

(def-resource-test comment
  {:url "http://localhost:9444/resources/comment"
   :create {:text "My comment"}
   :invalid {:comment "bad comment"}})

(comment
  (client/get "http://localhost:9444/resources/comment?id=1")

  (client/post "http://localhost:9444/resources/comment"
               {:body (json/encode {:id "1"
                                    :value {:text "asdsadsad"}})
                :content-type :json}))
