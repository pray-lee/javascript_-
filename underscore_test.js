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
