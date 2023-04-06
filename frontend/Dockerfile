FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js .
COPY index.html .
EXPOSE 8080
CMD ["node", "server.js"]