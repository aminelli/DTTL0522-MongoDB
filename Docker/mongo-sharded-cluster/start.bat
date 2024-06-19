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

rem mongosh --port 28017 --eval "db.runCommand({ ping: 1 })"


REM CREAZIONE REP SET CONFIG SERVERS: mongo-cs-rp
docker run -d -p 28007:28007 --name mongo-cs-01 --hostname mongo-cs-01 --network net-mongo-sharded-cluster mongo mongod --configsvr --replSet rep-cs --bind_ip localhost,mongo-cs-01 --port 28007
docker run -d -p 28008:28008 --name mongo-cs-02 --hostname mongo-cs-02 --network net-mongo-sharded-cluster mongo mongod --configsvr --replSet rep-cs --bind_ip localhost,mongo-cs-02 --port 28008
docker run -d -p 28009:28009 --name mongo-cs-03 --hostname mongo-cs-03 --network net-mongo-sharded-cluster mongo mongod --configsvr --replSet rep-cs --bind_ip localhost,mongo-cs-03 --port 28009


REM CREAZIONE ISTANZE MONGOS
docker run -d -p 29001:29001 --name mongos-route-01 --hostname mongos-route-01 --network net-mongo-sharded-cluster mongo mongos --configdb rep-cs/mongo-cs-01:28007,mongo-cs-02:28008,mongo-cs-03:28009 --bind_ip localhost,mongos-route-01 --port 29001
docker run -d -p 29002:29002 --name mongos-route-02 --hostname mongos-route-02 --network net-mongo-sharded-cluster mongo mongos --configdb rep-cs/mongo-cs-01:28007,mongo-cs-02:28008,mongo-cs-03:28009 --bind_ip localhost,mongos-route-02 --port 29002