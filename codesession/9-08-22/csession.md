## Programacion generica

```ts
export default class Box<T> {
  constructor(private value: T) {}
  print() {
    console.log(this.value, typeof this.value);
  }
}
```
