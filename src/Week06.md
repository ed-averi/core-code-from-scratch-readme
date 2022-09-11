<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# Typescript

# [Index](/README.md)

# Week 6

## Week goal 🏁

<p>Learn about classes, instances, inheritance and data type with Typescript</p>

## Week subtopics

- Introduction to Object Oriented Programming
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation
- Concept of class
  - Attributes
  - Methods
  - Constructor
- Classes with Typescript
- Concept of instance

---

## Week challenges (Monday) 💻

| Link                                                                                                                         | Solution                                               | Solution 2 | Solution 3 |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------- | ---------- |
| 1. [Declare variable types in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/) | ✅                                                     |
| 2. [TypeScript Object Type](https://typescript-exercises.github.io/#exercise=1)                                              | [Typescript](../solutions/week06/ts/objectexercise.ts) |            |            |
| 3. [TypeScript Unions](https://typescript-exercises.github.io/#exercise=2)                                                   | [Typescript](../solutions/week06/ts/ts%20unions.ts)    |

---

## Week challenges (Tuesday) 💻

1. [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript) exercise, using `Typescript` <strong><i>Mantadory</i></strong>
2. [Growth Of A Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript) exercise, using `Typescript` <strong><i>Optional</i></strong>
3. [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript) exercise, using `Typescript` <strong><i>Optional</i></strong>
4. [A Wolf In Sheep's Clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript) exercise, using `Typescript` <strong><i>Mantadory</i></strong>

<ol>

<li><strong><u>Square(n) Sum</u></strong></li>
<li><strong><u>Growth Of A Population</u></strong></li>

### Description

```xml

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

```

### Solution: ✅

<!-- <details>

<summary>Typescript</summary>
<p>[Click here](../solutions/week06/ts/growthofapopulation.ts)</p>
</details> -->

|                             #1                              |                     #2                     |                        #3                        |
| :---------------------------------------------------------: | :----------------------------------------: | :----------------------------------------------: |
| [Typescript](../solutions/week06/ts/growthofapopulation.ts) | [Python](../solutions/week06/py/sample.py) | [Javascript](../solutions/week06/js/growthap.js) |

<br>

<li>Mumbling</li>
<li><strong><u>A Wolf In Sheep's Clothing</u></strong></li>

### Description

```xml
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

```

### Solution: ✅

|                         #1                          |     #2     |                         #3                          |
| :-------------------------------------------------: | :--------: | :-------------------------------------------------: |
| [Typescript](../solutions/week06/ts/wolfinsheep.ts) | [Python]() | [Javascript](../solutions/week06/js/wolfinsheep.js) |

</ol>

---

## Week challenges (Wednesday) 💻

1. [A Rule Of Divisibility By 13](https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript) exercise, using `Typescript` <strong><i>Mandatory</i></strong>
2. [Playing With Digits](https://www.codewars.com/kata/5552101f47fc5178b1000050/train/typescript) exercise, using `Typescript` <strong><i>Mandatory</i></strong>
3. [Valid Braces](./exercises/e06/desc) exercise, using `Typescript` <strong><i>Optional</i></strong>
4. [Tic-Tac-Toe](./exercises/e07/desc) exercise, using `Javascript` <strong><i>Optional</i></strong>
5. [Tic-Tac-Toe-Like Table Generator](./exercises/e08/desc) exercise, using `Javascript` <strong><i>Optional</i></strong>

<br>

<ol>

<li><strong><i>A Rule Of Divisibility By 13</i></strong></li>

<details>

<summary><strong> Description</strong></summary>

```xml
From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)

(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)

Then the whole pattern repeats. Hence the following method:

Multiply

    the right most digit of the number with the left most number in the sequence shown above,
    the second right most digit with the second left most digit of the number in the sequence.

The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.
Example:

What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)

Therefore following the method we get:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).
Task:

Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

thirt(1234567) calculates 178, then 87, then 87 and returns 87.

thirt(321) calculates 48, 48 and returns 48

```

</details>

<br>

### Solution: ✅

| #1                                                           | #2                                                       | #3  |
| ------------------------------------------------------------ | -------------------------------------------------------- | --- |
| [Typescript](../solutions/week06/ts/divisiliby%20by%2013.ts) | [Javascript](../solutions/week06/js/divisibilityby13.js) |     |

<br>

<li><strong><i>Playing With Digits</i></strong></li>

<details>

<summary>Description</summary>

```xml
Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ =

```

</details>

<br>

### Solution: ✅

| #1                                                        | #2                                                        | #3  |
| --------------------------------------------------------- | --------------------------------------------------------- | --- |
| [Javascript](../solutions/week06/js/playingwithdigits.js) | [Typescript](../solutions/week06/ts/playingwithdigits.ts) |     |

<br>

</ol>

---

## Week challenges (Thursday) 💻

1. [Declare and instantiate classes in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-instantiate-classes/) guided exercise, using `Typescript`
2. [Tile](https://github.com/corecodeio/devguide-fundamentals-2022-03/tree/main/src/technologies/2022/week06/exercises/e09/desc) exercise, using `Typescript`
3. [Time](https://github.com/corecodeio/devguide-fundamentals-2022-03/tree/main/src/technologies/2022/week06/exercises/e10/desc) exercise, using `Typescript`
4. [Rational](https://github.com/corecodeio/devguide-fundamentals-2022-03/tree/main/src/technologies/2022/week06/exercises/e11/desc) exercise, using `Typescript`

<ol>

<li><strong><i>Tile</i></strong></li>

### Solution: ✅

```ts
//import Tile from './Tile';
export default class Tile {
  letter: string;
  value: number | string;

  constructor(letter: string, value: number | string) {
    this.letter = letter;
    this.value = value;
  }

  printTile() {
    const A = new Tile("A", 10);
    A.printTile(); // Example of a reader-friendly format above
    console.log(`
      ==================
        Letter: ${this.letter}
        Value:  ${this.value}
      ==================
    `);
    const W = new Tile("W", "50"); // This should show and error
  }
}
```

<li><strong><i>Time</i></strong></li>

### Description

You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

1. Write a definition for the class name `Time` this class would be use to build a digital clock. This class should have 3 attributes of type number. `hour`, `minute` and `second`.
2. Write a constructor that takes parameters named `hour`, `minute` and `second` and initializes the instance variables.
3. Write a method called `getInSeconds` that returns a number representing the actual time in the instance represented in seconds.
4. Write a method named `printTime` that prints the instance variables in a `reader-friendly` format (not the { ... } format way).

```typescript
import Time from "./Time";
export default class Main {
  start() {
    const t = new Time(10, 45, 1);
    t.printTime(); // Example of a reader-friendly format above
    /*
      ==================
        Hours: 10
        Minutes: 45
        Seconds: 1
      ==================
    */
    console.log(t.getInSeconds()); // 38701
  }
}
```

5. On your `index.ts` you can now use this to test your solution

```typescript
import Main from "./Main";
const main = new Main();
main.start();
```

### Solution: ✅

```ts
//import Time from './Time';
export default class Time {
  hour:number;
  minute:number;
  second:number;

constructor(hour:number, minute: number, second: number){
    this.hour=hour;
    this.minute=minute;
    this.second= second;

}

  printTime () {
    //const t = new Time(10, 45, 1);
    console.log(`
          =========================
            Hours: ${this.hour}
            Minutes: ${this.minute}
            Seconds: ${this.second}
          =========================
    `);
    }
    getInSeconds(): number{
    const minutes= this.hour * 60 + this minute;
    return minutes * 60 + this.second;
    console.log(getInSeconds()); // 38701
  }
}
```

<li><strong><i>Rational</i></strong></li>

<br>

### <i>Description:</i>

A rational number is a number that can be represented as the ratio of two integers. For example, 2/3 is a rational number, and you can think of 7 as a rational number with an implicit 1 in the denominator (7/1). For this assignment, you are going to write a class definition for rational numbers.

1. Create a new class named Rational. A Rational object should have two number instance variables to store the `numerator` and `denominator`.
2. Write a constructor for your class that takes two arguments and that uses them to initalize the instance variables.
3. Write a method called printRational that prints the object in some reasonable format.
4. Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
5. Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a [pure function](https://betterprogramming.pub/what-is-a-pure-function-3b4af9352f6f) it does not modify the object.
6. Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for `Euclidian Algorithm: GCD`.

```ts
import Rational from "./Rational";
export default class Main {
  start() {
    const r1 = new Rational(36, 120);
    r1.printRational(); // 36 / 120
    console.log(r1.toFloat()); // 0.3
    r1.reduce();
    r1.printRational(); // 3 / 10
    r1.invert();
    r1.printRational(); // 10 / 3
    r1.reduce();
    r1.printRational(); // 10 / 3
  }
}
```

7. On your `index.ts` you can now use this to test your solution

```typescript
import Main from "./Main";
const main = new Main();
main.start();
```

<br>

## Solution: ✅

```ts

```

</ol>
