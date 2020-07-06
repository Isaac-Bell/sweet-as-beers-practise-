const { default: beers } = require('../data/beers')

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
      'id'

    )
}

function addBeer (beer, db = connection) {
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

function updateBeer (beer, id, db = connection) {
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
