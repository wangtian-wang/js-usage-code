let a = () => {
  console.log("function a");
};
const _a = a;
a = () => {
  _a();
  alert();
};
