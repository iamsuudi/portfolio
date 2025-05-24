FROM node:23

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

CMD [ "pnpm", "dev" ]