FROM node:22 AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["node", "build"]

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build --chown=nginx /app/dist .
