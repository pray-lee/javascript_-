"use strict"
// 块级作用域
// var 是函数作用域 let 是块级作用域
var a = 1
{
  let a = 2
  console.log(a) // 2
}
console.log(a) //1


// spread or rest
// 展开
console.log(...[1,2,3]) // 1 2 3
// 合并
function A(a, ...b) {
  console.log(a, b) // 1, [2,3,4,5]
}
A(1,2,3,4,5)

// 标记字符串模版
// 第一个参数是由普通字符串组成的数组，第二个是由所有求值后的插值表达式组成的数组
function emmy(key, ...values) {
  console.log(key)
  console.log(values)
}
let category = 'Best Movie'
let movie = 'Adventures in ES6'
emmy`And the award for ${category} goes to ${movie}`



