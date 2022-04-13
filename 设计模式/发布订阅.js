// // const fs = require('fs')


// // function Events () {
// //   this.callbacks = []
// //   this.result = []
// // }
// // Events.prototype.on = function (callback) {
// //   this.callbacks.push(callback)
// // }
// // Events.prototype.emit = function (data) {
// //   this.result.push(data)
// //   this.callbacks.forEach(i => i(this.result))
// // }


// // let e = new Events()
// // e.on(function (arr) {
// //   if (arr.length === 3) {
// //     console.log(arr)
// //   }
// // })


// // fs.readFile('../txt/name.txt', 'utf8', function (err, data) {
// //   e.emit(data)
// // })
// // fs.readFile('../txt/age.txt', 'utf8', function (err, data) {
// //   e.emit(data)
// // })
// // fs.readFile('../txt/name.txt', 'utf8', function (err, data) {
// //   e.emit(data)
// // })









// // class EventEmitter {
// //   constructor() {
// //     this._events = Object.create(null)
// //   }
// //   on (eventName, callback) {
// //     if (!this._events) this._events = Object.create(null)
// //     if (eventName !== 'newListener') {
// //       this.emit('newListener', eventName)
// //     }
// //     if (this._events[eventName]) {
// //       this._events[eventName].push(callback)
// //     } else {
// //       this._events[eventName] = [callback]
// //     }
// //   }   
// //   once (eventName, callback) {
// //     let one = () => {
// //       callback()
// //       this.off(eventName, one)
// //     }
// //     one.l = callback
// //     this.on(eventName, one)
// //   }
// //   off (eventName, callback) {
// //     this._events[eventName] = this._events[eventName].filter(fn => {
// //       return fn != callback && fn.l != callback
// //     })
// //   }
// //   emit (eventName, ...args) {
// //     this._events[eventName].forEach(callback => callback(...args))
// //   }
// // }

// // let hei = new EventEmitter()

// // function ha(){
// //   console.log('haha');
// // }
// // function xi(){
// //   console.log('xixi');
// // }
// // hei.on('newListener',(type)=>{
// //   if(type == 'a'){
// //     console.log(type);
// //   }
// // })
// // hei.on('a',ha)
// // hei.on('a',ha)
// // hei.on('b',ha)
// // hei.on('c',ha)


// // hei.once('a',xi)
// // hei.off('a',xi)


// // hei.emit('a')
// // hei.emit('a')










// // class PubSub {
// //   constructor() {
// //     // 保存监听事件
// //     this.event = {
// //       'event': [fun]
// //     }
// //   }

// //   // 订阅
// //   subscribe (eventName, fun) {
// //     try {
// //       if (!this.event.hasOwnProperty(eventName)) {
// //         this.event[eventName] = []
// //       }
// //       if (typeof fun == "function") {
// //         this.event[eventName].push(fun)
// //       } else {
// //         throw new Error(`请给${eventName}事件添加回调方法`)
// //       }
// //     } catch (error) {
// //       console.warn(error)
// //     }
// //   }

// //   // 发布
// //   publish (eventName, arg) {
// //     try {
// //       if (this.event.hasOwnProperty(eventName)) {
// //         this.event[eventName].map((item) => {
// //           item.call(null, arg)
// //         })
// //       } else {
// //         throw new Error(`${eventName}事件未被注册`)
// //       }
// //     } catch (error) {
// //       console.warn(error)
// //     }
// //   }

// //   // 移除订阅
// //   unSubscribe (eventName, fun, arg) {
// //     try {
// //       if (this.event.hasOwnProperty(eventName)) {
// //         this.event[eventName].map((item, index) => {
// //           if (item == fun) {
// //             this.event[eventName].splice(index, 1)
// //             item.call(null, arg)
// //           }
// //         })
// //       }
// //     } catch (error) {
// //       console.warn(error)
// //     }
// //   }
// // }



// // let util = new PubSub()

// // function notice (params) {
// //   console.log(params)
// // }

// // util.subscribe('event', notice)

// // util.publish('event', '一期报刊已发布')
// // util.publish('event', '二期报刊已发布')
// // util.publish('event', '三期报刊已发布')

// // util.unSubscribe('event', notice, '您已取消订阅')



// class EventEmitter {
//   constructor() {
//     this._events = Object.create(null)
//   }
//   on (eventName, callback) {
//     if (!this._events) this._events = Object.create(null)
//     if (this._events[eventName]) {
//       this._events[eventName].push(callback)
//     } else {
//       this._events[eventName] = [callback]
//     }
//   }
//   emit (eventName, ...args) {
//     console.log(...args, 'argssssss')
//     this._events[eventName].forEach(fn => { fn(...args) })
//   }
//   off (eventName, callback) {
//     this._events[eventName]
//   }
//   once () { }
// }

// let util = new EventEmitter()

// function notice (params) {
//   console.log(params)
// }

// util.on('ev', notice)

// util.emit('ev', '一期')
// util.emit('ev', '二期')
// util.emit('ev', '三期')

// // util.off('ev',notice)



function Parent () {
  this.a = 1
  this.b = [1, 2, this.a]
  this.c = { demo: 5 }
  this.show = function () { console.log(this.a, this.b, this.c.demo) }
}

function Child () {
  this.a = 2
  this.change = function () {
    this.b.push(this.a)
    this.a = this.b.length
    this.c.demo = this.a++
  }
}

Child.prototype = new Parent()
var parent = new Parent()
var child1 = new Child()
var child2 = new Child()
child1.a = 11
child2.a = 12
parent.show()
child1.show()
child2.show()
child1.change()
child2.change()
parent.show()
child1.show()
child2.show()