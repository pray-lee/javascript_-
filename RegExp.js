// 正则
// 匹配字符组
const pattern = /[abc]/ //只要包含其中任意一个，就是true
console.log(pattern.test('abc')) // true
console.log(pattern.test('a'))   // true
console.log(pattern.test('ab'))  // true
console.log(pattern.test('bc'))  // true
console.log(pattern.test('bd'))  // true

const pattern1 = /[^abc]/  // 指定不想匹配到的字符,只要有一个不满足条件，就返回true
console.log(pattern1.test('ab')) //false
console.log(pattern1.test('ad')) //true
// 这种模式还有另一种很重要的用法是用来指明值的范围。
console.log('-------')
var pattern2 = /[0-5]/
console.log(pattern2.test(3)) // true
console.log(pattern2.test(123)) // true
console.log(pattern2.test(3456)) // true
console.log(pattern2.test(6789)) // true
console.log(/[1234567890]/.test('this is my first 2019 study time')) // true

// exec 想知道特定模式出现的位置用这个方法：
let strToMatch = 'A Toyota! Race fast, safe car! A Toyota!'
let regExAt = /Toy/g;
let arrMatches = regExAt.exec(strToMatch)
console.log(arrMatches) // ['Toy', index: 2, input: '原字符串', groups: undefined]

let strToMatch1 = 'i1, i2, i3, i4, i5, i6, i7, i8'
let re = /i[0-5]/gi
let arrMatches1 = strToMatch1.match(re)
console.log(arrMatches1) // [i1, i2, i3, i4, i5]
let re1 = /i[^0-5]/gi
let arrMatches2 = strToMatch1.match(re1)
console.log(arrMatches2) // [i6, i7, i8]
