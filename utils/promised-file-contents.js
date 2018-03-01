const { promisify } = require('util')
const { readFile } = require('fs')

const promisedFileContents = filepath => 
  promisify(readFile)(filepath)
    .then(b => b.toString())
    .then(b => b.replace(/</g, '&lt;'))

module.exports = promisedFileContents