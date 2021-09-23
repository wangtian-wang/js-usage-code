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
