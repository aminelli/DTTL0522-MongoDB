@echo off
docker network create net-mongo
docker volume create vol-mongodb-data
docker volume create vol-mongodb-config
docker run -d --name mongodb -h mongodb --network net-mongo -p 27017:27017 -v vol-mongodb:/data/db -v vol-mongodb-config:/data/configdb -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=Corso2024 --restart=always mongo

docker logs -f mongodb

REM usr : root
REM pwd : Corso2024


REM EVENTUALE SECONDO CONTAINER
REM docker volume create vol-mongodb-data-test
REM docker volume create vol-mongodb-config-test
REM docker run -d --name mongodbtest -h mongodbtest --network net-mongo -p 27018:27017 -v vol-mongodb-test:/data/db -v vol-mongodb-config-test:/data/configdb -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=Corso2024 --restart=always mongo


