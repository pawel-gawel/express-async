# Express Async

Experimenting with async functions and generators used as middleware with Express.

## Run project

```
npm i && npm start
```

### Navigate through examples

* Async-based data resolving - [/async](/async)
* Async-based error handling - [/async-error](/async-error)
* Generator-based data resolving - [/generator](/generator)
* Generator-based error handling - [/generator-error](/generator-error)

## Route callbacks

### Async-based

Example how to run Express with async routes + wrapper for async functions so you would not have to put route callback code in try/catch block.

One can actually pass it to express as-is, but could also wrap it with dedicated wrapper for easy error handling.

See [/async](/async)

### Generator-based

Implements wrapper for generator functions; it teaches generators how to yield promises. This way wrapper acting as a coroutine feeds generator with resolved result of yielded promise.

See [/generator](/generator)