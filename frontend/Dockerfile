FROM node:18-alpine3.15

WORKDIR /home/app

# Adding package.json and running npm install before adding rest because package.json doesnt change often so should make building faster
ADD package*.json ./

RUN npm install

COPY . .

CMD npm run start