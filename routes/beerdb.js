const db = require('../db')
const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
  db.addYaBeer(req.params.name)
    .then(() => {
      res.sendStatus(200)
    })
})

module.exports = router
