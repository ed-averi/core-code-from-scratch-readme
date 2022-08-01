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

## Week challenges (Tuesday & Wednesday) 💻

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

## Week challenges (Thursday) 💻

1. Follow up with the [HTML](https://edpuzzle.com/join/vawasaj)
2. [Remove All Exclamation Marks From The End Of Sentence](https://www.codewars.com/kata/57faece99610ced690000165/train/javascript) exercise || [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
3. [Vowel Remover](./exercises/e10/desc) exercise || [Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) & [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
4. [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript) exercise
5. [Persistent Bugger](./exercises/e12/desc) exercise

<ol>

<li><strong>Remove All Exclamation Marks From The End Of Sentence</strong></li>

### Description

```xml
Description:
Remove all exclamation marks from the end of sentence. Examples:

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
```

### Solution: ✅

```javascript
function remove(string) {
  return string.replace(/!+$/, "");
}
```

<li><strong>Vowel Remover</strong></li>

### Description

```xml
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

```

### Solution: ✅

```javascript
function shortcut(string) {
  /* Just some comments on the thought process. 
  First I created a regular expression that will match all the vowels in a string. Then assign that regular expression to a variable called *vowels*
  
  */
  const vowels = /[aeiou]/g;

  /*
   Next I use a combination of regular expressions and the replace() method to scan all the characters in a string. If a character is a vowel, it gets removed. 
  */
  return string.replace(vowels, "");
}
```

OR

```javascript
/* A shorter version by removing the vowel variable declaration*/

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
```

<li><strong>Rock Paper Scissors!</strong></li>

### Description

```xml

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
```

### Solution: ✅

```javascript
const rps = (p1, p2) => {
  if (p1 === p2) {
    return `Draw!`;
  }

  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
```

OR

```javascript
function rps(p1, p2) {
  if (p1 === p2) {
    return `Draw!`;
  }
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (rules[p1] === p2) {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
}
```

FOUND THIS ONE INTERESTING

```javascript
const rps = (p1, p2) => {
  return p1 == p2
    ? "Draw!"
    : `Player ${
        /rock:scissors|scissors:paper|paper:rock/.test(p1 + ":" + p2) ? 1 : 2
      } won!`;
};
```

</ol>

## Extra

### Fake Binary

```javascript
function fakeBin(x) {
  gg = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") gg += "0";
    else if (x[i] >= "5") gg += "1";
  }
  return gg;
}
```

OR

```javascript
function fakeBin(x) {
  return x
    .split("")
    .map((y) => (y < 5 ? 0 : 1))
    .join("");
}
```

ANOTHER ONE

```javascript
function fakeBin(x) {
  return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
}
```
