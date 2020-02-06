exports.up = function(knex) {
  return knex.schema.createTable('interview_feedback', table => {
    table.increments();
    table.text('feedback', 5000).notNullable();
    table.integer('rating').notNullable();
    table
      .integer('interview_id')
      .unsigned()
      .references('id')
      .inTable('interview');
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('user');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('interview_feedback');
};
