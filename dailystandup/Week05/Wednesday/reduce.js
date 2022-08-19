let arr = [1,2,3,4,5,6,7,8,9,10]; 

let acc = 10;
for(let i = 0; i < arr.length; i++) {
  acc = acc + arr[i];
}
// console.log(acc);

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
},10);

// console.log(sum);

let arrStr = ['H', 'O', 'L', 'A',' ', 'Y', 'osef'];

// Utilizando un reduce ==> 'HOLA Yosef'
let cnct = arrStr.reduce((acc, curr) => {
  return acc.concat(curr);
}, '');

console.log(cnct);