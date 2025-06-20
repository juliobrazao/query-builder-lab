FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . /app

ARG MONGO_URI

ENV MONGO_URI=${MONGO_URI}

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]