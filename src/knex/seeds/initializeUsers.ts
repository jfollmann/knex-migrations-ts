import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('user').del();

  await knex('user').insert([
    { firstName: 'Jefferson', lastName: 'Follmann' },
    { firstName: 'Andressa', lastName: 'Duarte' },
    { firstName: 'Antônio', lastName: 'Follmann' },
  ]);
}
