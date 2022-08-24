### Object Oriented Programming.

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

<img src="https://raw.githubusercontent.com/ed-averi/core-code-from-scratch-readme/main/assets/pillars.jpg" />

### Classes

<img src="https://raw.githubusercontent.com/ed-averi/core-code-from-scratch-readme/main/assets/classes.jpg" />

<br>

```typescript
class song {
    //characteristics <-- attributes

    author: string;
    name: string;

    constructor(a:string, n:string){
        this.author= a:
        this.name= n:
    }

    //behaviours <--methods

    play(): string{
        return `Playing ...${this.name} by ${this.author}`
    }
}

//Obj & instance

const song1= new Song ('Metallica', 'Enter Sandman');

console.log(song1.play());
console.log(song1.author);

// instancia es la construccion de la clase en memoria, de la memoria sacamos la direccion y se lo damos al objeto
```
