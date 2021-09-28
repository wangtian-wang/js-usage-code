## 清空对象中的空值

```js
const isVoid = (value) => value === undefined || value === null || value === "";

export const cleanObject = (object) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
```

## 判断一个对象是否为空值

```js
 1 :
     const isEmptyObj = (obj) => {
     if(Object.prototype.toString.call(obj) !== '[object Object]') return `target is not an object`;
     let res;
     for (let key in obj){
         res = false
     }
     res = true
     return res
 }

2 :
    const isEmptyObj = (obj) => {
         if(Object.prototype.toString.call(obj) !== '[object Object]') return `target is not an object`;
       if(  Json.stringfy(obj) === '{}') return true
       return false
    }

3 :
  cosnt isEmptyObj = (obj) => {
        Object.keys(obj).length > 0 ?( res = false) : (res = true)
  }
```
