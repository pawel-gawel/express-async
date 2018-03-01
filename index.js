const mainRoutes = require('./main/routes')
const asyncRoutes = require('./async/routes')
const generatorRoutes = require('./generator/routes')

const app = require('express')()
app.use(mainRoutes)
app.use(asyncRoutes)
app.use(generatorRoutes)

app.use((err, req, res, next) => {
  res.send("There was an error: " + err.message)
})

app.listen(process.env.npm_package_config_port, () => {
  console.log('listening on %s...', process.env.PORT || require('./package').config.port)
  
})
