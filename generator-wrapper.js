module.exports = generatorWrapper

function generatorWrapper(fn) {
  return (req, res, next) => {
    let recursive = (gen, lastValue) => {
      let { value, done } = gen.next(lastValue)
      if (done && value === undefined) { 
        return
      } else if (value instanceof Promise) {
        value
          .then(v => recursive(gen, v))
          .catch(next)
      } else {
          recursive(gen, value)
      }
    }
        
    try {
      recursive(fn(req, res))
    } catch(e) {
      console.log('error caught in generatorWrapper', e)
    }
  }
}
