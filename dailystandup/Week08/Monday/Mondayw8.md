Which are in?

```xml
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: r must be without duplicates.


```

## Solution

```ts
export function inArray(a1: string[], a2: string[]): string[] {
  throw new Error("TODO");

  /*
  1. Recorrer a1
  1.1 Mientras recorro a1, filtro los elementos de a1
  1.1.1 Filtrar:
  1.1.1.1 Se quedan los elementos que son un substring de un string en a2
  1.1.2 Sort sobre arreglo filtrado
  1.1.3 Return de arreglo filtrado

  */

//  return a1.filter((sub)=>{
//     let result= a2.find((str)=> str.includes(sub))'
//     return result !== undefined;
//  }.sort());
}

//in case duplicates, use set, new set of unique value, it removes duplicates
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
return [... new Set (a1)].filter]((sub)=>{
    let result= a2.find((str)=> str.includes(sub))'
    return result !== undefined;
 }.sort());
}


//var a1 = ["live", "strong", "lyal", "lysh", "arp"]
//var a2:string[] = ["lively", "alive", "harp", "sharp", "armstrong"]
//   r = ["live", "strong", "arp"] ==> ["arp","live", "strong" ]


//Javscript filter

const n=[1,2,3,4,5,6,7,8,9,10];

const even =n.filter ((num)=> num%2 ===0);
console.log(even); //[;2,4,6,8,10]
// what if there is no %2

const n= [1,3,5,7,9];
const even =n.filter ((num)=> num%2 ===0);
console.log(even); // result empty []

//include

const str1= 'armstrong';
const str2= 'strong';

console.log(str1.includes(str2)); // true

const arr1=["lively", "alive", "harp", "sharp", "armstrong"];
console.log(arr1.find((str)=> str.includes(str))); // "armstrong"

let result2= undefined;
for(let i =0; i<arr1.length; i++){
    if(arr1[i].includes(str2)){
        result2=arr1[i];
        break;
    }
}
console.log(result2); 'armstrong'

```
