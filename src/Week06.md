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

1. [A Rule Of Divisibility By 13](./exercises/e04/desc) exercise, using `Typescript`
2. [Playing With Digits](./exercises/e05/desc) exercise, using `Typescript`
3. [Valid Braces](./exercises/e06/desc) exercise, using `Typescript`
4. [Tic-Tac-Toe](./exercises/e07/desc) exercise, using `Javascript`
5. [Tic-Tac-Toe-Like Table Generator](./exercises/e08/desc) exercise, using `Javascript`

---

## Week challenges (Thursday) 💻

1. [Declare and instantiate classes in TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-declare-instantiate-classes/) guided exercise, using `Typescript`
2. [Tile](./exercises/e09/desc) exercise, using `Typescript`
3. [Time](./exercises/e10/desc) exercise, using `Typescript`
4. [Rational](./exercises/e11/desc) exercise, using `Typescript`
