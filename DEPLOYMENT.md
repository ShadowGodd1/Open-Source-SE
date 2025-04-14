# Deployment Guide for Open Source Economic Empowerment Ecosystem

This guide provides instructions for deploying the Open Source Economic Empowerment Ecosystem to various environments.

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git
- Vercel CLI (optional, for manual deployments)
- Docker and Docker Compose (optional, for containerized deployments)

## Environment Variables

Before deploying, make sure you have set up the necessary environment variables. Copy the `.env.example` file to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required environment variables:

- `NEXT_PUBLIC_APP_URL`: The public URL of your application
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `NEXTAUTH_URL`: URL for NextAuth.js (same as `NEXT_PUBLIC_APP_URL`)
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key

For production, set these in your hosting provider's environment variables section.

## Deployment Options

### 1. Vercel (Recommended)

The easiest way to deploy the application is using Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set the required environment variables
4. Deploy

Alternatively, you can use the Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

### 2. Docker Deployment

You can deploy the application using Docker:

1. Build the Docker image:
   ```bash
   docker build -t osee-kenya .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env.local osee-kenya
   ```

### 3. Docker Compose (Development with Services)

For local development with all services:

```bash
docker-compose up
```

This will start:
- The Next.js application
- PostgreSQL database
- Supabase
- Mock services for Africa's Talking and M-Pesa

### 4. Manual Deployment

You can also deploy manually to any hosting provider that supports Node.js:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the application:
   ```bash
   npm start
   ```

## Continuous Integration/Deployment

The project includes GitHub Actions workflows for CI/CD:

1. Push to the `main` branch triggers the CI/CD pipeline
2. Linting and building are performed
3. If successful, deployment to staging occurs
4. After approval, deployment to production occurs

To set up CI/CD, you need to add the following secrets to your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

## Database Deployment

The database schema is defined in `schema.sql`. You can deploy it to your PostgreSQL database:

```bash
psql -U postgres -d osee_kenya -f schema.sql
```

For Supabase, you can use the Supabase dashboard to run the SQL script.

## Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed and environment variables are set correctly.

2. **Database Connection Issues**: Verify the `DATABASE_URL` is correct and the database is accessible from your deployment environment.

3. **API Errors**: Check that all API keys (Supabase, Africa's Talking, M-Pesa) are valid and properly configured.

### Logs

- Vercel: Check the deployment logs in the Vercel dashboard
- Docker: Use `docker logs <container_id>` to view logs
- Manual deployment: Check the console output or log files

## Monitoring

Consider setting up monitoring for your production deployment:

- Vercel Analytics
- Sentry for error tracking
- Uptime monitoring with services like UptimeRobot

## Backup Strategy

Regularly backup your database:

```bash
pg_dump -U postgres -d osee_kenya > backup_$(date +%Y%m%d).sql
```

Consider automating backups with a scheduled job.

## Security Considerations

- Keep all environment variables secure
- Regularly update dependencies
- Enable HTTPS for all environments
- Follow security best practices for authentication and data handling
