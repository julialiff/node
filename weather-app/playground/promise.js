var asyncAdd =  (a, b) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Argument mus be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Result:', res);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log('Should be 45', res);
}, (errorMessage) => {
  console.log(errorMessage)
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     reject('Unable to fulfill promise');
//   }, 2500);
//   // resolve('Hey. It worked!');
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error :', errorMessage)
// });