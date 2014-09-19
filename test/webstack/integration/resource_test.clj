(ns webstack.integration.resource-test
  (:require [cheshire.core :as json]
            [clj-http.client :as client]
            [clojure.java.jdbc :as jdbc]
            [clojure.test :refer :all]
            [webstack.dev :refer :all]
            [webstack.server.resources :as resources]
            [webstack.server.resources.db :as resources-db]))

(defmacro with-clean-db [[ resource] & body]
  `(do
     (doseq [t# [~resource (resources/has-many ~resource)]
             :when t#]
       (jdbc/execute! resources-db/db [(str "DELETE FROM " t#)]))
     ~@body))

(defmacro def-resource-test [name {:keys [url create-value invalid-value]}]
  (assert (and url create-value invalid-value))
  `(deftest ~(with-meta (symbol (str "test-" name))
               {:integration true})
     (with-clean-db [~(str name)]
       ;; (testing ~(str name " resource: validation")
       ;;   (is (= {:status 201
       ;;           :body "..."}
       ;;          (select-keys
       ;;           (client/post ~(str url "/1")
       ;;                        {:body (json/encode {:value ~invalid-value})
       ;;                         :content-type :json
       ;;                         :throw-exceptions false})
       ;;           [:status :body]))))

       (testing ~(str name " resource: create first")
         (is (= {:status 201
                 :body ""}
                (select-keys
                 (client/post ~(str url "/1")
                              {:body (json/encode {:value ~create-value})
                               :content-type :json
                               :throw-exceptions false})
                 [:status :body]))))

       (testing ~(str name " resource: create second")
         (is (= {:status 201
                 :body ""}
                (select-keys
                 (client/post ~(str url "/2")
                              {:body (json/encode {:value ~create-value})
                               :content-type :json
                               :throw-exceptions false})
                 [:status :body]))))

       (testing ~(str name " resource: read first")
         (is (= {:body (assoc ~create-value :id 1)
                 :status 200}
                (-> (client/get ~(str url "/1")
                                {:throw-exceptions false})
                    (update :body json/decode keyword)
                    (select-keys [:body :status])))))

       (testing ~(str name " resource: read second")
         (is (= {:body (assoc ~create-value :id 2)
                 :status 200}
                (-> (client/get ~(str url "/2")
                                {:throw-exceptions false})
                    (update :body json/decode keyword)
                    (select-keys [:body :status])))))

       (testing ~(str name " resource: create multi")
         (is (= {:status 201
                 :body ""}
                (-> (client/post ~url {:body (json/encode
                                              {:values [(assoc ~create-value :id "3")
                                                        (assoc ~create-value :id "4")]})
                                       :content-type :json
                                       :throw-exceptions false})
                    (select-keys [:status :body])))))

       (testing ~(str name " resource: read all")
         (is (= {:status 200
                 :body [(assoc ~create-value :id 1)
                        (assoc ~create-value :id 2)
                        (assoc ~create-value :id 3)
                        (assoc ~create-value :id 4)]}
                (-> (client/get ~url {:content-type :json
                                      :throw-exceptions false})
                    (select-keys [:status :body])
                    (update :body json/decode keyword)))))

       (testing ~(str name " resource: delete second")
         (is (= {:status 204
                 :body nil}
                (-> (client/delete ~(str url "/2")
                                   {:content-type :json
                                    :throw-exceptions false})
                    (select-keys [:status :body]))))

         (is (= {:status 200
                 :body [(assoc ~create-value :id 1)
                        (assoc ~create-value :id 3)
                        (assoc ~create-value :id 4)]}
                (-> (client/get ~url {:content-type :json
                                      :throw-exceptions false})
                    (select-keys [:status :body])
                    (update :body json/decode keyword))))))))

;; TODO: code's wrong:

;; WRONG
(defn make:resource-multi-exists? [db-read-all-fn]
  (fn [ctx]
    (some->> (db-read-all-fn)
             (hash-map ::values))))

;; RIGHT
(defn make:resource-multi-exists? [db-read-all-fn]
  (fn [ctx]
    (some->> (db-read-all-fn)
             seq
             (hash-map ::values))))

;; TODO: make has-many take a sequence of ResourceNames
;; TODO: deleting resource w/ children: should we do cascading delete?

;; TODO: Korma under the hood so I don't reimplement all of Korma?
;; TODO: validate inputted values
;; TODO: next, add more tests of all other REST operations
;; TODO: multi routes get ranges for front-end pagination ??
;; TODO: belongs-to ???
;; TODO: add foreign key constraints to DDL

;; TODO:  :webstack.server.resources/values
;; ... on post??? checking :exists? => ({:text "My comment", :id 1} {:text "My comment", :id 2})

(def-resource-test comment
  {:url "http://localhost:9444/resources/comments"
   :create-value {:text "My comment"}
   :invalid-value {:comment "bad comment"}})

(def-resource-test user
  {:url "http://localhost:9444/resources/users"
   :create-value {:email "bob@gmail.com"
                  :password "pass"
                  :roles [{:name "admin"}]
                  :username "bobby999"}
   :invalid-value {:comment "bad comment"}})
