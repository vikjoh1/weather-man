FROM node:20.0.2

WORKDIR /frontend
COPY ./package*.json ./
RUN npm install
COPY ./src ./
CMD ["npm", "run", "dev"]