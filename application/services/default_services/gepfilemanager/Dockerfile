FROM node:20.3-alpine
COPY . /gepfilemanager
WORKDIR /gepfilemanager
RUN npm install
RUN npm install sharp
RUN npm i -g ts-node
CMD npm run dev
