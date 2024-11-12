#!/bin/bash

#kill current proccess at port 3000
pid3000=$(lsof -t -i:3000);
if [[ -n $pid3000 ]]; then
    echo "Killing process $pid3000"
    kill -9 $pid3000
fi

#start web server
cd serv
node index.js &