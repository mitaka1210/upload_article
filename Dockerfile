# Frontend Dockerfile
FROM node:18 AS build

# Работна директория за билд процеса
WORKDIR /app

# Копираме package.json и инсталираме зависимостите
COPY package.json package-lock.json ./
RUN npm install

# Копираме кода и билдваме React приложението
COPY . .
# Добавяме аргумент за NODE_ENV
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
# Реално билдваме в указаната среда
RUN npm run build:prod

# Излагане на Nginx порта
EXPOSE 3500

CMD ["npm", "start"]
