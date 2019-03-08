### 第一章的笔记


#### javascript中没有整数。javascript使用64位浮点数表示整数，和java采用双精度浮点数的做法一致,所以有时候会有下面的情况发生:
    >0.1+0.2
    0.3000000000000004
    >0.1+0.2 === 0.3 // false
---
#### 使用+号可以把String转换成Number:

    > + '4'
    // 4 
---

#### 使用isNaN()处理 parseInt()的结果也是一种明智的做法
    var testVal = 'elephant'
    if(isNaN(parseInt(testVal/2), 2)){
      cosnole.log('handle not a number case')
    } else{
      console.log('handle number case')
    }
