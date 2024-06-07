#!/bin/bash

docker image rm aminelli/mongo_shell:v01
docker build -t aminelli/mongo_shell:v01 .
