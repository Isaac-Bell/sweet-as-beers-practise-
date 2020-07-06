const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
  db.getData()
    .then(beers => {
      res.json(beers)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/add', (req, res) => {
  const beer = req.body
  db.addBeer(beer)
    .then(newBeer => {
      res.json(newBeer)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const beer = req.body
  db.updateBeer(beer, id)
    .then(updated => {
      res.json(updated)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
