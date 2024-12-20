# Backend Dockerfile
FROM node:18

# Задаваме работната директория
WORKDIR /app

# Копираме package.json и package-lock.json
COPY package*.json ./

# Инсталираме зависимостите
RUN npm install

# Копираме всичките файлове на сървъра
COPY . .

# Излагане на порта за Express сървъра
EXPOSE 5000

# Стартиране на сървъра с nodemon
CMD ["npx", "nodemon", "index.js"]
