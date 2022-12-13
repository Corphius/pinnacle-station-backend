#!/bin/sh
set -e 

# Generate prisma client for database connection at application
yarn prisma:generate

# Run database migrations by prisma
yarn migrate:deploy

# run seeds for users database
yarn prisma db seed

# Run application
node dist/main.js