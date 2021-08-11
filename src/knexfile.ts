import Knex from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: {
    insecureAuth: true,
    host: 'localhost',
    user: 'postgres',
    password: 'pass@123!',
    database: 'knexDB',
  },
  migrations: {
    extension: 'ts',
    directory: 'knex/migrations',
    tableName: 'migrations_history',
  },
  seeds: {
    extension: 'ts',
    directory: 'knex/seeds',
  },
};

export default config;
