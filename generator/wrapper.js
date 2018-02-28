module.exports = fn => (req, res, next) => {
  let recursive = (gen, lastValue) => {
    let { value, done } = gen.next(lastValue)
    if (value instanceof Promise) {
      value.then(v => recursive(gen, v)).catch(next)
    } else if (!done) {
        recursive(gen, value)
    }
  }
      
  try {
    recursive(fn(req, res))
  } catch (e) {
    console.log('error caught in generatorWrapper', e)
  }
}
