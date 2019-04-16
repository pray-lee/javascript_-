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

// 重复出现
console.log('---------')
let repeatStr = /behaviou?r/ // u 可以出现0次或者1次
console.log(repeatStr.test('behavior')) // true
console.log(repeatStr.test('behaviour')) // true

console.log('------')
console.log(/'\d+'/.test("'123'")) // true

// 分组
let heartyLaugh = /Ha+(ha+)+/i
console.log(heartyLaugh.test('Hahahahahahhahahahahahaha')) // true

// 定义单词边界 \b,
// 下面的例子，因为在cat前面加了\b单词边界，只有当以cat开头，才算匹配到
console.log(/\bcat/.test('this is a c at'))// false
console.log(/\bcat/.test('this is a cat'))// true
console.log(/\bcat/.test('this is a tomcat'))// false
// 如果在cat后面加了\b，就匹配尾部是不是一个完整的单词
console.log(/cat\b/.test('this is a tomcat'))// true
console.log(/\bcat\b/.test('this is a acatb'))// false

console.log('----')
// 项
let origin = '1234 5678'
let re3 = /(\d{4}) (\d{4})/
let modifiedOrigin = origin.replace(re3, '$2 $1')
console.log(modifiedOrigin) // 5678 1234


// 贪婪限定符针对整个字符串进行匹配。如果没有发现匹配，它会删除字符串的最后一个字符，然后再尝试匹配。如果还没匹配，再删除最后一个字符，这个过程一直重复，直到出现匹配或是字符串已经变成空串


// 处理空字符串
function trim(str) {
  return (str || '').replace(/^\s+|\s+$/g, '')
}
console.log('---'+trim('  test   ')+'--') // ---test---

let reg5 = /\s+/g
console.log('There are    a lot        of spaces'.replace(reg5, ' '))


