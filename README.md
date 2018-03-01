# Express Async

Experimenting with async functions and generators used as middleware with Express.

## Run project

```
npm i && npm start
```

## Route callbacks

### Async-based

Example how to run Express with async routes + wrapper for async functions so you wolud not have to put everything in try/catch block.

One can actually pass it to express as-is, but could also wrap it with dedicated wrapper for easy error handling (see `async/routes.js` and `async/wrapper.js`)