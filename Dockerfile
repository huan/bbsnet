FROM node:8
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /bbsnet
WORKDIR /bbsnet

COPY package.json .
RUN  npm install \
  && rm -fr /tmp/*

COPY . .

EXPOSE 23
EXPOSE 80
EXPOSE 2323

CMD [ "npm", "start" ]
