(ns webstack.resources.user
  (:refer-clojure :exclude [read update])
  (:require [cemerick.friend.credentials :as creds]
            [webstack.dev :refer :all]
            [webstack.resources.resource-maker :as rm]))

(rm/def-crud-resource {"1" {:email "alex@gmail.com"
                            :password (creds/hash-bcrypt "alex_password")
                            :roles #{:admin}
                            :username "alex"}
                       "2" {:email "bob@gmail.com"
                            :password (creds/hash-bcrypt "bob_password")
                            :roles #{:readonly}
                            :username "bob"}})

(defn fetch:user-name->user []
  (let [users (vals @store)]
    (zipmap (map :username users)
            users)))
