module.exports = {
  getAsyncData,
  willThrowAsyncError
}

function getAsyncData() {
  return new Promise((resolve, reject) => {  
    setTimeout(() => {       
      resolve("resolved value"); 
    }, 1000)
  })
}

function willThrowAsyncError() {
  return new Promise(() => { throw Error("some error") })
}
