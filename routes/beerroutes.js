const db = require('../db')
const express = require('express')

const router = express.Router()
module.exports = router

// Create an admin route that will run the getBeers query on the database and render viewData as an object
router.get('/admin', (req, res) => {
  //   console.log('Time:', Date.now()) // test new express route
  //   res.send('admin screen')
  db.getBeers()
    .then(beers => {
      const viewData = { beers }
      res.json(viewData)
    })
    .catch(err => {
      // Security best practice violation:
      // Should not show error messages to users/hackers
      res.status(500).send(err.message)
    })
})

// Create a route that will delete a beer given the id
router.delete('/:id', (req, res) => {
  db.deleteBeer(Number(req.params.id))
    .then(() => {
      res.sendStatus(202)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// Create a route that will post a new beer given the id
router.post('/new', (req, res) => {
  db.insertBeer(Number(req.params.id), req,params.name)
    .then(() => {
      res.sendStatus(202)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
