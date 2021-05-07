FROM node:10-alpine as test-task

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=test-task /app/dist/test-task /usr/share/nginx/html
