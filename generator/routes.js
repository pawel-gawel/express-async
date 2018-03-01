const wrap = require('./wrapper')
const { getAsyncData, willThrowAsyncError } = require('../async-data')
const { promisedFileContents } = require('../utils')

const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/generator', wrap(function* (req, res) {
  let wrapperPath = path.join(__dirname, 'wrapper.js')
  let contents = [
    yield promisedFileContents(__filename),
    yield promisedFileContents(wrapperPath)
  ]

  res.send(`
    <h3>${__filename}</h3>
    <pre>${contents[0]}</pre>
    <h3>${wrapperPath}</h3>
    <pre>${contents[1]}</pre>    
  `)
}))

router.get('/generator-error', wrap(function* (req, res) {
  yield willThrowAsyncError()
}))

module.exports = router