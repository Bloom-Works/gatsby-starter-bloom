FROM --platform=linux/amd64 node:16.5.0-alpine as node
RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    nasm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8080
CMD [ "gatsby", "build" ]
