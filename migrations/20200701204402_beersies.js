
exports.up = function (knex) {
  return knex.schema.createTable('beersies', table => {
    table.increments('id')
    table.string('name')
    table.string('brewery')
    table.string('country')
    table.string('style')
    table.string('abv')
  }
  ).then(() => {
    console.log('Table created successfully!!')
  }).catch(() => {
    console.log('Error occurred in table creation!!')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('beersies')
}
