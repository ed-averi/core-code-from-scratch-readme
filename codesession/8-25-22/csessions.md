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

```typescript
//typescript

export class Person {
    name: string;
    last_name: string;
    age: number;
    salary: number;
    classes: string[] =[];
}

constructor(name: string, last_name: string, age: number, salary: number){
    this.name=name;
    this.last_name = last_name;
    this.age = age;
    this.salary = salary;
}

const name= new Person();

```

```typescript

import {Person} from './modules/Person';

cosnt leo = new Person ('Leo'. 'Lorem', 20,0);

console.log(Leo.age);

```
