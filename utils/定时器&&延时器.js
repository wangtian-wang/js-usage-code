export function deBounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      return fn.apply(this, args);
    }, delay);
  };
}
export function throttle(fn, delay) {
  let open = true;
  let timer = null;
  return (...args) => {
    if (!open) {
      return;
    }
    open = false;
    timer = setTimeout(() => {
      return fn.apply(this, args);
      open = true;
      clearTimeout(timer);
    }, delay);
  };
}

// 使用settimeout 实现 setinterval;
// setTimeout 当规定的时间条件满足后 会直接加入到任务队列里面 而 setInterval 会检查当前队列里面是否有已经开启的Interval，如果有则忽略
export const _Interval = (fn, delay) => {
  let timer = null;
  function myInterval() {
    timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
      myInterval();
    }, delay);
  }
  myInterval();
};
