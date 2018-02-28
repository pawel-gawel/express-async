const wrap = require('./generator-wrapper')
const { getAsyncData, willThrowAsyncError } = require('./async-data')
const express = require('express')
const router = express.Router()

router.get('/generator', wrap(function* (req, res) {
  console.log("initial suspension")
  let data = yield getAsyncData('data1')
  console.log("suspended after data1", data)
  // let data2 = yield getAsyncData('data2')
  res.send(data)
  console.log("response sent")
}))

module.exports = router