// .call(this,params1,params2)      逗号分隔
// .apply(this,[params1,params2])   数组包裹
// .bind(this,params1,params2)()    自执行函数,可分多次传参（柯里化）
// .bind(this,[params1,params2])()

Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== "function") {
    throw new Error("Type error")
  }
  // 首先获取参数
  let args = [...arguments].slice(1)
  let result = null
  // 判断 context 是否传入，如果没有传就设置为 window
  context = context || window
  // 将被调用的方法设置为 context 的属性
  // this 即为我们要调用的方法
  context.fn = this
  // 执行要被调用的方法
  result = context.fn(...args)
  // 删除手动增加的属性方法
  delete context.fn
  // 将执行结果返回
  return result
}

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new Error("Type error")
  }
  let result = null
  context = context || window
  // 与上面代码相比，我们使用 Symbol 来保证属性唯一
  // 也就是保证不会重写用户自己原来定义在 context 中的同名属性
  const fnSymbol = Symbol()
  context[fnSymbol] = this
  // 执行要被调用的方法
  if (arguments[1]) {
    result = context[fnSymbol](...arguments[1])
  } else {
    result = context[fnSymbol]()
  }
  delete context[fnSymbol]
  return result
}

Function.prototype.myBind = function (context) {
  // 边界
  if (typeof this !== "function") {
    throw new Error("Type error")
  }
  // 声明
  const _T = this,
    args = [...arguments].slice(1),
    o = function () { },
    newF = function () {
      _T.apply(
        this instanceof o ? this : context,
        args.concat(...arguments)
      )
    }
  o.prototype = _T.prototype
  newF.prototype = new o
  return newF
}



let obj = {
  value: '666',
}
function fn (params1, params2) {
  console.log(this.value, params1, params2)
}
// fn.myCall(obj,1,2)
// fn.myApply(obj, [1, 2])
fn.myBind(obj, 1, 2)()


