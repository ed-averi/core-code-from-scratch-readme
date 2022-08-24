```javascript
const number = [1, 2, 3, 4, 5];

/*const result = a.reduce((prev, curr)=>{
	//console.log('===================') 
	//console.log(`Acc (prev: ${prev}`);
	return prev + curr;
}, 0) //console log as debug 
*/
//map de multiplicar numeros por 3, filter elementos que
//map
//filter

const nEvens = number.map((n) => n * 3).filter((x) => x % 2 === 0);

console.log(nEvens);
```

Pig Latin Kata Challenge //

```javascript
//solutions shared in the standup
function pigIt(str) {
  // Ingrid
  //return str.replace(/(\w)(\w*)(\s|$)/g, `$2$1ay$3`);
  // Eli
  //   str = str.split(" ");
  //   let strChange = '';
  //   let regx = (/([a-zA-Z])/);
  //   for (let i = 0; i < str.length; i++) {
  //     if (regx.test(str[i])) {
  //       strChange += str[i].slice(1).concat(str[i].slice(0, 1)).concat("ay ");
  //     } else {
  //       strChange += str[i];
  //     }
  //   }
  //   return strChange.trim();
}
```

> > Website we can use to practice regex (https://regex101.com/)
