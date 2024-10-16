FROM node:20.12.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping
CMD ["npm", "run", "dev"]
