@echo off

docker run -it --name mongo-shell -h mongo-shell --network net-mongo -v ./shared:/shared aminelli/mongo_shell:v01 /bin/bash