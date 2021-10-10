/**
 不同JS内置对象的深拷贝方法
 */
const testType = (obj) => {
  return Object.prototype.toString.call(obj);
};
const isFunction = (target) => {
  return target.constructor === "Function";
};
/** 正则 或者日期对象 */
let target = {
  name: "super_show",
  hobby: "playing tennies",
  time: new Date(),
  reg: /0-9a-z/,
};
let type = testType(target);
let constructor = target.constructor;
if (/^(regexp|data)$/i.test(type)) return new constructor(target);
if (/^(error)$/i.test(type)) return new constructor(target.message);
if (isFunction(target))
  return function (...args) {
    return target.call(this, ...args);
  };
/** 在深拷贝的过程中，如果对象的层级嵌套过深，或者循环引用 容易出现死循环 例如 object.object=object
 * 这时候 需要传入一个容器 将已经处理完成的 都深度嵌套的对象 保存起来 每次递归处理前 需要看看 这个对象是否已经被处理过了。
 *
 *
 *
 *
 */

/**
 *  深拷贝和深克隆一样吗？？
 * 深拷贝 更改一个对象不影响另外一个对象
 * 深克隆 ： 只将一个对象的第一级属性复制过来 并且更改新对象的属性值不影响原来对象的的属性值？？
 *
 *
 *
 */
// 关于json.stringify 深拷贝的缺点
/* 
1 bigint类型的值是无法装换的
2 如果属性值是 undefined symbol function等类型 会丢失这些属性值对应的属性，当属性名为symbol的时候 会消失这个属性
3： error regexp这些类型的 属性值对应的属性会变为空对象
4 对于属性值类型是 data类型的 会将属性值变为字符串 即使再次变为对象 属性值还是字符串


*/
const clone = (target, deep = false, cache = []) => {
  if (target == null) return target; // target = null || target = undefined
  let type = Object.prototype.toString.call(target);
  let isArray = Array.isArray(target);
  let isObject = type === "[object Object]";
  if (!Array.isArray(cache)) {
    cache = [];
  }
  if (cache.includes(target)) return target;
  cache.push(target);
  if (!isArray && !isObject) return target;
  let ctor = target.constructor;
  if (type === "[object RegExp]" || type === "[object Date]")
    return new ctor(target);
  if (type === "[object Function]")
    return function (...args) {
      return target.call(this, args);
    };
  if (type === "[object Error]") return new ctor(target.message);
  let result;
  if (type === "[object Object]") {
    result = {};
    for (key in target) {
      if (target.hasOwnProperty(key)) {
        if (deep) {
          let symbolKey = Object.getOwnPropertySymbols(key);
          if (symbolKey) {
            result[symbolKey] = target[symbolKey];
          }
          result[key] = clone(target[key], deep, cache);
        } else {
          result[key] = target[key];
        }
      }
    }
    return result;
  }
  if (type === "[object Array]") {
    result = [];
    target.forEach((item, index) => {
      if (!deep) {
        result[index] = item;
      }
      result[index] = clone(item, deep, cache);
    });
    return result;
  }
};
