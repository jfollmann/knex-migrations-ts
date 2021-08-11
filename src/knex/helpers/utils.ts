/* eslint-disable dot-notation */
import Knex, { CreateTableBuilder } from 'knex';

export const createOnUpdateTrigger = (tableName: string) => `
  CREATE TRIGGER "${tableName}_updated_at"
  BEFORE UPDATE ON "${tableName}"
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();`;

export const deleteOnUpdateTrigger = (tableName: string) => `
  DROP TRIGGER "${tableName}_updated_at" ON "${tableName}";
`;

export const hasRecords = async (knex: Knex, tableName: string): Promise<boolean> => {
  const [{ count }] = await knex(tableName).count();

  return count > 0;
};

export const defaultHistoryFields = (knex: Knex, tableName: string, table: CreateTableBuilder): void => {
  table.boolean('active').defaultTo(true);

  table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
  table.timestamp('deletedAt');
};
