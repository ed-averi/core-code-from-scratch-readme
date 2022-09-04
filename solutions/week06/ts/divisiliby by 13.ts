//shared in a dailystand up session at core code

export function thirt(n: number): number {
    let remainders: number[] = [1, 10, 9, 12, 3, 4];
     let result = n
       .toString()
       .split('')
       .reverse()
       .map((c: string, i: number) => parseInt(c) * remainders[i % 6])
       .reduce((p: number, c: number) => (p += c));
     return n == result ? result : thirt(result);
   }