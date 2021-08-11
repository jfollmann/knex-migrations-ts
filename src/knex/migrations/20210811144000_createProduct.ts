import * as Knex from 'knex';
import { defaultHistoryFields, deleteOnUpdateTrigger, createOnUpdateTrigger } from '../helpers/utils';

const tableName = 'product';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.string('name', 100).notNullable();
    table.float('price', 10, 2).notNullable();
    table.bigInteger('userId').notNullable()
      .references('id')
      .inTable('user');

    defaultHistoryFields(knex, tableName, table);
  });

  await knex.raw(createOnUpdateTrigger(tableName));
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(deleteOnUpdateTrigger(tableName));

  await knex.schema.dropTable(tableName);
}
