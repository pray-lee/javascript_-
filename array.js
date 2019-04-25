// array
// 创建方法
// let arr = new Array(1, 2, 3)
let arr1 = Array(1, 2, 3)
let arr2 = [1, 2, 3]

// 清空数组
let array = [1, 2, 3]
array.length = 0
console.log(array) // []
// 访问数组里没有的元素会返回undefined
console.log(array[3]) // undefined

let arr3 = [1, , 2, , , ,4]
arr3.forEach(item => {
  console.log(item) // 1, 2, 3   forEach不会迭代未分配值的元素
})

// concat
let ar1 = [1]
let ar2 = [2]
let ar3 = [...ar1, ...ar2]
console.log(ar3) //[1, 2]
let ar4 = ar1.concat(ar2)
console.log(ar4) // [1, 2]

// join 不会改变原数组
let arr4 = [1, 2, 3]
let list = arr4.join('-')
console.log(list) // '1-2-3'

// pop 会改变原数组
let myArray = [1, 2, 3]
let lastEl = myArray.pop()
console.log('---------')
console.log(myArray, lastEl)

// push 会改变原数组
myArray.push(4)
console.log(myArray)

// shift 会改变元数组
 let myArray1 = [1,2,3]
let firstEl = myArray1.shift()
console.log(myArray1, firstEl)

// unshift 会改变原数组
myArray1.unshift(4)
console.log(myArray1)

// reverse 会改变原数组
let unreverseArr = [1,2,4,3]
unreverseArr.reverse()
console.log('------------')
console.log(unreverseArr)

// sort 会改变原数组
let unsortArr = [1,3,2,4]
unsortArr.sort()
console.log('-------------')
console.log(unsortArr)
