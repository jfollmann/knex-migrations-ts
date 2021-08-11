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
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    extension: 'ts',
    directory: 'src/knex/migrations',
    tableName: 'migrations_history',
  },
  seeds: {
    extension: 'ts',
    directory: 'src/knex/seeds',
  },
};

export default config;
