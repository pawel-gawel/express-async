const asyncRoutes = require('./async-routes')
const generatorRoutes = require('./generator-routes')

const app = require('express')()
app.use(asyncRoutes)
app.use(generatorRoutes)

app.use((err, req, res, next) => {
  res.send("There was an error: " + err.message)
})

app.listen(8000, () => {
  console.log('it listens')
  
})
