const _ = require('underscore')

function print(value, index, list){
  console.log(value, index, list)
}

_.each([1, 2, 3], print) // 遍历

// range默认使用整数填充列表
console.log(_.range(10)) // [0-9]
console.log(_.range(1, 11)) // [1-10]
console.log(_.range(0, 11, 5)) // [0, 5, 10]
console.log(_.range(0, -10, -1)) //[ 0, -1, -2 ... -10 ]

console.log(_.range(0, 3).map(item => {
  return `a${item}`
}))

// reduce
// 每次执行都减一项，减完为止
console.log('reduce:')
_.reduce([1,2,3,4], (prevResult, currentValue) => {
  console.log(prevResult, currentValue) // 先输出1，2 然后输出haha, 3 因为第一次执行完返回了haha,haha就作为第二次执行的prevResult参数传入
  return currentValue
})

let reduceValue = _.reduce([1,2,3,4], (prev, current) => {
  return current * 9
})

console.log(reduceValue) // 36

// filter
console.log('filter:')
let events = _.filter([1,2,3,4,5,6], item => {
  return item % 2 === 0
}) // [2, 4, 6]
console.log(events)

// reject 与filter相反，取不符合条件的
console.log('reject:')
let odds = _.reject([1,2,3,4,5,6], item => {
  return item % 2 === 0
})
console.log(odds) // [1,3,5]

// contains 如果某个值存在于列表中，返回true,否则返回false
console.log('contains:')
console.log(_.contains([1,2,3,4,5,6], 3)) //true

// invoke 针对列表中的每个元素调用一个特定的函数。
console.log('invoke:')
console.log(_.invoke([[5,1,7], [3,2,1]], 'sort'))

// uniq 删除重复元素
console.log('uniq:')
console.log(_.uniq([1,1,3,3,2,2,3])) // [1,2,3]

// partition 将数组一分为二, 满足条件的分在第一组，其余分到第二组
console.log('partition:')
console.log(_.partition([0,1,2,3,4,5], item => {
  return item % 2 === 0
}))

// compact // 返回没有假值的数组副本
console.log('compact:')
console.log(_.compact([0, null, undefined, '', false, true]))

// without 返回一个删所有指定值的数组副本
console.log('without:')
console.log(_.without([1,1,2,3,4,4,5,5,6,6], 1,2,4,5)) // [3,6,6]

// keys 检索对象可枚举的自有属性名称 , 它并不会向上遍历原型链
console.log('keys:')
console.log(_.keys({a:1,b:2})) // [a, b]

// allKeys 检索对象自有和继承的属性名称
console.log('allKeys:')
function A () {
  this.name = 1
}
A.prototype.age = 29
A.prototype.getName = function () {
  return this.name
}
var a = new A()
console.log(_.allKeys(a)) // [name, age, getName]

// values 检索对象自有属性的值
console.log('values:')
console.log(_.values(a)) // [1]

// mapObject 转换对象中各个属性的值
var lst = _.mapObject(a, function (val, key) {
  if(key === 'name'){
    return val + 10
  }
})
console.log(lst)  // {name: 11}
