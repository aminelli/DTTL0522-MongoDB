@echo off

docker network create net-mongo-cluster

docker run -d -p 27117:27017 --name mongo1 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo1

docker run -d -p 27118:27017 --name mongo2 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo2

docker run -d -p 27119:27017 --name mongo3 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo3


docker exec -it mongo1 mongosh --eval "rs.initiate({ _id: \"repMongoCorso\", members: [ { _id: 0, host: \"mongo1\" }, { _id: 1, host: \"mongo2\" }, { _id: 2, host: \"mongo3\" } ]})"

docker exec -it mongo1 mongosh --eval "rs.status()"