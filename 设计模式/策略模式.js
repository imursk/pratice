// 策略模式
// 商品折扣例子

let sale = {
  '100_10': function (price) { return price -= 10 },
  '200_25': function (price) { return price -= 25 },
  '80%': function (price) { return price *= 0.8 },
}

class calcPrice {
  calc (price, type) {
    if (!sale[type]) return '不存在此折扣'
    return sale[type](price)
  }
  add (type, fn) {
    if (sale[type]) return '折扣已经存在'
    sale[type] = fn
  }
  del (type) {
    delete sale[type]
  }
}

let p1 = new calcPrice()
console.log(p1.calc(310, '100_10'))
p1.add('66_6', function (price) { return price -= 6 })
p1.del('100_10')
console.log(sale)
console.log(p1.calc(36, '66_6'))
// // 策略模式
// // 商品折扣例子

// let sale = {
//   '100_10': function (price) { return price -= 10 },
//   '200_25': function (price) { return price -= 25 },
//   '80%': function (price) { return price *= 0.8 },
// }

// class calcPrice {
//   calc (price, type) {
//     if (!sale[type]) return '不存在此折扣'
//     return sale[type](price)
//   }
//   add (type, fn) {
//     if (sale[type]) return '折扣已经存在'
//     sale[type] = fn
//   }
//   del (type) {
//     delete sale[type]
//   }
// }

// let p1 = new calcPrice()
// console.log(p1.calc(310, '100_10'))
// p1.add('66_6', function (price) { return price -= 6 })
// p1.del('100_10')
// console.log(sale)
// console.log(p1.calc(36, '66_6'))
