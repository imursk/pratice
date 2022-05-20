let arr1 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']       //统计重复
let arr2 = [1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7]                //去重
let arr3 = [[0, 1], [2, 3], [4, 5]]                         //一维展开
let arr4 = [[0, 1], [2, 3], [4, [5, [6], 7, 8]]]            //一维展开
let arr5 = [                                                //求和score
  {
    subject: 'math',
    score: 10
  },
  {
    subject: 'chinese',
    score: 20
  },
  {
    subject: 'english',
    score: 30
  }
]


let myStatistics = function (val) {
  return val.reduce((pre, cur) => {
    if (cur in pre) {
      pre[cur]++
    } else {
      pre[cur] = 1
    }
    return pre
  }, {})
}

let mySet = function (val) {
  return val.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
      return pre.concat(cur)
    } else {
      return pre
    }
  }, [])
}

let myFlat = function (val) {
  return val.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? myFlat(cur) : cur), [])
}

let myScore = function (val) {
  return val.reduce((pre, cur) => {
    return cur.score + pre
  }, 0)
}

console.log(myStatistics(arr1))
console.log(mySet(arr2))
console.log(myFlat(arr4))
console.log(myScore(arr5))


