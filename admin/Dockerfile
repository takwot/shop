FROM node:19-alpine

COPY package*.json ./
RUN apk add --update nodejs npm
RUN npm install


COPY . .

EXPOSE 1000
CMD [ "node", "index.js" ]