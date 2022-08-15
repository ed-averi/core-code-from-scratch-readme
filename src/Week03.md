<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# Javascript

# [Index](/README.md)

# Week 3

## Week goal 🏁

<p>Learn about Javascript behaviour</p>

## Week subtopics

- scopes
- var, let, const
- Operators
  - TypeOf
- Data structure
  - Array
  - List
  - Stack
- Object
- DOM API

## Week challenges (Monday) 💻

1. [Who Likes It?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript) exercise
2. [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript) exercise
3. [Your Order, Please]() exercise

<ol>

<li><strong>Who Likes It?</strong></li>

### Description

```xml
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
```

### Solution: ✅

```python

#Python

def likes(names):
    if len(names)==0:return 'no one likes this'
    elif len(names)==1:return names[0] +' likes this'
    elif len(names)==2:return names[0] +' and ' + names[1] + ' like this'
    elif len(names)==3:return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    else: return names[0] + ', ' + names[1] + ' and ' + str(len(names)-2) + ' others like this'

```

```javascript
//Javascript

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let diff = names.length - 2;
    return `${names[0]}, ${names[1]} and ${diff} others like this`;
  }
}

//#2

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + " likes this";
  } else if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this"
    );
  }
}
```

<li><strong>Bit Counting</strong></li>

### Description

```xml
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

```

### Solution: ✅

```python
#Python

def count_bits(n):
    return  bin(n).count("1")

```

```javascript
//Javascript
var countBits = function (decimal) {
  let binnum = decimal.toString(2);
  let count = 0;
  for (i = 0; i < binnum.length; i++) {
    if (binnum[i] === "1") count++;
  }
  return count;
};

//#2

var countBits = function (n) {
  return n.toString(2).replace(/0/g, "").length;
};
```

<li><strong>Your Order, Please</strong></li>

### Description

```xml
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""


```

### Solution: ✅

```javascript
function order(words) {
  if (!words) {
    return words;
  }

  //"is2 Thi1s T4est 3a"  >>  "Thi1s is2 3a T4est"
  var arr = words.split(" ");

  // obj = {1: "thi1s", 2: "is2"}
  var obj = {};
  for (var el of arr) {
    var number = getNumber(el);
    obj[number] = el;
  }
  //> "Th1s is2"
  return Object.values(obj).join(" ");
}

//Extract the numbers from array.
function getNumber(str) {
  return str.match(/\d+/)[0];
  //Expected result 1,2,3,4 <Numbers
}
```

</ol>

## Week challenges (Tuesday) 💻

1. [Simple Pig Latin](.https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript) exercise
2. [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript) exercise
3. [Decode The Morse Code](https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript) exercise

<ol>

<li><strong>Simple Pig Latin</strong></li>

### Solution: ✅

```javascript
function pigIt(str) {
  //Split string into words and then split it into letters
  let newArr = [],
    strArr = str.split(" ");

  strArr.forEach((x) => {
    //split it now to individual letters
    let wordArr = x.split("");
    //console.log(wordArr)
    /*
    [ 'P', 'i', 'g' ]
    [ 'l', 'a', 't', 'i', 'n' ]
    [ 'i', 's' ]
    [ 'c', 'o', 'o', 'l' ]
    [ 'T', 'h', 'i', 's' ]
    [ 'i', 's' ]
    [ 'm', 'y' ]
    [ 's', 't', 'r', 'i', 'n', 'g' ]
    */
    wordArr.push(wordArr[0], "ay"), wordArr.shift();
    //question mark, exclamation mark and dot will be left untouched.
    if (x === "!" || x === "?" || x === ".") {
      newArr.push(x);
    } else {
      newArr.push(wordArr.join(""));
    }
  });
  return newArr.join(" ");
}
```

<li><strong>Counting Duplicates</strong></li>

### Solution: ✅

```javascript
function duplicateCount(text) {
  //return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;

  // Ii (case sensitive, son diferentes)
  // Ii (case insensitive, son igual)
  let duplicates = 0;
  text = text.toLowerCase(); // todo minuscula
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      duplicates++;
      text = text.replace(new RegExp(`${text[i]}`, "g"), "");
      i = i - 1;
    }
  }
  return duplicates;
}
```

<li><strong>Decode The Morse Code</strong></li>

</ol>

## Week challenges (Wednesday) 💻

1. [Valid Parentheses](./exercises/e06/desc) exercise
2. [Convert String To Camel Case](./exercises/e07/desc) exercise
3. [Unique In Order](./exercises/e08/desc) exercise

## Week challenges (Thursday) 💻

1. [Fold An Array](./exercises/e09/desc) exercise
2. [Encrypt This!](./exercises/e10/desc) exercise
3. ✨Complete your 1st [**Core Challenge**](https://corecode.notion.site/Mission-Statement-666f515d76084c8e8c996b473b4d6317). This is one of the requirements for the certification, where you'll boost your dev professional-brand.
