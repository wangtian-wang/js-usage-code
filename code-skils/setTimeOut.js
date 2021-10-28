/**
 * 实现一个进度条
 * @param {一个dom元素} elem
 */
function process(elem) {
  let i = 0;
  (function run() {
    elem.innerHTML = i;
    elem.style.width = i + "%";
    if (++i <= 100) {
      setTimeout(run, 20);
    }
  })();
}
process(document.querySelector("#process-btn"));

/**
 * 使用异步的方式处理运算量较大的操作 不会阻塞主线程
 *
 * @param {一个较大的数字} num
 */
function sum(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let count = 0;
      for (let i = 0; i < num; i++) {
        count += num--;
      }
      resolve(count);
    });
  });
}
sum(1000000);
console.log("我的执行不受阻塞");

async function sum1(num) {
  let res = await Promise.resolve().then((res) => {
    let count = 0;
    for (let i = 0; i < num; i++) {
      count += num;
    }
    return count;
  });
}
sum1(9999999);
console.log(" exec before exec");
