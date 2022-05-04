FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install --save express
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
