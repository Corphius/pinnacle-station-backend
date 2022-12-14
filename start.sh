#!/bin/sh
set -e 

# Run database migrations by prisma
yarn migrate:deploy

# run seeds for users database
yarn prisma:seed

# Run application
node dist/main.js