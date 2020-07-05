const config = require('../knexfile').development
const db = require('knex')(config)

module.exports = {
  getBeers,
  addBeer,
}

function getBeers() {
  return db('Beers').select()
}

function addBeer(beer) {
  const { name, brewery, country, style, abv } = beer
  return db('Beers')
    .insert({
      name,
      brewery,
      country,
      style,
      abv,
    })
    .then(() => {
      return getBeers()
    })
}
