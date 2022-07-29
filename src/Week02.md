<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# Javascript

# [Index](/README.md)

# Week 2

## Week goal 🏁

<p>Learn about Javascript structure</p>

## Week subtopics

- Data types in Javascript
  - number
    - operators (+,-,/,\*)
  - boolean
    - operators (!, &&, ||)
  - string
    - properties (length, charAt, [])
  - null
  - undefined
- comments in Javascript
  - line comment
  - block comment
- Console
- Loops
  - While
  - For
- Conditionals
  - Ternary operator
- Functions
- Difference between arguments and parameters
- Default parameters
- Arguments array

## Week challenges (Monday) 💻

1. Follow the github course, you can find it [here](https://www.udacity.com/course/version-control-with-git--ud123)
2. Create an account in Codewars, follow [this instructions](./_create_account_codewars/) ✅
3. Read about: [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) ✅
4. Read about: [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) ✅
5. Read about: [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) ✅
6. Read about: [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) ✅

## Week challenges (Tuesday) 💻

1. [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript)
2. [ASCII Total](https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript)
3. [Char From ASCII Value](https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/javascript) | [String.fromCharCode()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
4. [Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript)
5. [Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript) | [Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Solution: ✅

<ol>
  <li>Multiply</li>

```javascript
function multiply(a, b) {
  return a * b;
}
```

  <li>ASCII Total</li>
 
 ### C#
 ```c#
using System.Linq;

public class Kata {
public static int UniTotal(string str)
=> str.Sum(x=>(int)x);
}

````
### Javascript
```javascript
function uniTotal (str){
  return str.split("").reduce((a,c)=> a+=c.charCodeAt(),0)
}
````

### Javascript 2

```javascript
function uniTotal(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count += str.charCodeAt(i);
  }
  return count;
}
```

  <li>Char From ASCII Value</li>

```javascript
function getChar(c) {
  return String.fromCharCode(c);
}
```

<li>Binary addition</li>

```javascript
function addBinary(a, b) {
  return (a + b).toString(2);
}
```

<li>Student's Final Grade</li>

```javascript
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;

  if ((exam > 75) & (projects >= 5)) return 90;

  if ((exam > 50) & (projects >= 2)) return 75;

  return 0;
}
```

</ol>
