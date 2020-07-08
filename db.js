const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBeers,
  deleteBeer,
  insertBeer
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

// Create a new function to delete a beer given the id from the Admin screen button click
function insertBeer (id, db = connection) {
  return db('beersies')
    .insert({
      id: id,
      name: 'new',
      brewery: 'new',
      country: 'new',
      style: 'new',
      abv: 'new'
    })
}
