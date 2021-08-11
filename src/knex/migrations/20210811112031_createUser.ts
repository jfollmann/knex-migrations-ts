import * as Knex from 'knex';
import { defaultHistoryFields, deleteOnUpdateTrigger, createOnUpdateTrigger } from '../helpers/utils';

const tableName = 'user';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.string('firstName', 100).notNullable();
    table.string('lastName', 100).notNullable();

    defaultHistoryFields(knex, table);
  });

  await knex.raw(createOnUpdateTrigger(tableName));
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(deleteOnUpdateTrigger(tableName));

  await knex.schema.dropTable(tableName);
}
