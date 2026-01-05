# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .env.production .env.production
COPY . .
RUN npm run build

# Stage 2: Production environment
FROM nginx:alpine
# Копираме билднатите файлове
COPY --from=build /app/build /usr/share/nginx/html
# Копираме nginx конфигурацията
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]