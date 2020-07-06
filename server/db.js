// const { beers } = require('../data/beers')

const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getData,
  addBeer,
  updateBeer
}

function getData (db = connection) {
  return db('beers')
    .select(
      'id',
      'name',
      'brewery',
      'country',
      'style',
      'abv'
    )
}

// beers on line 26 might need to be changed to 'beer'
function addBeer (beers, db = connection) {
  return db('beers')
    .insert({
      name: beers.name,
      brewery: beers.brewery,
      country: beers.country,
      style: beers.style,
      abv: beers.abv
    })
    .then((ids) => {
      return {
        id: ids[0],
        ...beers
      }
    })
}

function updateBeer (beers, id, db = connection) {
  return db('beers')
    .where('id', id)
    .update({
      name: beers.name,
      brewery: beers.brewery,
      country: beers.country,
      style: beers.style,
      abv: beers.abv
    })
}
