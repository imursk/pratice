// let obj = { name: 'zhongkun', age: '18' }
// let state = new Proxy(obj, {
//   get (obj, key) {
//     return obj[key]
//   },
//   set (obj, key, value) {
//     console.log(obj, key, value)
//     obj[key] = value
//   }
// })
// console.log(obj)
// state.name = 'heihei'
// state.kk = 'haha'
// console.log(obj)



let obj = [2, 3, 4]
let state = new Proxy(obj, {
  get (obj, key) {
    return obj[key]
  },
  set (obj, key, value) {
    console.log(obj, key, value)
    obj[key] = value
  }
})
console.log(obj)
state[0] = 6
console.log(obj)

