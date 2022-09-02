Kata  
A wolf in sheep's clothing

```typescript
/*1. Donde esta el lobo en el array
  2. Correr condicionales. 
  2.1 Si el lobo esta al inicio
  2.1.1 Pls go away and stop eating my sheep
  2.2 Si el obo no esta al inicio
  2.2.1 Oi! Sheep number you are about to be eaten by a wolf
  ** N es la posicion de la oveja que esta enfrente del lboo
  */

let wolf: number = queue.indexOf("wolf");

if (++wolf === queue.length) {
  return "Pls go away and stop eating my sheep";
}
return `Oi! Sheep number ${
  queue.length - wolf
}! You are about to be eatn by a wolf`;
```

```typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let n: number = 3;

console.log(numbers[++n]);
console.log(numbers[n++]);
```
