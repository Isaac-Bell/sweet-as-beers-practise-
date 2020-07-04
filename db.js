const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBeers,
  deleteBeer
}

// New function to select all beers' names from table beersies, as an array
function getBeers (db = connection) {
  return db('beersies')
    .select()
}

// Create a new function to delete a beer given the id from the Admin screen button click
function deleteBeer (id, db = connection) {
  return db('beersies')
    .where('id', id)
    .delete(id)
}
