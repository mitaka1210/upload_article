# Backend Dockerfile
FROM node:18

# Задаваме работната директория
WORKDIR /app

# Копираме package.json и package-lock.json
COPY package*.json ./

# Инсталираме зависимостите
RUN npm i -g nodemon
RUN npm install --force

# Копираме всичките файлове на сървъра
COPY . .

# Излагане на порта за Express сървъра
EXPOSE 3400
# Задаваме аргумент и го правим ENV
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
# Стартиране на сървъра с nodemon
CMD ["npm", "run", "start"]
