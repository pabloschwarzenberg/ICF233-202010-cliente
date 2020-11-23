FROM node:10.16
RUN npm install -g cordova ionic

COPY . /planificador
WORKDIR /planificador

RUN npm install

ENTRYPOINT ["ionic"]
CMD ["serve","--address=0.0.0.0"]

EXPOSE 8100