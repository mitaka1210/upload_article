# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a full-stack article publishing system with JWT authentication, built with React (frontend) and Express (backend), using PostgreSQL as the database. The application is fully containerized with Docker and deployed on `upload.d-dimitrov.eu` using Nginx Proxy Manager and Cloudflare.

## Development Commands

### Frontend (React)
```bash
# Development server (runs on port 3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Linting and formatting
npm run lint
npm run format
```

### Backend (Express)
```bash
cd server

# Development mode with hot reload
npm run dev

# Production mode
npm run prod

# Start server (production)
npm start

# Linting and formatting
npm run lint
npm run format
```

### Docker Operations
```bash
# Start all production containers
docker-compose up -d --build

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend-prod
docker-compose logs -f frontend-prod

# Stop all containers
docker-compose down

# Rebuild specific service
docker-compose up -d --build backend-prod
```

### Database Operations
```bash
# Connect to PostgreSQL (adjust container name based on environment)
docker exec -it <postgres_container> psql -U <username> -d upload_article

# Backup database
docker exec <postgres_container> pg_dump -U <username> upload_article > backup.sql

# Restore database
docker exec -i <postgres_container> psql -U <username> upload_article < backup.sql

# Database maintenance
docker exec <postgres_container> psql -U <username> -d upload_article -c "VACUUM ANALYZE;"
```

## Architecture

### Backend Structure

**Entry Point**: `server/index.js`
- Express server running on port 3400
- CORS configured for multiple allowed origins (localhost variants + production domains)
- All routes prefixed with `/api/`

**Database Layer**: `server/config/db.js`
- PostgreSQL connection with **primary-failover architecture**
- Uses `queryWithFailover()` function for automatic failover to backup database
- Primary pool: local/containerized PostgreSQL
- Failover pool: remote PostgreSQL with SSL

**Authentication**: `server/middlewares/authAdmin.js`
- JWT-based authentication using `jsonwebtoken`
- Admin middleware checks for `admin` or `super_admin` roles
- Token format: `Bearer <token>` in Authorization header
- SECRET_KEY stored in environment variables

**Routes Pattern**: Each route is in its own directory under `server/routes/`
- Authentication routes: `/api/login`, `/api/check-auth`, `/api/create-account`
- Article routes: `/api/articles`, `/api/create/articles/header`, `/api/delete/articles`, `/api/edit/article`
- Section routes: `/api/create/section`, `/api/delete/section`
- User management: `/api/users`, `/api/change-role`
- Newsletter: `/api/newsletter`, `/api/broadcast`, `/api/subscribers`
- Likes/feedback: `/api/get/all-like-dislike`, `/api/post/like-dislike`
- Health check: `/db-status`

**File Uploads**: `server/middlewares/handle-upload-file.js`, `server/middlewares/upload.js`
- Uses `multer` for file uploads
- Uses `sharp` for image optimization
- Static files served from `/upload` endpoint
- Upload directory mounted as Docker volume

### Frontend Structure

**Entry Point**: `src/index.js`
- React 18 with Redux Toolkit for state management
- React Router DOM for routing
- Provider wraps entire app with Redux store

**Routing**: `src/App.js`
- `/` redirects to `/login`
- `/login` - Login page (LoginPage component)
- `/home` - Main home page (Home component)
- `/read` - Article reading interface (Read component)
- `/change-role` - Role management (RoleManager component)
- `/newsletter-admin-panel` - Newsletter administration (NewsLetterAdminPanel component)
- `/update-section/:articleId` - Edit article (EditArticle component)

**State Management**: `src/store/storeState/store.js`
- Redux Toolkit with multiple slices:
  - `auth` - Authentication state
  - `articlesSections` - Article data
  - `uploadArticle` - Article upload state
  - `editSection` - Section editing
  - `deleteArticle`, `deleteSection` - Deletion operations
  - `comments`, `likes` - User interactions
  - `createAccount` - Account creation
  - `roleManager` - Role management (admin functionality)
  - `newsletter` - Newsletter operations
  - RTK Query API for user data fetching

**API Client**: `src/api/axiosConfig.js`
- Axios instance configured with base URL from `REACT_APP_API_URL_PROD`
- Credentials enabled for cookie-based auth
- Global 401 interceptor: clears localStorage and redirects to `/` on auth failure
- All API calls should use this configured instance

**Firebase Integration**: `src/firebase.js`
- Google and Facebook OAuth providers configured
- Stores Google token in localStorage on successful authentication
- Exports `signInWithGoogle`, `signInWithFacebook`, `logout` functions

### Database Schema

**Tables**:
- `articles`: Main article table with title, created_at, status
- `sections`: Article sections with content, position, image_url (foreign key to articles, CASCADE delete)
- `article_feedback`: Comments and likes/dislikes on articles
- `users`: User accounts with username, email, password (bcrypt hashed), role (admin/user/super_admin/manager), failed_attempts, blocked status
- `user_logins`: Login history tracking

**Key Relations**:
- Sections cascade delete when article is deleted
- Article feedback references articles table

## Environment Configuration

### Frontend Environment Variables
- `REACT_APP_API_URL_PROD`: Backend API base URL
  - Development: `http://localhost:3400`
  - Production: `https://share.d-dimitrov.eu`

### Backend Environment Variables (Required)
**Database**:
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`: Primary database config
- `FAILOVER_DB_HOST`, `FAILOVER_DB_PORT`, `FAILOVER_DB_NAME`, `FAILOVER_DB_USER`, `FAILOVER_DB_PASSWORD`: Failover database config

**Authentication**:
- `SECRET_KEY`: JWT secret key for token signing/verification
- `JWT_EXPIRES_IN`: Token expiration (e.g., "7d")

**Server**:
- `PORT`: Server port (default: 3400)
- `NODE_ENV`: Environment mode (`development` or `production`)
- Determines which `.env.{environment}` file to load

## Key Patterns & Conventions

### When Writing Backend Routes:
1. Always use `queryWithFailover()` from `server/config/db.js` for database queries (not direct pool access)
2. Use JWT verification via `authAdmin` middleware for protected admin routes
3. Import middleware like: `import authenticateAdmin from '../middlewares/authAdmin.js'`
4. Each route module exports a Router instance
5. Use ES6 modules (`import`/`export`) - package.json has `"type": "module"`

### When Writing Frontend Components:
1. Use Redux Toolkit slices for state management (in `src/store/`)
2. Import axios instance from `src/api/axiosConfig.js` for API calls
3. Use React Router's `useNavigate` for programmatic navigation
4. Authentication state is managed globally in Redux auth slice
5. SCSS files follow pattern: component-specific styles in same directory, shared styles in `reusable.scss` and `typography.scss`

### Authentication Flow:
1. Frontend sends credentials to `/api/login`
2. Backend validates and returns JWT token
3. Frontend stores token (typically in localStorage or Redux state)
4. Subsequent requests include `Authorization: Bearer <token>` header
5. Protected routes verify token with `authAdmin` middleware on backend
6. 401 responses trigger automatic logout and redirect to login

### Article/Section Management:
- Articles are created first (header), then sections are added to them
- Sections have a `position` field for ordering
- Editing operates at the section level
- Deletion of an article cascades to all its sections
- File uploads (images) are associated with sections via `image_url`

## Testing

No test framework is currently configured. When adding tests:
- Frontend: Jest and React Testing Library are installed
- Backend: No test runner installed yet - will need to add (e.g., Jest, Mocha)

## Deployment

The application uses Docker Compose for deployment:
- Frontend container: `upload-fe-prod` (port 3500:80, uses nginx internally)
- Backend container: `upload-be-prod` (port 3400:3400)
- Shared upload volume at `/ssd/docker/mitaka-website/mitaka-website/upload`
- Connected to external Docker network: `docker_network`
- Reverse proxy via Nginx Proxy Manager handles SSL and domain routing
- DNS managed through Cloudflare

**Important**: Always include `Co-Authored-By: Warp <agent@warp.dev>` in commit messages when Warp makes changes.

## Common Issues & Solutions

### CORS Errors
- Check that frontend origin is listed in `server/config/cors.js` `allowedOrigins` array
- Verify `REACT_APP_API_URL_PROD` matches expected backend URL

### Database Connection Issues
- Primary database down → automatic failover to remote database
- Check container status: `docker ps | grep postgres`
- Verify environment variables are loaded correctly

### Authentication Issues
- Check JWT token expiration
- Verify `SECRET_KEY` matches between environment and code
- Ensure token format is `Bearer <token>` in Authorization header
- Check user role permissions (admin vs super_admin vs user)
