function thirt(n ) {
    let remainders = [1, 10, 9, 12, 3, 4];
     let result = n
       .toString()
       .split('')
       .reverse()
       .map((c, i ) => parseInt(c) * remainders[i % 6])
       .reduce((p, c) => (p += c));
     return n == result ? result : thirt(result);
   }