
function isType(type){
  return function(obj){
    return Object.prototype.toString.call(obj).includes(type)
  }
}

let types = ['Object','Array','String','Null','Undefined','Boolean']
let fns = {}
types.forEach(type => {
  fns['is'+type] = isType(type)
})

let a = ''
console.log(fns.isArray(a));


