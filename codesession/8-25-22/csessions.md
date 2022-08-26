npx tsc --init

```javascript
function sum(a, b) {
  return a + b;
}

let module = { exports: {} };

function sum(a, b) {
  return a + b;
}

module.exports = { mysum: sum };

console.log(module);
console.log(module.exports.mysum(1, 2));
```
