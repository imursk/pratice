/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone (obj = {}, map = new WeakMap()) {
  if (typeof obj !== "object") {
    return obj
  }
  if (map.get(obj)) {
    return map.get(obj)
  }

  let result = {}
  // 初始化返回结果
  if (
    obj instanceof Array ||
    // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
    Object.prototype.toString(obj) === "[object Array]"
  ) {
    result = []
  }
  // 防止循环引用
  map.set(obj, result)
  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map)
    }
  }

  // 返回结果
  return result
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
}
target.target = target
let result = deepClone(target)
console.log(result)









// function deepClone (obj, map = new Map()) {
//   if (typeof obj === 'object') {
//     if (map.get(obj)) {
//       return map.get(obj)
//     }
//     let cloneData = Array.isArray(obj) ? [] : {}
//     map.set(obj, cloneData)
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]
//         cloneData[key] = deepClone(element, map)
//       }
//     }
//     return cloneData
//   } else {
//     return obj
//   }
// }
