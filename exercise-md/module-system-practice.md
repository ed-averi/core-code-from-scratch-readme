# Node.JS Module System - Practice

## Description

Time to put into practice what you learned about Node.JS modules 😁.

1. Create a new Node.JS project, name it: `<your-nickname>/modules`
2. Create a new module, name it: `operations.js`
3. Inside `operations.js` implement two functions, one for the sum operation
   and one for the subtract operation.
4. Create a new module, name it: `main.js`
5. Import the functions implemented in `operations.js` and use them in any
   way in `main.js`.

## Solution

```js
//operations.js

module.exports = {
  sum: function(a, b) {
    return a + b
  },
  subs: function(a, b) {
    return a - b
  }
};

//main.js
const ops = require("./operations.js");
const value = ops.sum(1, 3);

console.log("Sum: " + value);
// console.log("Substraction: " + value)


```