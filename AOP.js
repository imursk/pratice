//面向切片编程

function speak (a, b) {
  console.log(a + '开眼了' + b)
}

Function.prototype.before = function (fn) {
  let that = this
  return function () {
    fn()
    that(...arguments)
  }
}

let beforeSpeak = speak.before(function () {
  console.log('小刀扎屁股')
})

beforeSpeak('真是给我', '!')

let obj = {
  toString () {
    return '一束黑光'
  }
}
let demo = Symbol(obj)
console.log(demo)



