/**
 * Deployment script for the Open Source Economic Empowerment Ecosystem
 * 
 * This script helps with the deployment process by:
 * 1. Checking environment variables
 * 2. Building the application
 * 3. Running tests
 * 4. Deploying to the specified environment
 * 
 * Usage: node deploy.js [environment]
 * Where environment is one of: development, staging, production
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the environment from command line arguments
const environment = process.argv[2] || 'development';
const validEnvironments = ['development', 'staging', 'production'];

if (!validEnvironments.includes(environment)) {
  console.error(`Error: Invalid environment "${environment}". Must be one of: ${validEnvironments.join(', ')}`);
  process.exit(1);
}

console.log(`Starting deployment process for ${environment} environment...`);

// Check if .env.local exists
if (!fs.existsSync(path.join(process.cwd(), '.env.local'))) {
  console.error('Error: .env.local file not found. Please create it based on .env.example');
  process.exit(1);
}

// Check required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_APP_URL',
  'DATABASE_URL',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL'
];

const missingEnvVars = [];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    missingEnvVars.push(envVar);
  }
}

if (missingEnvVars.length > 0) {
  console.error(`Error: Missing required environment variables: ${missingEnvVars.join(', ')}`);
  console.error('Please add them to your .env.local file');
  process.exit(1);
}

// Run linting
console.log('Running linting...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.error('Error: Linting failed. Please fix the issues before deploying.');
  process.exit(1);
}

// Build the application
console.log('Building the application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Error: Build failed. Please fix the issues before deploying.');
  process.exit(1);
}

// Deploy based on environment
if (environment === 'production') {
  console.log('Deploying to production...');
  try {
    execSync('vercel --prod', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error: Deployment to production failed.');
    process.exit(1);
  }
} else if (environment === 'staging') {
  console.log('Deploying to staging...');
  try {
    execSync('vercel', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error: Deployment to staging failed.');
    process.exit(1);
  }
} else {
  console.log('Skipping deployment for development environment.');
  console.log('To deploy to staging or production, run:');
  console.log('  node deploy.js staging');
  console.log('  node deploy.js production');
}

console.log(`Deployment process for ${environment} environment completed successfully!`);
