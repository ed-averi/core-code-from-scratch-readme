<a align= "center"  href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# Typescript

# [Index](/README.md)

# Week 8

## Week goal 🏁

<p>Learn about abstract classes, generics and other Typescript types</p>

## Week subtopics

- Function types
- Input & Output with console
- Abstract classes
- Generics
- Composition

## Week challenges (Monday) 💻

1. Watch [Object-Oriented Programming - Resume](https://www.youtube.com/watch?v=pTB0EiLXUC8) video ✅

```py
"""
Four OOP principles:

Encapsulation:
       * Refers to bundling data with methods that can operate on that data within a class.
       * It’s the idea of hiding data within  a class, preventing anything outside that class directly interacting with it.
       * Keeps the programmer in control of access to data.
       * Prevents the programmer from ending up in any strange or unwanted states.

Abstraction:
       * Refers to the idea to only showing essential details and keeping everything else hidden.
       * The classes you create should act like your car. Users of your classes should not worry 
       about the inner details of those classes.
       * This is very important when working on your program incrementally.
       
Inheritance:
       * Is the principle that allows classes to derive from other classes.

Polymorphism:
       * Describes methods that are able to take on many forms.
       * Allows methods to take on many different forms.
       * Be sure that you are calling the correct form of the method.
       * There are two types of polymorphism: 
        	** Dynamic polymorphism: 
               	 	- Occurs during the runtime of the program.
          		- Describes when a method signature is in both subclass and a superclass.
        		- The methods share the same name but have different implementation.
             		- The implementation of the subclass that the object is an instance of 
                   	overrides that of the superclass.
              	** Static polymorphism:
              		-  Occurs during compile-time rather than during runtime.
              		-  Refers to when multiply methods with the same name but different arguments
              		   are defined in the same class.
              		-  The parameters are different type or taken in different order.
              		-  This is known as method overloading. 
```

***
## Week challenges (Tuesday) 💻

1. [Develop typed functions by using TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-develop-typed-functions/) guided exercise, using `Typescript`
2. Read [Abstract Classes](https://sbcode.net/typescript/abstract_classes/)
3. Watch [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74) video

## Week challenges (Wednesday) 💻

1. [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript) exercise, using `Typescript`
2. [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript) exercise, using `Typescript`
3. [Find The Odd Int]((https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript)) exercise, using `Typescript`
4. [Which Are In?](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript) exercise, using `Typescript`

<br>

<ol>

<li><strong><i>Make the Deadfish Swim</i></strong></>

```ts
//JS Solution
// Return the output array, and ignore all non-op characters

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

function parse( data )
{
  let result = 0;
  let output = [];
  
  data.split('').forEach((operation) => {
    //     i increments the value (initially 0)
    if (operation ===  'i'){
      result += 1;
    } 
    //     d decrements the value
    else if (operation === 'd') {
      result -= 1;
    }
    //     s squares the value
    else if (operation === 's'){
      result **=2;
    }
    //     o outputs the value into the return array
    else if(operation === 'o'){
      output.push(result);
    }
  });
  return output;
}

// Typescript solution
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let res:number[] = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;  //     i increments the value (initially 0)
    if (s === 'd') cur--; //     d decrements the value
    if (s === 's') cur = Math.pow(cur, 2); //     s squares the value
    if (s === 'o') res.push(cur); //     o outputs the value into the return array
     
    return cur;
  }, 0);
  
  return res;
}

```
<br>

<li><strong><i>Duplicate Encoder</i></strong></>

### Description

```sas

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

```
### Solution ✅

```ts

/**
 * 1. Convert the string to lowercase and convert it to an array of characters.
 * 2. Filter the array to get a list of duplicate characters.
 * 3. Convert the list of duplicate characters to a set to get a list of unique duplicate characters.
 * 4. Loop through the original array of characters and check if the current character is in the list
 * of unique duplicate characters. If it is, add a closing parenthesis to the result string. If it
 * isn't, add an opening parenthesis to the result string.
 * 5. Return the result string
 * @param word - the input string to test
 * @returns A string of ( and ) characters.
 */
export function duplicateEncode(word: string){

    let chars=[...word.toLowerCase()];
    let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
    let duplicateSet = new Set(duplicateList); 
    let uniqueDuplicateList = [...duplicateSet];
    //console.log(uniqueDuplicateList);
    let resultString = "";
    for (let i=0, n=chars.length; i < n; ++i ) {
      if(uniqueDuplicateList.includes(chars[i])) {
        resultString += ")";
      } else {
        resultString += "(";
      }
    }
    return resultString;  
  
}
```
<br>
<li><strong><i>Find the odd int</i></strong></>

### Description

```sas
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

```
### Javascript Solution ✅

```js
function findOdd(numbers) {
  var count = 0;
  for(var i = 0; i<numbers.length; i++){
    for(var j = 0; j<numbers.length; j++){
      if(numbers[i] == numbers[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return numbers[i];
    }
  }
};
```
<br>

### Typescript Solution ✅

```ts

/**
 * It takes an array of numbers and returns the number that appears an odd number of times
 * @param xs - an array of integers
 * @returns the value of the array that is not repeated.
 */
export const findOdd = (xs: number[]): number => {
    return xs.reduce(function(c,v){return c^v;},0);
    };

```
<li><strong><i>Which are in?</i></strong></>


### Description

```sas
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates.


```

### Solution ✅

```ts
export function inArray(a1: string[], a2: string[]): string[] {
   return [... new Set(a1)].filter((sub)=>{
    let result= a2.find((str)=> str.includes(sub));
    return result !== undefined;
 }).sort();
}
```

</ol>

## Week challenges (Thursday) 💻

1. [Define generics in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/) guided exercise, using `Typescript`
2. [Generics](https://github.com/corecodeio/devguide-fundamentals-2022-03/tree/main/src/technologies/2022/week08/exercises/e00/desc) exercise, using `Typescript`
3. ✨ 5th Core Challenge, update your resume [here](https://corecode.notion.site/CV-or-Resume-Boost-9092fff9f9cf4944a7c1717b11b09223)
