import request from 'superagent'

const beersUrl = 'http://localhost:3000/api/v1/beers'

export function getBeers () {
  return request
    .get(beersUrl)
    .then(response => {
      console.log(response.body.beers)
      return response.body.beers
    })
}
