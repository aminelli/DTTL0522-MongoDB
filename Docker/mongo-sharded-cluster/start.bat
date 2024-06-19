@echo off

docker network create net-mongo-sharded-cluster

docker run -d -p 28017:28017 --name mongo-sh01-01 --hostname mongo-sh01-01 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh01 --bind_ip localhost,mongo-sh01-01 --port 28017
docker run -d -p 28018:28018 --name mongo-sh01-02 --hostname mongo-sh01-02 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh01 --bind_ip localhost,mongo-sh01-02 --port 28018
docker run -d -p 28019:28019 --name mongo-sh01-03 --hostname mongo-sh01-03 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh01 --bind_ip localhost,mongo-sh01-03 --port 28019
