module.exports = generatorWrapper

function generatorWrapper(fn) {
  let recursive = (gen, lastValue) => {
    let { value, done } = gen.next(lastValue)
    if (done && value === undefined) { 
      return
    } else if (value instanceof Promise) {
      value
        .then(v => recursive(gen, v))
        .catch(e => console.log('error in generatorWrapper promise', e))
    } else {
        recursive(gen, value)
    }
  }

  return (req, res) => {
    try {
      recursive(fn(req, res))
    } catch(e) {
      console.log('error cought in generatorWrapper', e)
    }

  }
}
