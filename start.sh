#!/bin/sh
set -e 

# Generate prisma client for database connection at application
yarn prisma:generate

# Run database migrations by prisma
yarn migrate:deploy

# Run application
node dist/main.js