const routes = require('./routes')

const app = require('express')()
app.use(routes)

app.listen(8000, () => {
  console.log('it listens')
})
