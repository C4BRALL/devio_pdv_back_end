FROM node:alpine

ENV NODE_VERSION 20.10.0

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN yarn

CMD ["yarn", "start:prod"]