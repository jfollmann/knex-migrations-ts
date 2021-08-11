// https://www.ti-enxame.com/pt/javascript/gatilho-de-atualizacao-automatica-do-knex.js/825045611/
import * as Knex from 'knex';

const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW."updatedAt" = now();

    IF (NEW.active = false) THEN
      NEW."deletedAt" = now();
    END IF;

    RETURN NEW;
  END;
$$ language 'plpgsql';
`;

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = 'DROP FUNCTION on_update_timestamp';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
}
