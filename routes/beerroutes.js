const db = require('../db')
const express = require('express')

const router = express.Router()
module.exports = router

// Create an admin route that will run the getBeers query on the database and render viewData as an object
router.get('/admin', (req, res) => {
//   console.log('Time:', Date.now()) // test new express route
  res.send('admin screen')
//   db.getBeers()
//     .then(beers => {
//       const viewData = { beers }
//       res.render('view', viewData)
//     })
})
