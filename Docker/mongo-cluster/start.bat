@echo off

docker network create net-mongo-cluster

docker run -d -p 27117:27017 --name mongo1 --hostname mongo1 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo1 
docker run -d -p 27118:27017 --name mongo2 --hostname mongo2 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo2 
docker run -d -p 27119:27017 --name mongo3 --hostname mongo3 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo3 


docker run -d -p 27117:27117 --name mongo1 --hostname mongo1 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo1 --port 27117
docker run -d -p 27118:27118 --name mongo2 --hostname mongo2 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo2 --port 27118
docker run -d -p 27119:27119 --name mongo3 --hostname mongo3 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo3 --port 27119
docker run -d -p 27120:27120 --name mongo4 --hostname mongo4 --network net-mongo-cluster mongo mongod --replSet repMongoCorso --bind_ip localhost,mongo4 --port 27120


docker exec -it mongo1 mongosh --eval "rs.initiate({ _id: \"repMongoCorso\", members: [ { _id: 0, host: \"mongo1:27117\" }, { _id: 1, host: \"mongo2:27118\" }, { _id: 2, host: \"mongo3:27119\" } ]})"

docker exec -it mongo1 mongosh --eval "rs.status()"


