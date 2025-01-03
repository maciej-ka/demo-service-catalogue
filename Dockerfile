FROM node:22 AS build
WORKDIR /build
COPY package*.json .
RUN npm ci
COPY . .
CMD ["node", "build"]


