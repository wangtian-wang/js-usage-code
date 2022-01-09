const addEvent = function (dom, type, fn) {
  if (dom.addEventListener) {
    addEvent = function (dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    addEvent = function (dom, type, fn) {
      dom.attachEvent(type, fn, false);
    };
  } else {
    addEvent = function (dom, type, fn) {
      dom["on" + type] = fn;
    };
  }
  addEvent(dom, type, fn);
};
const addEvents = (function (dom, type, fn) {
  if (dom.addEventListener) {
    return function (dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    return function (dom, type, fn) {
      dom.attachEvent(type, fn, false);
    };
  } else {
    return function (dom, type, fn) {
      dom["on" + type] = fn;
    };
  }
})();
