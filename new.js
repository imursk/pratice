function myNew (context) {
  const obj = new Object()
  obj.__proto__ = context.prototype
  const res = context.apply(obj, [...arguments].slice(1))
  return typeof context === 'object' ? res : obj
}


// ES5构造函数
let Parent = function (name, age) {
  let that = this
  that.name = name
  that.age = age
  return that
}
const child = myNew(Parent, '嫩爹', '25')
// const child = new Parent('嫩爹', '25')
console.log(child)