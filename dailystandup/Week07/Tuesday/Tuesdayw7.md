```typescript
export function thirt(n: number): number {
  // your code
  const sequence: number[] = [1, 10, 9, 12, 3, 4];
  let input: number = n;
  let result: numer = -1;
  while (input != result) {
    //in order to use reverse, we convert it to an array of numbers
    input
      .toString()
      .split("")
      .reverse()
      .map(
        (stringNumber: string, i: number) =>
          Number(stringNumber) * sequence[i % 6]
      )
      .reduce((prev: number, curr: number) => prev + curr, 0);
  }
  return result;
}
```

```typescript
// Randy
function thirt(input: number): number {
  const sequence: number[] = [1, 10, 9, 12, 3, 4];
  let result: number = -1;
  let resultBack = -1;
  while (input != result) {
    if (resultBack != -1) {
      input = resultBack;
    }
    resultBack = result;
    result = input
      .toString()
      .split("")
      .reverse()
      .map((n: string, i: number) => Number(n) * sequence[i % 6])
      .reduce((prev: number, curr: number) => prev + curr, 0);
    //    if(resultBack != -1) {
    //    input = result;
    // }
  }
  return result;
}

// Elí
export function thirt(n: number): number {
  let remainders: number[] = [1, 10, 9, 12, 3, 4];
  let result = n
    .toString()
    .split("")
    .reverse()
    .map((c: string, i: number) => parseInt(c) * remainders[i % 6])
    .reduce((p: number, c: number) => (p += c));
  return n == result ? result : thirt(result);
}

function thirt(input: number): number {
  const sequence: number[] = [1, 10, 9, 12, 3, 4];
  let result: number = -1;
  while (input != result) {
    if (result != -1) {
      input = result;
    }
    result = input
      .toString()
      .split("")
      .reverse()
      .map((n: string, i: number) => Number(n) * sequence[i % 6])
      .reduce((prev: number, curr: number) => prev + curr, 0);
  }
  return result;
}
```
