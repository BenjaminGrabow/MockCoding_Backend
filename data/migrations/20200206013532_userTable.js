exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table
      .string('email', 128)
      .notNullable()
      .unique();
    table.string('password', 128).notNullable();
    table.string('location');
    table.string('avatar_url', 256).defaultTo('');
    table.string('github', 128).defaultTo(null);
    table.string('linkedin', 128).defaultTo(null);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
