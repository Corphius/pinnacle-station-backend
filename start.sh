#!/bin/sh
set -e 

npm run migration:deploy

node dist/server.js

