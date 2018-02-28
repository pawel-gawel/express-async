const asyncRoutes = require('./async-routes')
const generatorRoutes = require('./generator-routes')
const package = require('./package')

const app = require('express')()
app.use(asyncRoutes)
app.use(generatorRoutes)

app.use((err, req, res, next) => {
  res.send("There was an error: " + err.message)
})

app.listen(process.env.npm_package_config_port, () => {
  console.log('listening on %s...', process.env.PORT || package.config.port)
  
})
