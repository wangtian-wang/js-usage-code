// 代理模式分为 虚拟代理 缓存代理
// 虚拟代理  实例为点击checkbox 上传图片
const uploadFn = function (id) {};
const proxyUpLoadFn = (function () {
  let cache = [];
  let timer = null;
  return function (id) {
    cache.push(id);
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      uploadFn();
      clearTimeout(timer);
      timer = null;
      cache.length = 0;
    }, 2000);
  };
})();

const checkbox = document.getElementById("checkbox");
for (let i = 0, c; (c = checkbox[i++]); ) {
  c.onclick = function () {
    if (this.checked === true) {
      proxyUpLoadFn(this.id);
    }
  };
}

// 缓存代理
const muti = () => {};
const proxyMuti = (function () {
  var cache = {};
  return function () {
    const args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = muti.apply(this, arguments));
  };
})();

// es6 实现的代理缓存
// 兔子数列的缓存
const getFib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return getFib(n - 1) + getFib(n - 2);
};

const getFibProxy = (fn, cache = new Map()) => {
  return new Proxy(fn, {
    apply(target, context, args) {
      const argsStr = args.join("");
      if (cache.has(argsStr)) {
        return cache.get(argsStr);
      }
      const res = fn(...args);
      cache.set(argsStr, res);
      return res;
    },
  });
};
