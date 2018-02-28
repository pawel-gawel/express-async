const wrap = require('./wrapper')
const { getAsyncData, willThrowAsyncError } = require('../async-data')
const express = require('express')
const router = express.Router()

router.get('/generator', wrap(function* (req, res) {
  let data = [
    yield getAsyncData('data1'), 
    yield getAsyncData('data2'), 
    yield "some simple value"
  ]
  res.send(data)
}))

router.get('/generator-error', wrap(function* (req, res) {
  yield willThrowAsyncError()
}))

module.exports = router