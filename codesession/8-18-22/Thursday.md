Introduction to Typescript

TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

```typescript
cosnole.log("Hola");
```

```typescript
function sum(a: number, b: number) {
  //by adding number, we indicate that both parameters, a&b will be numbers
  return a + b;
}
console.log(sum(4, 10));
```

```javascript
function sum(a, b) {
  if (typeof a === "string") return -1; //this means if a is string, return -1 as error
  if (typeof b === "string") return -1; //this means if b is string, return -1 as error
  return a + b;
}
console.log(sum(4, 10));
```

reference (https://code.visualstudio.com/docs/typescript/typescript-tutorial)
First we need the

To complie a ts file we can use npx tsc file name.ts
