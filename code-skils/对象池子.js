const cacheFactory = (function () {
  const cache = [];
  return {
    create() {
      if (!cache.length) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        return div;
      } else {
        return cache.pop();
      }
    },
    recover(dom) {
      return cache.push(dom);
    },
  };
})();

/**
 *对象池子 设计要点
 初始化对象池
 分配对象
 回收对象
 */
