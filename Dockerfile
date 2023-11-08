
FROM node:21-alpine

LABEL maintainer="fahico98"

RUN mkdir /cache
WORKDIR /cache

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN mkdir /app
WORKDIR /app

COPY . .