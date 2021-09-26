/** 
  好处 ： 函数的职责单一 动静分离
  技术点： 闭包 立即执行函数
  场景： 用户点击 button 弹出对话框
 */
let createElement = (tag) => {
  let elem = document.createElement(tag);
  elem.style.display = "none";
  elem.innerHTML = "WELCOME MY HONEY";
  document.body.append(elem);
  return elem;
};
let initFn = function (fn) {
  let element = null;
  return () => {
    if (!element) {
      element = fn();
    }
    return element;
  };
};
let getSingle = initFn(createElement.bind(null, "div"));
