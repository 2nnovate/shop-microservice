FROM node:18.15.0

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "serve:api-gateway"]