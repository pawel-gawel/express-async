const fs = require('fs')
const { promisedFileContents } = require('../utils')
const { markdown } = require('markdown')

module.exports = getHomeData

async function getHomeData() {
  return `${markdown.toHTML(await promisedFileContents('./README.md'))}

  `
}
