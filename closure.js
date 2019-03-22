var outer = 'outer'
var copy
function outerFn () {
  var inner = 'inner'
  function innerFn (param) {
    console.log(inner)
    console.log(outer)
    console.log(magic)
    console.log(param)
  }
  copy = innerFn
}
console.log(magic)
var magic = 'magic'
outerFn()
copy("copy")
// outerFn执行完成之后，outerFn的函数作用域已经销毁，但是由于innerFn定义在outerFn里面进而形成了闭包。当执行copy()时，虽然outerFn的作用域不存在了，但是可以通过闭包访问outer声明时的作用域。

// 闭包常用使用模式
// 计时器和回调函数
function delay (message) {
  setTimeout(function timerFn () {
    console.log(message)
  }, 100)
}
delay(100)
// delay函数执行完成以后作用域就被销毁了。但是由于timerFn在delay内部声明，所以生成了一个覆盖delay函数作用域的闭包.所以1秒之后我们还是可以访问到message参数

// 私有变量
function privateTest () {
  var points = 0
  this.getPoints = function () {
    return points
  }
  this.score = function () {
    points ++
  }
}
var private = new privateTest()
private.score()
console.log(private.getPoints()) // 1
console.log(private.points) // undefined

// 循环与闭包
for ( var i = 0; i < 5; i ++ ) {
  setTimeout(function () {
    console.log(i) // 5,5,5,5,5
  }, i*100)
}
for ( var i = 0; i < 5; i ++ ) {
  (function (a) {
    setTimeout(function () {
      console.log(a)
    }, a*100)
  })(i)
}
// 这里的改进是通过生成一个IIFE的作用域， 把传入的i 存在了自执行函数的作用域中，所以每次可以取到正确的值。

// 模块
function module () {
  var private = 1;
  function getPrivate () {
    return private
  }
  function setPrivate () {
    private ++
  }
  return {
    getPrivate,
    setPrivate
  }
}
var instance = module()
console.log(instance.getPrivate()) // 1
instance.setPrivate()
console.log(instance.getPrivate()) // 2

