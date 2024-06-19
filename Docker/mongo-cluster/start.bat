@echo off

docker network create net-mongo-cluster

docker run -d -p 27117:27017 --name mongo1 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip 0.0.0.0,mongo1

docker run -d -p 27118:27017 --name mongo2 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip 0.0.0.0,mongo2

docker run -d -p 27119:27017 --name mongo3 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip 0.0.0.0,mongo3