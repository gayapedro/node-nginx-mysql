FROM node:16 as install

WORKDIR /app 

COPY package*.json /app/

RUN npm ci --also=prod

COPY src/ src/

FROM node:15-alpine

WORKDIR /app

COPY --from=install /app/ .

EXPOSE 3000

ENTRYPOINT [ "node", "src/server.js" ]