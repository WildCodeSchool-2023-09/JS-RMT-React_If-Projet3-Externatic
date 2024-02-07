#!/usr/bin/env sh
cd /usr/src/app/backend
node migrate.js
node seed.js
node index.js
