exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('user_name').notNullable()
    table.string('email').notNullable()
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.text('avatar_url').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
