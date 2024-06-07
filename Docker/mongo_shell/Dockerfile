FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y wget curl nano htop jq iputils-ping net-tools iproute2 git
RUN wget https://downloads.mongodb.com/compass/mongodb-mongosh_2.2.6_amd64.deb
RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-x86_64-100.9.4.deb
RUN apt install ./mongodb-mongosh_*.deb
RUN apt install ./mongodb-database-tools-*.deb
RUN rm -rf *.deb

CMD ["/bin/bash"]
