const wrapper = require('./wrapper')
const { getAsyncData, willThrowAsyncError } = require('../async-data')
const { promisedFileContents } = require('../utils')
const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/async', wrapper(async (req, res, next) => {
  let wrapperPath = path.join(__dirname, 'wrapper.js')
  let contents = await Promise.all([ 
    promisedFileContents(__filename),
    promisedFileContents(wrapperPath)
  ])

  res.send(`
    <h3>${__filename}</h3>
    <pre>${contents[0]}</pre>
    <h3>${wrapperPath}</h3>
    <pre>${contents[1]}</pre>    
  `)
}))

router.get('/async-error', wrapper(async (req, res, next) => {
  await willThrowAsyncError()
}))

module.exports = router