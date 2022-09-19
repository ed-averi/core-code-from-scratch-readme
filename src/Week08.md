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

<li><strong><i>Make the Deadfish Swim]</i></strong></>

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
  let res:any = [];

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

</ol>

## Week challenges (Thursday) 💻

1. [Define generics in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/) guided exercise, using `Typescript`
2. [Generics](https://github.com/corecodeio/devguide-fundamentals-2022-03/tree/main/src/technologies/2022/week08/exercises/e00/desc) exercise, using `Typescript`
3. ✨ 5th Core Challenge, update your resume [here](https://corecode.notion.site/CV-or-Resume-Boost-9092fff9f9cf4944a7c1717b11b09223)
