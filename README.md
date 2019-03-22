### 第一章的笔记


#### javascript中没有整数。javascript使用64位浮点数表示整数，和java采用双精度浮点数的做法一致,所以有时候会有下面的情况发生:
    >0.1+0.2
    0.3000000000000004
    >0.1+0.2 === 0.3 // false
---
#### 使用+号可以把String类型的数字转换成Number:

    > + '4'
    // 4
    > var c = +'foo'
    // c: NaN, typoeof c : number
    > + ''
    // 0 把空字符串转换成0, typeof b: number


---

#### 使用isNaN()处理 parseInt()的结果也是一种明智的做法
    var testVal = 'elephant'
    if(isNaN(parseInt(testVal), 2)){
      cosnole.log('handle not a number case')
    } else{
      console.log('handle number case')
    }

在这个例子中，如果变量testVal值是通过外部接口设置的，则你无法确 定该变量值的类型。如果不使用isNaN()进行处理，parseInt()将会产生异常，导致程序崩溃。

---
#### 字符串是一个unicode字符序列（每个字符占16位）
---

#### null == undefined // true

- null表示赋了一个没有意义的值
- undefined表示已经定义，没有赋值
---

#### 逻辑操作符（左右两边不是原始类型的boolean）
- 逻辑与： 如果第一个操作数为真，则返回第二个。如果第一个操作数为假，则返回第一个
- 逻辑或： 如果第一个操作数为真，返回第一个。如果第一个操作数为假，则返回第二个

典型用法是为变量分配默认值：
```
function hello(name) {
  name = name || 'leexiaoyong' // 或操作符，如果name为真，返回name,如果为假，返回第二个
}
```
---
#### 相等
- `==`判断时不同类型的会进行转换
- `===`不做类型转换，类型不同就不相等
- `Object.is()`也是判断是不是严格相等，只不过有下面两种情况比较特殊：
      > Object.is(NaN, NaN) // true
      > Object.is(+0, -0) // false
---
#### 类型转换
- 当非数字值需要被强制转换成数字时， JavaScript会在内部使用toNumber()方法： true变成1，undefined变成NaN，false变成0，null变成0。在字符串上使用toNumber()时会进行字面上的转换，如果转换失败，则返回NaN。
---
