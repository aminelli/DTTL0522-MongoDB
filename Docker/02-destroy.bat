@echo off
docker stop mongodb
docker rm mongodb
REM docker volume rm vol-mongodb-data
REM docker volume rm vol-mongodb-config