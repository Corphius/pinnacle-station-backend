#!/bin/sh
set -e 

yarn migrate:deploy

node dist/server.js

