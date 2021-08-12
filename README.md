# Sample knex migrations with Typescript
Sample to use knex migrations with PostgreSQL and Typescript support.

## 🚀 Startup

### Start `PostgreSQL` container (with docker-compose):
```bash
docker-compose up -d
```

### Create your db in `PostgreSQL`:
```sql
create database "knexDB"
```

## ☕ Migrations

### Create migration file:
```bash
npm run migrate:make [name-of-migration]
```

### Update your database to last version:
```bash
npm run migrate:latest
```

### Rollback all migrations
```bash
npm run migrate:rollback --all
```

### Show completed and pending migrations:
```bash
npm run migrate:list
```

### Show db currentVersion:
```bash
npm run migrate:currentVersion
```

## 👌 Seeds

### Create seed file:
```bash
npm run seed:make [name-of-seed]
```

### Run all seeds:
```bash
npm run seed:run
```

[Others commands in reference document](https://knexjs.org/#Migrations-CLI)