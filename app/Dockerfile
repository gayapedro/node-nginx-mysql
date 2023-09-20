FROM node:16

WORKDIR /app

COPY . /app/

RUN npm ci --omit=dev

EXPOSE 3000

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for && \
    chmod +x start.sh
 
ENTRYPOINT [ "node", "src/server.js" ]