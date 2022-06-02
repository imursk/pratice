function myNew (context) {
  // 创建一个空对象（需要继承Object上的所有属性和方法）
  const obj = new Object()
  // 连接原型链
  obj.__proto__ = context.prototype
  // 修改context的this指向为obj
  const res = context.apply(obj, [...arguments].slice(1))
  // return context
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