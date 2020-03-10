FROM node:10.7
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci