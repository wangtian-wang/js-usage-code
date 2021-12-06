## 判断两个对象是否相等

1. 对象相等的定义？
   case 1 看两个对象指向的引用地址是否是相同的
   case 2 看两个对象的属性值和属性名是否相同
2. 不同类型的 key 是如何判断其相等的？？

3-1. case 1 实现

```
对于一般简单对象，并且对象中的key的顺序相同
let obj1 = json.stringfiy(object1) ; let obj2 =  json.stringfiy(object2)
obj1 === obj2 ? true: false
若对象中的key的顺序不相同 那比较的结果不准确，可以使用object.assign()将对象中的属性变为一致的。
object.assign(obj1, obj2) 得到的对象A，key的排列顺序是obj1顺序， 值是obj2的属性值,但是直接对比这个A与obj1是否相等，任然有问题，假设obj1中的属性在obj2中不存在 那么 A中还是会有这个属性，此时A与obj2中的属性已经不相同了 。

对于复杂对象 对象的key为对象，函数 数组 或者正则表达式呢？ 应该怎样比较
```

3-2 case 2 实现

```
 这个实现比较复杂 参考lodash.isEqual()方法
 原理： 比较两个对象的属性与属性值是否相同
```
