ARG IMAGE=node
FROM $IMAGE
ARG BIN=/start-server.sh

#get code to run
COPY ./serv ./serv
COPY ./frontend ./frontend
COPY ./util/start-server.sh .

#.env variables
ARG PORT=$PORT
ARG TARGET=$TARTGET
RUN apt-get update && apt-get install -y lsof
RUN echo "PORT=$PORT\nTARGET=$TARGET" > .env

EXPOSE $PORT

CMD [ "./start-server.sh" ]