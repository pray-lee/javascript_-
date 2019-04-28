// map
let founders = new Map()
founders.set('facebook', 'mark')
founders.set('google', 'larry')
founders.size // 2
founders.get('twitter') // undefined
founders.has('yahoo') // false

for(let [key, value] of founders){
  console.log(key + ' founded by ' + value)
}

// set 值的集合,每个值只能出现一次
let mySet = new Set()
mySet.add('1')
mySet.add('howdy')
mySet.add('foo')
mySet.has('1') // true
mySet.delete('foo')
console.log(mySet')
