const asyncWrapper = require('./wrapper')
const { getAsyncData, willThrowAsyncError } = require('../async-data')
const express = require('express')
const router = express.Router()

router.get('/', asyncWrapper(async (req, res, next) => {
  let data = await getAsyncData('some async data')
  res.send(data)
}))

router.get('/error', asyncWrapper(async (req, res, next) => {
  await willThrowAsyncError()
}))

module.exports = router