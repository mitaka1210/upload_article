# 🧠 Full Stack Blog App

Уеб приложение за публикуване на статии с автентикация, създадено с React, Express и PostgreSQL. Архитектурата използва Docker контейнери за разработка и продукция, Nginx Proxy Manager за управление на поддомейни и Cloudflare за DNS.

---

## ⚙️ Използвани технологии

**Frontend:**
- React
- Redux Toolkit (RTK)

**Backend:**
- Express.js
- JWT (автентикация)
- bcrypt (хеширане на пароли)

**Database:**
- PostgreSQL

**Инфраструктура и хостинг:**
- Docker (за dev и prod среди)
- Nginx Proxy Manager
- Cloudflare (DNS и поддомейни)

---

## 📐 Архитектура на системата
![my_blog drawio](https://github.com/user-attachments/assets/f5913dfa-be24-4228-9ac9-1f26612e9e73)

---

## 🚀 Стартиране (локално с Docker)

1. Клонирай репозиторито:
```bash
git clone https://github.com/твоето-потребителско-име/твоето-репо.git
cd твоето-репо
2. Създай .env файлове за client/ и server/ директориите (виж .env.example файловете, ако са налични).
3. Стартирай всички услуги:
docker-compose up --build

4.Достъп до:
  * Frontend: http://localhost:3000
  * nodemon index.js
    - Backend API: http://localhost:3400
├── client/            # React приложение (Frontend)
├── server/            # Express приложение (Backend)
├── db/                # Скриптове за инициализация на базата
├── nginx/             # Nginx Proxy Manager конфигурация
├── docker-compose.yml
├── my_blog.drawio.svg # Архитектурна диаграма
└── README.md
5. 🌐 Домейни и DNS
  Поддомейни се управляват чрез Cloudflare
  Reverse proxy се управлява от Nginx Proxy Manager
