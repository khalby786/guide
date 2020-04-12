# Installation

## Installing Node.js

You will have to install Node.js to utilize Endb. You can do so by going to [Node.js website](https://nodejs.org).

## Installing Endb

To install Endb in your application, run the following command in the directory, you desire to install Endb inside:

```bash
npm install endb
```

By default, data is cached in memory. Optionally, install and utilize a "storage adapter". Officially supported adapters are LevelDB, MongoDB, NeDB, MySQL, PostgreSQL, Redis, and SQLite.

```bash
# One of the following:
npm install level # LevelDB
npm install mongojs # MongoDB
npm install ioredis # Redis

# To use SQL database, an additional package 'sql' must be installed and an adapter
npm install sql
npm install mysql2 # MySQL
npm install pg # PostgreSQL
npm install sqlite3 # SQLite
```