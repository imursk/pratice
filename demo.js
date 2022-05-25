// function sleep (fn) {
//   return new Promise((res, rej) => {
//     setTimeout(res, fn)
//   })
// }
// function red () { console.log('red') }
// function green () { console.log('green') }
// function yellow () { console.log('yellow') }
// async function light () {
//   red()
//   await sleep(1000)
//   green()
//   await sleep(1000)
//   yellow()
//   await sleep(1000)
//   light()
// }
// light()


// function invoke (list, methodName, arguments) {
//   list.forEach((item, index) => {
//     item = item[methodName]()
//   })
//   return list
// }

// invoke([[5, 1, 7], [3, 2, 1]], 'sort')
// // 期望值： [ [1, 5, 7], [1, 2, 3] ]



// let arr = []
// function fillArr (params) {
//   for (let i = 100; i >= 1; --i) {
//     params.push('' + (Math.floor(Math.random() * 10)))
//   }
//   return params
// }
// fillArr(arr)
// console.log(arr)
//   let mySet = function (params) {
//     return params.reduce((pre, cur) => {
//       if (!pre.includes(cur)) {
//         return pre.concat(cur)
//       } else {
//         return pre
//       }
//     }, [])
//   }
// console.log([...new Set(arr)])
// console.log(mySet(arr));


function mySort (params) {
  let len = params.length,
    i, j, tmp, result
  result = params.slice(0)
  for (i = 0; i < len; i++) {
    for (j = len - 1; j > i; j--) {
      if (result[j] < result[j - 1]) {
        tmp = result[j - 1]
        result[j - 1] = result[j]
        result[j] = tmp
      }
    }
  }
  return result
}
console.log(mySort([5, 6, 4, 7, 8]))