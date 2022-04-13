


// const promise = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 2000)
// })

// promise.then(value => {
//   console.log(value, 'resolve')
// }, reason => {
//   console.log(reason, 'reject')
// })

// promise.then(value => {
//   console.log(value, 'value2')
// })
// promise.then(value => {
//   console.log(value, 'value3')
// })


const Mypromise = require('./Mypromise')



Mypromise.resolve().then(() => {
  console.log(0)
  return MyPromise.resolve(4)
}).then((res) => {
  console.log(res)
})

Mypromise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})






// Mypromise.resolve().then(() => {
//   console.log(0)
//   return Mypromise.resolve(100)
// }).then(res => {
//   console.log(res)
// })





// const promise = new Mypromise((resolve, reject) => {
  // throw new Error('错误处理!!')



  // resolve('success')
  // reject('err')



  // setTimeout(() => {
  //   resolve('success')
  // }, 2000)
// })

// function other () {
//   return new Mypromise((resolve, reject) => {
//     resolve('other')
//   })
// }

// promise.then(value => {
//   console.log(1)
//   console.log(value, 'resolve')
//   throw new Error('then error')
// }, reason => {
//   console.log(2)
//   console.log(reason, 'reject')
// }).then(value => {
//   console.log(3)
//   console.log(value, '3value')
// }, reason => {
//   console.log(4)
//   console.log(reason.message)
// })


// promise.then(resolve => {
//   console.log(resolve, 'resolve2')
// })
// promise.then(resolve => {
//   console.log(resolve, 'resolve3')
// })

// const p1 = promise.then(value => {
//   console.log(value)
//   return p1
// })

// p1.then(value => {
//   console.log(1)
//   console.log(value)
// }, reason => {
//   console.log(2)
//   console.log(reason.message)
// })

// promise.then().then().then().then().then().then().then().then(value => {
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })