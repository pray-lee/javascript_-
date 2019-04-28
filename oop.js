// 面向对象的javascript

// 继承
subClass.prototype = new SuperClass()

function Person () {}
Person.prototype.cry = function () {
  console.log('cry')
}

function Child () {}
Child.prototype = new Person()

var baby = new Child()
console.log(baby instanceof Child) //true
console.log(baby instanceof Person) //true
console.log(baby instanceof Object) //true

// 接收器与设置器
// ES5提供了默认语法

var person = {
  firstname: 'lee',
  lastname: 'xiaoyong',
  get fullname() {
    return this.firstname + ' ' + this.lastname
  }
  set fullname(value){
    var valueArr = value.toString().split(' ')
    this.firstname = valueArr[0]
    this.lastname = valueArr[1]
  }
}
person.fullname = 'Issac Newton' // 默认调用set
console.log(person.fullname) // 默认调用get

// 另一种声明接收器和设置器的方法是使用Object.defineProperty():

var person1 = {
  firstname = 'su',
  lastname = 'wenli'
}
Object.defineProperty(person1, 'fullname', {
  get: function () {
    return this.firstname + ' ' + this.lastname
  },
  set: function (value) {
    var valueArr = value.split(' ')
    this.firstname = valueArr[0]
    this.lastname = valueArr[1]
  },
  //value:
  //enumerable
  //writable
  //configurable
})
// 一旦使用Object.defineProperty给对象添加属性，那么如果不设置属性的特性，那么configurable、enumerable、writable这些值都为默认的false
// 当使用了getter或setter方法，不允许使用writable和value这两个属性
