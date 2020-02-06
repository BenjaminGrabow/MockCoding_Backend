exports.up = function(knex) {
  return knex.schema.createTable('interview', table => {
    table.increments();
    table.string('date', 100);
    table.boolean('canceled').defaultTo(false);
    table.boolean('finished').defaultTo(false);
    table
      .integer('user_id_one')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('user');
    table
      .integer('user_id_two')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('user');
    table
      .integer('topic_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('interview_topics');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('interview');
};
