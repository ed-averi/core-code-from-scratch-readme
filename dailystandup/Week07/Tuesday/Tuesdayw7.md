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
