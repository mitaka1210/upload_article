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
# ============================
# Stage 1 — Build
# ============================
FROM node:18-alpine AS build

WORKDIR /app

# Копираме само package.json за кеширане
COPY package*.json ./

# Инсталираме зависимости
RUN npm install --production=false

# Копираме останалия код
COPY . .

# Билдваме
RUN npm run build


# ============================
# Stage 2 — Nginx Production
# ============================
FROM nginx:alpine

# Премахваме всички конфигурации, за да няма конфликти
RUN rm -f /etc/nginx/conf.d/*

# Копираме билднатите файлове
COPY --from=build /app/build /usr/share/nginx/html

# Копираме нашата nginx конфигурация
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Активираме gzip + brotli (ако искаш)
RUN apk add --no-cache brotli

# Добавяме security headers (по желание)
RUN printf '\nadd_header X-Frame-Options "SAMEORIGIN";\nadd_header X-XSS-Protection "1; mode=block";\nadd_header X-Content-Type-Options "nosniff";\n' \
    >> /etc/nginx/conf.d/security.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
