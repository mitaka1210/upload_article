# Upload Article System

Уеб приложение за публикуване на статии с автентикация, създадено с React, Express и PostgreSQL. Архитектурата използва Docker контейнери за разработка и продукция, Nginx Proxy Manager за управление на поддомейни и Cloudflare за DNS.

## 🚀 Features

- **User Authentication**: JWT-based secure login/register system
- **Article Management**: Create, edit, delete and view articles
- **React Frontend**: Modern UI with Redux Toolkit for state management
- **RESTful API**: Express.js backend with structured endpoints
- **Database Management**: PostgreSQL with separate dev/prod instances
- **Docker Containerization**: Full containerized architecture
- **Reverse Proxy**: Nginx Proxy Manager for subdomain routing
- **CDN Integration**: Cloudflare integration for DNS and performance

## 🏗️ Architecture

### System Overview

## 📋 Prerequisites

![my_blog drawio](https://github.com/user-attachments/assets/f5913dfa-be24-4228-9ac9-1f26612e9e73)

### Infrastructure Components

- **Main Domain**: `d-dimitrov.eu`
- **Application URL**: `upload.d-dimitrov.eu`
- **Database**: PostgreSQL (containerized)
- **Reverse Proxy**: Nginx Proxy Manager
- **CDN**: Cloudflare
- **Containerization**: Docker & Docker Compose

## 🛠️ Technology Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Redux Toolkit (RTK)** - Efficient Redux logic with less boilerplate
- **JavaScript/JSX** - Component-based architecture
- **CSS3** - Responsive styling
- **Docker** - Containerized frontend deployment

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **JWT (JSON Web Tokens)** - Secure authentication system
- **bcrypt** - Password hashing and encryption
- **CORS** - Cross-origin resource sharing middleware
- **Docker** - Containerized backend deployment

### Database
- **PostgreSQL** - Advanced open-source relational database
- **pg** - PostgreSQL client for Node.js
- **SQL** - Database queries and schema management

### DevOps & Infrastructure
- **Docker & Docker Compose** - Containerization and orchestration
- **Nginx Proxy Manager** - Reverse proxy and SSL management
- **Cloudflare** - CDN, DNS management, and DDoS protection
- **Linux Server** - Production hosting environment

### Development Tools
- **Git & GitHub** - Version control and code repository
- **VS Code** - Development environment
- **Postman/Thunder Client** - API testing
- **pgAdmin** - PostgreSQL administration tool

## 🌐 Connect & Follow

### 🔗 Project Links
- **🌍 Live Demo**: [upload.d-dimitrov.eu](https://upload.d-dimitrov.eu)
- **📱 Main Website**: [d-dimitrov.eu](https://d-dimitrov.eu)
- **💻 GitHub Repository**: [mitaka1210/upload_article](https://github.com/mitaka1210/upload_article)

### 👨‍💻 Developer Social Media
- **GitHub**: [@mitaka1210](https://github.com/mitaka1210)
- **LinkedIn**: [Connect on LinkedIn](https://linkedin.com/in/dimitar-dimitrov-dev)
- **Twitter**: [@d_dimitrov_dev](https://twitter.com/d_dimitrov_dev)
- **Facebook**: [Dimitar Dimitrov](https://facebook.com/dimitar.dimitrov.dev)
- **Instagram**: [@d.dimitrov.dev](https://instagram.com/d.dimitrov.dev)

### 📧 Contact Information
- **Email**: contact@d-dimitrov.eu
- **Business Email**: business@d-dimitrov.eu
- **Technical Support**: support@d-dimitrov.eu

### 🤝 Professional Networks
- **Stack Overflow**: [Profile](https://stackoverflow.com/users/your-profile)
- **Dev.to**: [@ddimitrov](https://dev.to/ddimitrov)
- **Medium**: [@dimitar.dimitrov](https://medium.com/@dimitar.dimitrov)
- **CodePen**: [d-dimitrov](https://codepen.io/d-dimitrov)

### Project Structure

```
upload_article/
├── client/              # React приложение (Frontend)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── server/              # Express приложение (Backend)
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── db/                  # Скриптове за инициализация на базата
│   └── init.sql
├── nginx/               # Nginx Proxy Manager конфигурация
├── docker-compose.yml   # Docker compose за всички услуги
├── my_blog.drawio.svg   # Архитектурна диаграма
└── README.md
```

- Docker and Docker Compose installed
- Domain name configured (d-dimitrov.eu)
- Cloudflare account for DNS management
- Server with Docker support

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/mitaka1210/upload_article.git
cd upload_article
```

### 2. Environment Setup

Create environment files for both client and server:

**Client Environment (.env in client/ directory):**
```env
REACT_APP_API_URL=http://localhost:3400/api
REACT_APP_ENV=development
```

**Server Environment (.env in server/ directory):**
```env
# Database Configuration
DB_HOST=postgres
DB_PORT=5432
DB_NAME=upload_article
DB_USER=your_username
DB_PASSWORD=your_secure_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=3400
NODE_ENV=development

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### 3. Development Setup

Start the development environment:

```bash
# Start all services with Docker Compose
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f
```

**Access Points:**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3400
- **Database**: localhost:5432

### 4. Production Deployment

For production deployment on your server:

```bash
# Pull latest changes on server
git pull origin main

# Start production containers
docker-compose -f docker-compose.prod.yml up -d --build

# Check status
docker-compose ps
```

## 🔧 Configuration

### Nginx Proxy Manager Setup

1. Access Nginx Proxy Manager admin panel
2. Create new proxy host:
   - **Domain Names**: `upload.d-dimitrov.eu`
   - **Forward Hostname/IP**: [Container IP/Name]
   - **Forward Port**: [Application Port]
3. Configure SSL certificate
4. Enable WebSocket support if needed

### Cloudflare Configuration

1. Add DNS A record for `upload.d-dimitrov.eu`
2. Configure proxy settings (orange cloud)
3. Set up page rules for caching (optional)
4. Configure security settings

### Database Management

#### Development Database
```bash
# Connect to development database
docker exec -it postgres_dev psql -U your_username -d upload_article

# Backup development database
docker exec postgres_dev pg_dump -U your_username upload_article > backup_dev.sql
```

#### Production Database
```bash
# Connect to production database
docker exec -it postgres_prod psql -U your_username -d upload_article

# Backup production database
docker exec postgres_prod pg_dump -U your_username upload_article > backup_prod.sql
```

## 📊 Monitoring & Logs

### View Application Logs
```bash
# Development logs
docker-compose -f docker-compose.dev.yml logs -f app

# Production logs
docker-compose -f docker-compose.prod.yml logs -f app
```

### Database Logs
```bash
# Development database logs
docker-compose -f docker-compose.dev.yml logs -f postgres_dev

# Production database logs
docker-compose -f docker-compose.prod.yml logs -f postgres_prod
```

### System Monitoring
```bash
# Check container status
docker ps

# Monitor resource usage
docker stats

# Check disk usage
df -h
```

## 🔒 Security

- All containers run with non-root users
- Database connections use secure passwords
- SSL/TLS encryption via Cloudflare
- Regular security updates for base images
- Environment variables for sensitive data

## 🚀 Deployment Pipeline

### Manual Deployment
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart containers
docker-compose -f docker-compose.prod.yml up -d --build

# Run database migrations (if applicable)
docker-compose -f docker-compose.prod.yml exec app [migration-command]
```

### Automated Deployment (CI/CD)
```yaml
# Trigger: push to master or workflow_dispatch
# Workflow file: .github/workflows/deploy.yml
# Jobs: ci -> deploy -> healthcheck_and_rollback -> notify
```

Required repository secrets:

- `SSH_HOST`
- `SSH_USER`
- `SSH_KEY`
- `SSH_PORT`
- `SERVER_APP_PATH` (absolute path on the server)
- `APP_HEALTHCHECK_URL` (for example `https://upload.d-dimitrov.eu/api/health`)
- `TELEGRAM_TO`
- `TELEGRAM_TOKEN`

Rollback runbook:

1. Pipeline stores the current SHA to `.last_stable_sha` before deploy.
2. If health check fails after deploy retries, pipeline checks out `.last_stable_sha`.
3. Containers are rebuilt with `docker compose up -d --build`.
4. If post-rollback health check still fails, the workflow remains failed and sends Telegram failure notification.

## 📝 API Documentation

[Add your API documentation here]

## 🧪 Testing

```bash
# Run tests in development
docker-compose -f docker-compose.dev.yml exec app npm test

# Run integration tests
docker-compose -f docker-compose.dev.yml exec app npm run test:integration
```

## 🔧 Troubleshooting

### Common Issues

#### Container won't start
```bash
# Check logs
docker-compose logs [service-name]

# Rebuild container
docker-compose up -d --build [service-name]
```

#### Database connection issues
```bash
# Verify database container is running
docker ps | grep postgres

# Check database logs
docker logs postgres_dev
```

#### SSL Certificate issues
- Verify Cloudflare DNS settings
- Check Nginx Proxy Manager configuration
- Ensure domain propagation is complete

## 📋 Maintenance

### Regular Tasks
- [ ] Update Docker images monthly
- [ ] Backup databases weekly
- [ ] Monitor disk space usage
- [ ] Review application logs
- [ ] Update SSL certificates (automated via Cloudflare)

### Database Maintenance
```bash
# Vacuum database (production)
docker exec postgres_prod psql -U your_username -d upload_article -c "VACUUM ANALYZE;"

# Check database size
docker exec postgres_prod psql -U your_username -d upload_article -c "SELECT pg_size_pretty(pg_database_size('upload_article'));"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

### 🆘 Getting Help
- **📋 Issues**: Create an issue on [GitHub Issues](https://github.com/mitaka1210/upload_article/issues)
- **📚 Documentation**: Check this README and inline code comments
- **💬 Discussions**: Use [GitHub Discussions](https://github.com/mitaka1210/upload_article/discussions) for questions

### 📬 Direct Contact
- **Technical Issues**: support@d-dimitrov.eu
- **Business Inquiries**: business@d-dimitrov.eu
- **General Questions**: contact@d-dimitrov.eu

### 🌐 Online Presence
- **Website**: [d-dimitrov.eu](https://d-dimitrov.eu)
- **Portfolio**: [portfolio.d-dimitrov.eu](https://portfolio.d-dimitrov.eu)
- **Blog**: [blog.d-dimitrov.eu](https://blog.d-dimitrov.eu)

## 🚀 Roadmap

- [ ] Add automated testing pipeline
- [ ] Implement monitoring with Grafana/Prometheus
- [ ] Implement file upload optimization
- [ ] Add user authentication system
- [ ] API rate limiting
- [ ] Multi-language support

---

**Made with ❤️ by Dimitar Dimitrov**

[![GitHub followers](https://img.shields.io/github/followers/mitaka1210?style=social)](https://github.com/mitaka1210)
[![Website](https://img.shields.io/website?url=https%3A//d-dimitrov.eu&style=for-the-badge)](https://d-dimitrov.eu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/dimitar-dimitrov-dev)

*Last updated: August 2025*
