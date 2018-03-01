const express = require('express')
const router = express.Router()
const getHomeData = require('./home-data')

router.get('/', async (req, res) => {
  let homeData = await getHomeData()
  res.send(homeData)
})

module.exports = router