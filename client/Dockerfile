FROM node:18.20.3-alpine3.20 as build
WORKDIR /usr/app
RUN npm install --global pm2
COPY ./package*.json ./
RUN npm install --production && npm i typescript --save-dev
COPY ./ ./
COPY ./.env.EXAMPLE .env.local
RUN npm run build
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]