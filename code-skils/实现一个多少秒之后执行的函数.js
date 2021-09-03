/** 还有一种写法来着 微信收藏 */
const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
const sleep = delay => {
     const start = new Date().getTime()
     let  counter = 0
     while (new Date().getTime() < start + delay) {
         counter++;
         continue
     }
     console.log(counter);
    }
    // sleep(3000)
     
 const getRate = ( rate = 0) => {
     return '*****'.slice(5-rate,10-rate);
 }

const list = len => [...new Array(len).keys()]
