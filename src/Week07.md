<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# Typescript

# [Index](/README.md)

# Week 7

## Week goal 🏁

<p>Learn about interfaces, data modifiers and function types, along with how to interact with the console using Typescript</p>

## Week subtopics

- Instances with Typescript
- Typescript types
  - number
  - string
  - boolean
  - object
- What is a data type?
- Inferred & Declared types
- Use of Inheritance with typescript
- Data Modifiers
  - public
  - private
  - protected
- Interfaces

***
## Week challenges (Monday) 💻

2. Watch [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8) ✅
3. [Readme - OOP](https://github.com/corecodeio/devguide-fundamentals-2022-03/tree/main/src/technologies/2022/week07/exercises/e01/desc) exercise

<ol>

<li><strong><i>Readme - OOP</i></strong></li>

## Description

In your Readme or in a `md` file, you are going to create a OOP glossary, for this you are requested to first create a space of key-words, this would be the list for the key-words:

1. Abstraction
2. Inheritance
3. Polymorphism
4. Encapsulation
5. Class
6. Object
7. Instance
8. Interface
9. Access Modifiers
10. Constructors

After that you would have a section called `Example`, here you would create a guide showing an example on how to use OOP in typescript, for now your example should show the use of classes, objects, encapsulation, access modifiers, instances and interfaces. Feel free to create a new guide or you can copy a guide from the web. The idea is to practice the [Rubber duck technique](https://www.linkedin.com/pulse/talk-duck-christina-cece-geijer) so this `Example` section should be written in your own words.

You can take inspirations on how to create a guide:

1. [Here](https://serokell.io/blog/why-typescript)
2. [Here](https://ultimatecourses.com/blog/typescript-interfaces-vs-types)
3. [Here](https://blog.learncodeonline.in/introduction-to-typescript)
4. Search in Google!

## Tip

If you want to record your terminal and then upload a gif of the recording, we recommend you [this](https://www.screentogif.com/) tool or [this](https://github.com/phw/peek) if you have a linux distro.

## Solution: ✅ 

<ul>
<li>Abstraction:</li> <p><i>In simple terms, it “displays” only the relevant attributes of objects and “hides” the unnecessary details.</i></p>
<li>Inheritance</li><p><i>Is the ability of a program to create new classes from an existing class, or in other words, code reusability.</i></p>
<li>Polymorphism</li><p><i>Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations.</i></p>
<li>Encapsulation</li><p><i>It enables you to perform what's called “data hiding”. It's necessary to hide certain data so that it's not changed accidentally or purposefully by other components or code in the program.</i></p>
<li>Class</li><p><i>Is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods). The user-defined objects are created using the class keyword. Or to put it simple, <strong style="text-transform:uppercase"><u>a set of instructions</u></strong>.</i></p>
<li>Object</li><p><i>Is the type of all non-primitive values (primitive values are undefined , null , booleans, numbers, bigints, strings). With this type, we can't access any properties of a value. In other words, it contains the properties or characteristics</i></p>
<li>Instance</li><p><i> Is one occurrence of a class or object. For example, a program may have a class/object named Animal, but there could be many instances of Animal, such as lion, cat, and dog</i></p>
<li>Interface</li><p><i>It is a concept of abstraction and encapsulation. For a given "box", it declares the "inputs" and "outputs" of that box. </i></p>
<li>Access Modifiers</li><p><i>It changes the visibility of the properties and methods of a class.</i></p>
<li>Constructors</li><p><i>A method that is called when we create an instance of a class.</i></p>
</ul>

## Example

- Class  
```ts
class Employee {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

// create Employee class object
let employee = new Employee(100, 'Ramesh', 'Fadatare');
console.log(employee);
console.log(employee.getFullName());
```
- Objects
```ts
class Employee{
    id: number;
    firstName: string;
    lastName: string;
}

// create Employee class object
let employee = new Employee();

employee.id = 100;
employee.firstName = 'Ramesh';
employee.lastName = 'Fadatare';

console.log(employee);
```
- Encapsulation

```ts
export class User {
    private _password: string; 

    constructor(_password: string) {
        this._password = _password;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    givePass(): string {
        return `I don't want to do that outside of this class`;
    }

}

let gerson : User = new User('Gerson');
console.log(gerson._password)

//log Error Property '_password' is private and only accessible within class 'User'.
```
- Access Modifiers
```ts
//Access Modifiers in Typescript
/*
Public => by default all members(properties/fields and methods/functions) of classes are Public - accesible internatlly and externally from outside of the class.
Private => Private members can not be accesible from outside of the calss. It can be accessible only internally within the class. 
Protected=> Protected members are accesible only internally within the calss or any class that extends it but not externally.  
*/

class Point{
  private a: number; // 'a' is private member of class
  : number; // 'b' is public member of class

  constructor (a?: number, b?: number) {
  this.a = a;
  this.b = b;
}

// this method is private member of class
  private drawNewLine = () => {
  / all the logics to draw a line comes here
  using ' this' operator
  console. log('a: ' + this.a + ', b: ' + this.b);
};
}

// create a point object
let point = new Point(1, 2); // passing value of param 'a' and 'b'
point. a = 3; //
is private and not accessible from outside of the class
point. b = 4;
s can be accessd - we can change val
se 16' is pub
point. drawNewLine(); // >method 'drawNewLine' is private and only accessible within class 'Point"

```

- Interfaces

```ts
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);
//The example defines an interface. The customer object is of the type IPerson. Hence, it will now be binding on the object to define all properties as specified by the interface.

```
- Instances
```ts
class Person {
  firstName:string;
  lastName:string;
 
  constructor(fName:string, lName:string) {
    this.firstName=fName;
    this.lastName=lName;
  }
} 
```

</ol>


***
## Week challenges (Tuesday) 💻

1. [Input/Output](./exercises/e00/desc) playground, using `Typescript`


<img src="https://raw.githubusercontent.com/ed-averi/core-code-from-scratch-readme/main/assets/wshell.jpg">

<!--
1. [Movies](./exercises/e03/desc) exercise, using `Typescript`
-->

## Week challenges (Wednesday) 💻

1. [Build Tower]([./exercises/e04/desc](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript)) exercise, using `Typescript`
2. [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript)) exercise, using `Typescript`

<ol>

<li><strong><i>Build Tower</i></strong></li>

### Description

```xml
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

```

### Solution: ✅

```ts
 export const towerBuilder = (nFloors: number): string[] => {
  let space,star, tower = [];
  for(let i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

```


<li><strong><i>Meeting</i></strong></li>

### Description

```xml
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

    makes this string uppercase
    gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
Notes

    You can see another examples in the "Sample tests".



```

### Solution

```ts
export function meeting(s: string) {
  return s.toUpperCase()
          .split(';')
          .map(name => name.split(':').reverse())
          .sort()
          .reduce((acc, name)=>{
          return acc += `(${name[0]}, ${name[1]})`
          }, "")
  }


//JS

function meeting(s) {
    // your code
    let upCase=s.toUpperCase();
  upCase = upCase.split(';')
  for(let i= 0; i<upCase.length; i++){
      upCase[i] = upCase[i].split(":").reverse();
  }
  
  return upCase.sort().reduce((acc, name)=>{
    return acc += `(${name[0]}, ${name[1]})`
  }, "");
}
```

</ol>

## Week challenges (Thursday) 💻

1. [Interfaces](https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/) guided exercise, using `Typescript`

```ts
interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string; 
}

let myIceCream: IceCream ={
  flavor : 'Gummy', scoops :  2
}

//console.log(myIceCream.flavor)

function tooManyScoops (dessert : IceCream){
if (dessert.scoops > 5) return dessert.scoops + " is too many Scoops"; else 'Your order will be ready'
}
//console.log(tooManyScoops({flavor: 'Gummy', scoops: 6}))

interface Sundae extends IceCream {
  sauce: "Chocolate"|"Caramel"|"Strawberry";
  nuts?: boolean;
  whipopedCream?: boolean;
  instructions?: string; 
}

//Indexable types
interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr); //[LOG]: "chocolate"


```

### Javscript using API Interface 

```ts
//Javascript API using Interface
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();
```

[Interface Guided Lab!](../solutions/week07/implementinterface.ts)

<img src= "https://raw.githubusercontent.com/ed-averi/core-code-from-scratch-readme/main/assets/implementinterfaces.jpg"></img>

<br>

2. ✨Complete your 4th [**Core Challenge**](https://corecode.notion.site/Earn-your-SCRUM-certificate-8d9d0d40abaa4ee18c77c5a2cc1929b8). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

## Scrum Certification

<img src = "https://raw.githubusercontent.com/ed-averi/core-code-from-scratch-readme/main/assets/scrumcertification.jpg"></img>

## Extra (It is not mandatory for the Readme) ⭐

1. [Menu](./exercises/e02/desc) exercise, using `Typescript`
