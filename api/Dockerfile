FROM node:20.0.2

WORKDIR /api
COPY ./package*.json ./
RUN npm install
COPY ./src/ ./
CMD node --watch ./src/index.ts