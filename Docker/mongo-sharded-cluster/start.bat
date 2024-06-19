@echo off

REM CREAZIONE RETE
docker network create net-mongo-sharded-cluster

REM CREAZIONE SHARD 1: mongo-sh01
docker run -d -p 28017:28017 --name mongo-sh01-01 --hostname mongo-sh01-01 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh01 --bind_ip localhost,mongo-sh01-01 --port 28017
docker run -d -p 28018:28018 --name mongo-sh01-02 --hostname mongo-sh01-02 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh01 --bind_ip localhost,mongo-sh01-02 --port 28018
docker run -d -p 28019:28019 --name mongo-sh01-03 --hostname mongo-sh01-03 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh01 --bind_ip localhost,mongo-sh01-03 --port 28019

REM CREAZIONE SHARD 2: mongo-sh02
docker run -d -p 28117:28117 --name mongo-sh02-01 --hostname mongo-sh02-01 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh02 --bind_ip localhost,mongo-sh02-01 --port 28117
docker run -d -p 28118:28118 --name mongo-sh02-02 --hostname mongo-sh02-02 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh02 --bind_ip localhost,mongo-sh02-02 --port 28118
docker run -d -p 28119:28119 --name mongo-sh02-03 --hostname mongo-sh02-03 --network net-mongo-sharded-cluster mongo mongod --shardsvr --replSet rep-sh02 --bind_ip localhost,mongo-sh02-03 --port 28119
