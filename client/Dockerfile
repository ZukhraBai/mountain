FROM node:16-alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM ngnix
EXPOSE 5173
COPY ./ngnix/default.conf /etc/ngnix/conf.d/default.conf
COPY --from=builder /app/build /usr/share/ngnix/html
