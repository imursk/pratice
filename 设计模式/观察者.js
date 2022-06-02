


//被观察者
class Subject {
  constructor(name) {
    this.name = name
    this.observers = []
    this.state = '宝贝真乖~'
  }
  //提供一个接受观察的方法
  attach (observer) {
    this.observers.push(observer)//存放所有观察者
  }
  setState (newState) {//更改被观察者的状态
    this.state = newState
    this.observers.forEach(i => i.update(newState))
  }
}

//观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update (newState) {//通知观察者更新了
    console.log(this.name + '说:' + newState)
  }
}





let b = new Subject('熊孩子')
let o1 = new Observer('爸爸')
let o2 = new Observer('妈妈')
b.attach(o1)
b.attach(o2)
b.setState('你又欠揍了！？')