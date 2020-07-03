const db = require('./db')

const express = require('express')

const router = express.Router()
module.exports = router

// Create a route that will run the getBeers query on the database and render as a 'view'. 
// This 'view is tbc how to do with React?
router.get('/find', (req, res) => {
    db.getBeers()
        .then(beers => {
            const viewData = { beers }
            res.render('view', viewData)
        })


})