```typescript
class User {
  age: number;
  email: string;
  name: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
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

code.profile();
```
