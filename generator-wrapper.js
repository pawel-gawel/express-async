module.exports = generatorWrapper

function generatorWrapper(fn) {
  let recursive = (gen, v) => {
    let n = gen.next(v).value
    if (n instanceof Promise) {
      n.then(v => recursive(gen, v)).catch(console.log)
    }
  }

  return (req, res) => {
    try {
      recursive(fn(req, res))
    } catch(e) {
      console.log(e)
    }

  }
}
