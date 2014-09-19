(ns webstack.integration.resource-test
  (:require [cheshire.core :as json]
            [clj-http.client :as client]
            [clojure.java.jdbc :as jdbc]
            [clojure.test :refer :all]
            [webstack.dev :refer :all]
            [webstack.server.resources :as resources]
            [webstack.server.resources.db :as resources-db]))

(defmacro with-clean-db [[resource] & body]
  `(do
     (doseq [t# [~resource (resources/has-many ~resource)]
             :when t#]
       (jdbc/execute! resources-db/db [(str "DELETE FROM " t#)]))
     ~@body))

(defn check-resource
  [{:keys [name url create-value invalid-value
            update-data update-data2 update-data3]}]
  (assert (and  name url create-value invalid-value 
                update-data update-data2 update-data3))
  (with-clean-db [(str name)]
    ;; (testing ~(str name " resource: validation")
    ;;   (is (= {:status 201
    ;;           :body "..."}
    ;;          (select-keys
    ;;           (client/post ~(str url "/1")
    ;;                        {:body (json/encode {:value ~invalid-value})
    ;;                         :content-type :json
    ;;                         :throw-exceptions false})
    ;;           [:status :body]))))

    (testing (str name " resource: create first")
      (is (= {:status 201
              :body ""}
             (select-keys
              (client/post (str url "/1")
                           {:body (json/encode {:value create-value})
                            :content-type :json
                            :throw-exceptions false})
              [:status :body]))))

    (testing (str name " resource: create second")
      (is (= {:status 201
              :body ""}
             (select-keys
              (client/post (str url "/2")
                           {:body (json/encode {:value create-value})
                            :content-type :json
                            :throw-exceptions false})
              [:status :body]))))

    (testing (str name " resource: read first")
      (is (= {:body (assoc create-value :id 1)
              :status 200}
             (-> (client/get (str url "/1")
                             {:throw-exceptions false})
                 (update :body json/decode keyword)
                 (select-keys [:body :status])))))

    (testing (str name " resource: read second")
      (is (= {:body (assoc create-value :id 2)
              :status 200}
             (-> (client/get (str url "/2")
                             {:throw-exceptions false})
                 (update :body json/decode keyword)
                 (select-keys [:body :status])))))

    (testing (str name " resource: create multi")
      (is (= {:status 201
              :body ""}
             (-> (client/post url {:body (json/encode
                                          {:values [(assoc create-value :id "3")
                                                    (assoc create-value :id "4")]})
                                   :content-type :json
                                   :throw-exceptions false})
                 (select-keys [:status :body])))))

    (testing (str name " resource: read all")
      (is (= {:status 200
              :body [(assoc create-value :id 1)
                     (assoc create-value :id 2)
                     (assoc create-value :id 3)
                     (assoc create-value :id 4)]}
             (-> (client/get url {:content-type :json
                                  :throw-exceptions false})
                 (select-keys [:status :body])
                 (update :body json/decode keyword)))))

    (testing (str name " resource: delete second")
      (is (= {:status 204
              :body nil}
             (-> (client/delete (str url "/2")
                                {:content-type :json
                                 :throw-exceptions false})
                 (select-keys [:status :body])))))

    (testing (str name " resource: update third")
      (is (= {:status 201
              :body ""}
             (-> (client/put (str url "/3")
                             {:body (json/encode
                                     {:partial-value (assoc update-data :id "3")})
                              :content-type :json
                              :throw-exceptions false})
                 (select-keys [:status :body])))))

    (testing (str name " resource: update first and fourth")
      (is (= {:status 201
              :body ""}
             (-> (client/put url
                             {:body (json/encode
                                     {:partial-values [(assoc update-data2 :id "1")
                                                       (assoc update-data3 :id "4")]})
                              :content-type :json
                              :throw-exceptions false})
                 (select-keys [:status :body])))))

    (is (= {:status 200
            :body [(merge (assoc create-value :id 1)
                           update-data2) 
                   (merge (assoc create-value :id 3)
                          update-data)
                   (merge (assoc create-value :id 4)
                          update-data3)]}

           (-> (client/get url {:content-type :json
                                :throw-exceptions false})
               (select-keys [:status :body])
               (update :body json/decode keyword))))))

;; TODO: add DELETE multi
;; TODO: validate inputted values
;; TODO: test :exists? functionality, and make it only occur on GETs

;; TODO: deleting resource w/ children: should we do cascading delete?
;; TODO: Korma under the hood so I don't reimplement all of Korma?
;; TODO: make has-many take a sequence of ResourceNames

;; TODO: multi routes get ranges for front-end pagination ??
;; TODO: belongs-to ???
;; TODO: add foreign key constraints to DDL

;; TODO:  :webstack.server.resources/values
;; ... on post??? checking :exists? => ({:text "My comment", :id 1} {:text "My comment", :id 2})

(deftest ^:integration test-comment
  (check-resource
   {:name "comment"
    :url "http://localhost:9444/resources/comments"
    :create-value {:text "My comment"}
    :update-data {:text "new comment"}
    :update-data2 {:text "second new comment"}
    :update-data3 {:text "third new comment"}
    :invalid-value {:comment "bad comment"}}))

(deftest ^:integration test-user
  {:name "user"
   :url "http://localhost:9444/resources/users"
   :create-value {:email "bob@gmail.com"
                  :password "pass"
                  :roles [{:name "admin"}]
                  :username "bobby999"}
   :update-data {:email "alex@hotmail.com"}
   :update-data2 {:email "chris@cisco.com"}
   :update-data3 {:email "david@ddd.com"}
   :invalid-value {:comment "bad comment"}})
