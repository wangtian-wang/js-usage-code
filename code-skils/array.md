```js
function ArrayDiff(a, b) {
  const setX = new Set(a);
  const setY = new Set(b);
  return Array.from(
    new Set([
      ...a.filter((x) => !setY.has(x)),
      ...b.filter((x) => !setX.has(x)),
    ])
  );
}

const NumberToArray = (number) => [...`${number}`].map((i) => parseInt(i));

深度扁平化阵列;
function DeepFlat(array) {
  return [].concat(
    ...array.map((value) => (Array.isArray(value) ? DeepFlat(value) : value))
  );
}
```
