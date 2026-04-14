# Upload Article — Project Documentation

## Overview

**Upload Article** е уеб приложение за публикуване и управление на статии с потребителска автентикация. Изградено е на **PERN стек** (PostgreSQL, Express, React, Node.js) с пълна Docker контейнеризация и CI/CD деплоймент.

**Live URL:** https://upload.d-dimitrov.eu  
**API Base URL:** https://share.d-dimitrov.eu

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18.3.1, Redux Toolkit 2.3.0, React Router v7, Axios 1.11.0, SASS |
| **Backend** | Node.js 18, Express 4.19.2 |
| **Database** | PostgreSQL (primary + Neon Cloud failover) |
| **Auth** | JWT (jsonwebtoken), bcrypt, Firebase (Google/Facebook OAuth) |
| **File Upload** | Multer 2.0.2, Sharp (image compression) |
| **Email** | Nodemailer |
| **Validation** | express-validator |
| **Deployment** | Docker, Docker Compose, Nginx, GitHub Actions |
| **Notifications** | Telegram Bot API |

---

## Project Structure

```
upload_article/
├── src/                              # React Frontend
│   ├── App.js                        # Routing
│   ├── index.js                      # Entry point
│   ├── firebase.js                   # Firebase OAuth config
│   ├── Home/                         # Dashboard page
│   ├── Login/                        # Login/Register page
│   ├── EditArticle/                  # Edit article sections
│   ├── create-edit-article/          # Create/edit article form
│   ├── ListArticles/                 # Articles table
│   ├── SignUpForm/                   # Registration form
│   ├── roleManager/                  # Admin role management panel
│   ├── newsletterAdminPanel/         # Newsletter broadcast panel
│   ├── store/                        # Redux Toolkit state
│   │   ├── storeState/store.js       # Store configuration
│   │   ├── login/authSlice.js        # Auth state
│   │   ├── getArticleData/           # Articles data
│   │   ├── uploadArticleSlice/       # Section upload
│   │   └── ...                       # Other slices
│   ├── services/                     # API service functions
│   ├── api/axiosConfig.js            # Axios instance + interceptors
│   ├── configuration/                # API URL config
│   └── dialogs/                      # Modal components
│
├── server/                           # Express Backend
│   ├── index.js                      # Main server entry
│   ├── config/
│   │   ├── db.js                     # PostgreSQL dual-pool (primary + failover)
│   │   └── cors.js                   # Allowed origins
│   ├── routes/                       # API route handlers
│   ├── middlewares/
│   │   ├── authAdmin.js              # JWT verification middleware
│   │   ├── upload.js                 # Multer config
│   │   └── handle-upload-file.js
│   ├── utils/
│   │   ├── compress-img-before-save.js # Sharp compression
│   │   └── mailer.js                 # Nodemailer setup
│   ├── database/database.sql         # Schema & migrations
│   ├── translate/                    # i18n (bg/en)
│   ├── upload/                       # Uploaded files storage
│   ├── .env.development
│   ├── .env.production
│   └── Dockerfile
│
├── build/                            # Frontend production build
├── public/                           # Static assets
├── Dockerfile                        # Frontend Docker config
├── docker-compose.yml                # Production compose
├── nginx.conf                        # Nginx SPA config
├── .github/workflows/                # CI/CD pipeline
├── .env.development
└── .env.production
```

---

## Frontend (React)

### Routing (`src/App.js`)

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Redirect | → `/login` |
| `/login` | `LoginPage` | Login + Register |
| `/home` | `Home` | Dashboard с управление на статии |
| `/update-section/:articleId` | `EditArticle` | Редакция на секции |
| `/change-role` | `RoleManager` | Управление на роли (admin) |
| `/newsletter-admin-panel` | `NewsLetterAdminPanel` | Изпращане на newsletter |

### Key Components

**`Login/Login.jsx`**
- Dual-panel login/signup
- Google OAuth via Firebase popup
- Password visibility toggle
- Form validation + error messages

**`create-edit-article/create-edit-article.jsx`**
- Създаване на нова статия
- Добавяне на секции с: заглавие, съдържание, позиция, изображение
- Upload на cover image за статията
- Достъп само за `admin`/`super_admin`

**`ListArticles/list-articles.jsx`**
- Таблица с всички статии (Header, Дата, Час, Edit, Delete)
- Role-based бутони за редакция/изтриване
- Confirmation dialogs

**`roleManager/`**
- Списък с потребители
- Смяна на роля (само super_admin)

**`newsletterAdminPanel/`**
- Broadcast форма
- Изпращане на HTML имейл до всички абонати

### State Management (Redux Toolkit)

| Slice | File | Отговорност |
|-------|------|-------------|
| `auth` | `store/login/authSlice.js` | Login, logout, token verification |
| `articlesSections` | `store/getArticleData/` | Fetch articles |
| `uploadArticle` | `store/uploadArticleSlice/` | POST section с файл |
| `articlesHeader` | `store/...` | Създаване на article header |
| `editSection` | `store/...` | PUT section |
| `deleteArticle` | `store/...` | DELETE article |
| `deleteSection` | `store/...` | DELETE section |
| `createAccount` | `store/...` | POST register |
| `roleManager` | `store/...` | GET/POST роли |
| `newsletter` | `store/...` | Newsletter state |
| `likes` | `store/...` | Like/dislike |

### Auth Slice (`store/login/authSlice.js`)

```js
login()      // POST /api/login → {token, role, username} → localStorage
checkAuth()  // GET /api/check-auth?lang=bg → {isAuthenticated: bool}
logout()     // Clear state + localStorage
```

### Axios Config (`src/api/axiosConfig.js`)

- Base URL от `process.env.REACT_APP_API_URL_PROD`
- Interceptor: при 401 → clear localStorage → redirect `/`

---

## Backend (Express/Node.js)

### Server (`server/index.js`)

- Port: `3400`
- Middleware: CORS, body-parser JSON, static `/upload`
- Error handler за CORS + 500 грешки

### API Endpoints

#### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/login` | Login → JWT token |
| `POST` | `/api/create-account` | Регистрация |
| `GET` | `/api/check-auth?lang=bg\|en` | Проверка на токен |
| `POST` | `/api/request-new-password` | Изпращане на reset имейл |
| `POST` | `/api/reset-password` | Смяна на парола |

**Login логика** (`routes/login_page/login_page.js`):
- bcrypt сравнение на паролата
- Проследяване на неуспешни опити (max 5 → блокиране на акаунт)
- JWT валидност: 1 час
- Response: `{token, role, username}`

**Register** (`routes/create_account/`):
- Уникален username и email
- bcrypt.hash(password, 10)
- Response: `{message, user{id, username, email, role}, token}`

#### Articles

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/articles` | Всички статии със секции |
| `POST` | `/api/create/articles/header` | Нова статия (заглавие, статус) |
| `POST` | `/api/create/section` | Добавяне на секция с изображение |
| `PUT` | `/api/edit/article` | Редакция на секция |
| `DELETE` | `/api/delete/articles/:id` | Изтриване на статия (cascade) |
| `DELETE` | `/api/delete/section/:id` | Изтриване на секция |

**GET `/api/articles`** — JOIN между `articles` и `sections`, форматирани дата/час.

**POST `/api/create/section`** — multipart/form-data:
- Полета: `article_id`, `title`, `content`, `position`, `image`, `main_image`
- Sharp компресия преди запис
- Обновява `main_image_url` на статията ако е подаден `main_image`

#### Likes & Feedback

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/post/like-dislike` | Добавяне на like/dislike |
| `GET` | `/api/get/all-like-dislike` | Всички feedback записи |

#### Users & Roles

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | Списък с потребители |
| `POST` | `/api/change-role` | Смяна на роля (admin only) |

#### Newsletter

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/newsletter` | Абониране с имейл |
| `POST` | `/api/broadcast` | Изпращане до всички абонати |
| `POST` | `/api/broadcast-test` | Тест broadcast (dev) |

#### Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/db-status` | Health check |

### Middlewares

**`authAdmin.js`** — JWT Authentication:
```
Authorization: Bearer <token>
→ jwt.verify → check role (admin|super_admin) → req.user
```

**`upload.js`** — Multer config:
- Storage: `/app/upload/`
- Filename: `timestamp + ext`
- Filter: JPEG, JPG, PNG
- Size limit: 5MB

### Utils

**`compress-img-before-save.js`** — Sharp:
- Компресира изображения преди запис в базата

**`mailer.js`** — Nodemailer:
- Gmail SMTP
- Използва се за password reset и newsletter broadcast

---

## Database (PostgreSQL)

### Schema

#### `articles`
```sql
id             INT PRIMARY KEY AUTO-INCREMENT
title          VARCHAR(255) NOT NULL
created_at     TIMESTAMP (Europe/Sofia)
status         BOOLEAN DEFAULT FALSE
main_image_url VARCHAR(255)
```

#### `sections`
```sql
id                SERIAL PRIMARY KEY
article_id        INT NOT NULL → articles.id (CASCADE DELETE)
title             VARCHAR(255) NOT NULL
content           TEXT
position          INT NOT NULL
created_at        TIMESTAMP
section_image_url VARCHAR(255)
```

#### `users`
```sql
id              SERIAL PRIMARY KEY
username        VARCHAR(255) UNIQUE NOT NULL
first_name      VARCHAR(255) NOT NULL
last_name       VARCHAR(255) NOT NULL
email           VARCHAR(255) UNIQUE NOT NULL
password        TEXT NOT NULL  -- bcrypt hash
role            VARCHAR(20) CHECK IN ('admin','user','super_admin','manager')
failed_attempts INT DEFAULT 0
blocked         BOOLEAN DEFAULT FALSE
```

#### `article_feedback`
```sql
id         SERIAL PRIMARY KEY
article_id INTEGER NOT NULL → articles.id
user_id    INTEGER
comment    TEXT
is_like    BOOLEAN DEFAULT FALSE
is_dislike BOOLEAN DEFAULT FALSE
like_at    TIMESTAMP (Europe/Sofia)
```

#### `user_logins`
```sql
id         SERIAL PRIMARY KEY
username   VARCHAR(50) NOT NULL
password   VARCHAR(255) NOT NULL
role       VARCHAR(20)
login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

#### `newsletter_subscribers`
```sql
id    SERIAL PRIMARY KEY
email VARCHAR(255) UNIQUE NOT NULL
```

### Релации

```
articles (1) ──→ (many) sections          [CASCADE DELETE]
articles (1) ──→ (many) article_feedback
users    (1) ──→ (many) article_feedback
```

### Database Config (`server/config/db.js`)

Dual-pool архитектура с автоматичен failover:

```js
primaryPool  → Local container PostgreSQL (DB_HOST, DB_PORT)
failoverPool → Neon Cloud PostgreSQL (AWS, SSL)

queryWithFailover() // опитва primary → при грешка → failover
```

---

## Authentication

| Feature | Implementation |
|---------|---------------|
| Password hashing | bcrypt (salt rounds: 10) |
| Session | JWT (1h expiry), stored в localStorage |
| Failed logins | Tracked in `users.failed_attempts`, max 5 → `blocked=true` |
| Google OAuth | Firebase `signInWithPopup` → Google Provider |
| Facebook OAuth | Firebase `signInWithRedirect` → Facebook Provider |
| Password reset | Email с reset link → bcrypt hash на нова парола |
| Multi-language errors | bg/en чрез `?lang=` query parameter |

---

## Role-Based Access Control (RBAC)

| Role | Права |
|------|-------|
| `user` | Четене на статии, like/dislike |
| `manager` | — |
| `admin` | Създаване/редакция/изтриване на статии |
| `super_admin` | Всичко + управление на роли + newsletter broadcast |

Default роля при регистрация: `user`

---

## Image Handling

```
Client upload (FormData)
    ↓
Multer (server/middlewares/upload.js)
    ↓ filter: jpg/jpeg/png, max 5MB
    ↓ filename: timestamp + ext
Sharp compression (utils/compress-img-before-save.js)
    ↓
Save to /app/upload/
    ↓
Serve via Express static middleware
```

---

## Newsletter System

1. Потребителят се абонира с имейл → `POST /api/newsletter` → `newsletter_subscribers` таблица
2. Admin изпраща broadcast → `POST /api/broadcast`
3. Nodemailer изпраща HTML имейл до всички абонати
4. Имейлите включват unsubscribe линкове
5. Тест endpoint: `POST /api/broadcast-test` (dev среда)

---

## Docker & Deployment

### Frontend Dockerfile (Multi-stage)

```dockerfile
# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
RUN npm install && npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### Backend Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
RUN npm install
EXPOSE 3400
CMD ["npm", "run", "prod"]
```

### Nginx (`nginx.conf`)

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    location / { try_files $uri $uri/ /index.html; }  # SPA routing
    gzip on;  # Compression
}
```

### Docker Compose (Production)

| Service | Container | Port |
|---------|-----------|------|
| `backend-prod` | `upload-be-prod` | `3400:3400` |
| `frontend-prod` | `upload-fe-prod` | `3500:80` |

Shared volume: `/ssd/docker/mitaka-website/mitaka-website/upload`  
Network: `docker_network` (external)

### CI/CD (GitHub Actions)

Trigger: push to `master` или `workflow_dispatch`

**Steps:**
1. Git pull
2. npm install + ESLint
3. npm run build
4. `docker compose up --build -d`
5. Health check на port 3500 (6 опита × 10s)
6. Telegram notification (успех/неуспех)

---

## Environment Variables

### Frontend (`.env.development` / `.env.production`)

```
REACT_APP_API_URL_PROD=http://localhost:3400     # dev
REACT_APP_API_URL_PROD=https://share.d-dimitrov.eu  # prod
```

### Backend (`.env.development` / `.env.production`)

```
# Primary Database
DB_USER=
DB_PASSWORD=
DB_HOST=192.168.100.100
DB_PORT=5434 (dev) / 5435 (prod)
DB_NAME=dev_db / prod_db

# Failover Database (Neon Cloud)
FAILOVER_DB_USER=
FAILOVER_DB_PASSWORD=
FAILOVER_DB_HOST=ep-holy-dust-a4lx2gm2-pooler.us-east-1.aws.neon.tech
FAILOVER_DB_PORT=5432
FAILOVER_DB_NAME=neondb

# Auth
SECRET_KEY=

# Email (Gmail SMTP)
NEWSLETTER_PASS=

# OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Telegram Notifications
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

---

## CORS Allowed Origins

```
http://localhost:3000
http://localhost:3333
https://upload.d-dimitrov.eu
https://share.d-dimitrov.eu
https://eng-dimitrov.vercel.app
https://upload-article.vercel.app
```

---

## Key File Paths

| File | Path |
|------|------|
| React routing | `src/App.js` |
| Redux store | `src/store/storeState/store.js` |
| Auth slice | `src/store/login/authSlice.js` |
| Axios config | `src/api/axiosConfig.js` |
| Firebase OAuth | `src/firebase.js` |
| Express server | `server/index.js` |
| DB config (failover) | `server/config/db.js` |
| CORS config | `server/config/cors.js` |
| DB schema | `server/database/database.sql` |
| JWT middleware | `server/middlewares/authAdmin.js` |
| Upload middleware | `server/middlewares/upload.js` |
| Image compression | `server/utils/compress-img-before-save.js` |
| Mailer | `server/utils/mailer.js` |
| Docker Compose | `docker-compose.yml` |
| Nginx config | `nginx.conf` |
| CI/CD workflow | `.github/workflows/` |
