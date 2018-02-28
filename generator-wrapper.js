module.exports = generatorWrapper



function generatorWrapper(fn) {
  return (req, res) => {
    let gen = fn(req, res)

    let n = gen.next().value
    n.then(v => gen.next(v))
    

   // n.then(console.log)
  }
}