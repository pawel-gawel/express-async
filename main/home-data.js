const fs = require('fs')
const { promisify } = require('util')
const { markdown } = require('markdown')

module.exports = getHomeData

async function getHomeData() {
  let readme = await promisify(fs.readFile)('./README.md')
  return `${markdown.toHTML(readme.toString())}
    <strong>Examples:</strong> <br/><br/>
    Async-based data resolving - <a href="/async">/async</a><br/>
    Async-based error handling - <a href="/async-error">/async-error</a><br/>
    Generator-based data resolving - <a href="/generator">/generator</a><br/>
    Generator-based error handling - <a href="/generator-error">/generator-error</a><br/>
  `
}
