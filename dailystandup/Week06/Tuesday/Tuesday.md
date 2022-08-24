```typescript
class User {
  age: number;
  email: string;
  name: string;
  emailAndName: string;
  isLegal: boolean = false;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.emailAndName = `${this.email} - ${this.name}`;
    if (this.age >= 21) {
      this.isLegal = true;
    }
  }

  profile(): void {
    console.log(`=====================
                        Name: ${this.name}
                        Age: ${this.age}
                        Email: ${this.email}
                     =====================`);
  }
}

const code = new User("Edward", 28, "ed.1@gmail.com");

const code2 = {
  name: "Edward",
  age: 28,
  email: "ed.1@gmail.com",
};

console.log(code);
console.log(code2);
console.log(code.emailAndName);
console.log(code.isLegal);

//code.profile()

//any
let x: any = 5;
x = "a string";
```
