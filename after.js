//达到预计的次数，再执行函数

// 首先定义一个after函数，其中有两个参数  
// count是用来做减法决定你函数是何时执行的  
// callback为执行的回调
function after (count, callback) {
  let total = 0 // 这里声明一个计数器，用以增强函数功能（不需要也可以去掉）
  return function (value) { // value接收fn(1)中1这个值
    total += value
    if (--count <= 0) {
      // 若函数做减法到0时，便开始执行回调，也就是执行下方fn中的内容，顺手将total也传过去
      callback(total)
    }
  }
}

let fn = function (params) {
  console.log('问：我是世界第几帅？', '答：第' + params + '！')
}

let handsomeBoy = after(3, fn)

handsomeBoy(1)
handsomeBoy(1)
handsomeBoy(1)
handsomeBoy(1)
handsomeBoy(6)




// const fs = require('fs')
// //常规写法
// let res = []
// function fn (params) {
//   res.push(params)
//   if (res.length == 2) {
//     console.log(res)
//   }
// }

// // 修改后
// function after (count, callback) {
//   let res = []
//   return function (err, r) {
//     if (err) {
//       throw new Error(err)
//     }
//     res.push(r)
//     if (--count === 0) {
//       callback(res)
//     }
//   }
// }

// let newFn = after(2, function (res) {
//   console.log(res)
// })

// fs.readFile('./txt/name.txt', 'utf8', function (err, data) {
//   newFn(err, data)
// })

// fs.readFile('./txt/age.txt', 'utf8', function (err, data) {
//   newFn(err, data)
// })












