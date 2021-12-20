/**
 高阶函数的使用
 
 
 
 
 */

var ops = {
  plus: (x, y) => x + y,
  mul: (x, y) => x * y,
  and: (x, y) => x & y,
};

function operation(op, array) {
  return array.slice(1).reduce(ops[op], array[0]);
}
const array = [1, 2, 3, 4, 5];

operation("plus", array);
operation("mul", array);
operation("and", array);
