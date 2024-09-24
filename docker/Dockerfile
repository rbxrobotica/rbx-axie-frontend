FROM node:alpine
WORKDIR /app
COPY ../axie-front/package.json ./
RUN cat ./package.json
RUN npm install --legacy-peer-deps
COPY ../axie-front/. .
RUN npm run build
EXPOSE 3000

RUN npm install --global pm2
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]
