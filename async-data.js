module.exports = {
  getAsyncData,
  willThrowAsyncError
}

function getAsyncData(data) {
  return new Promise((resolve, reject) => {  
    setTimeout(() => {       
      resolve("resolved value: " + data); 
    }, 1000)
  })
}

function willThrowAsyncError() {
  return new Promise(() => { throw Error("some error") })
}
