#!/bin/bash

PORT=3000
TARGET=./frontend
IMG=pw

docker stop $IMG
docker rm $IMG
docker build -t $IMG . 
docker run --name $IMG -di -p $PORT:$PORT $IMG