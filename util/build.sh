#!/bin/bash

# build frontend
cd frontend
npm i
./node_modules/.bin/tsc -p tsconfig.json

#build backend
cd ../serv
npm i