/*  责任链模式 适用于哪些场景 有啥好处 有啥缺点    */
/*  责任链模式 的设计步骤

1： 定义不同的责任处理对象
2： 定义一个能将不同责任对象串联起来的类


*/
/*  责任链模式 的实现  */

/* 第一步定义不同的责任对象  */
function printOne(type) {
  if (type === 1) {
    console.log("one" + type);
  } else return "nextExec";
}
function printTwo(type) {
  if (type === 2) {
    console.log("two" + type);
  } else return "nextExec";
}
function printThree(type) {
  if (type === 3) {
    console.log("three" + type);
  } else return "nextExec";
}

/* 责任链串联对象  */
function Chain(fn) {
  this.fn = fn;
  this.exector = null;
}
Chain.prototype.setNextExector = function (exector) {
  this.exector = exector;
};
Chain.prototype.passToNextFn = function () {
  let ret = this.fn.apply(this, arguments);
  if (ret === "nextExec") {
    if (this.exector) {
      return this.exector.passToNextFn.apply(this.exector, arguments);
    }
  } else {
    return ret;
  }
};
/* 实例化责任对象  */
const one = new Chain(printOne);
const two = new Chain(printTwo);
const three = new Chain(printThree);

/* 串联责任对象   必须将所有实例化的责任对象都串联起来*/
one.setNextExector(two);
two.setNextExector(three);

/* 执行        必须从第一个责任对象开始执行        */
/* 参数        一个参数一直向下传递，在参数的条件满足的时候执行对应的函数        */
one.passToNextFn(1);
