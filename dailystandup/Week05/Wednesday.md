For in
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```javascript
for (const variable in object) {
  statement;
}

const user = {
  name: "Lorem",
  lastName: "Ipsum",
  age: 20,
};

//console.log(user["name"])

for (const key in user) {
  //console.log(user[key])
  console.log(`${key} => ${user[key]}`);
}
```

```javascript
const numbers = [10, 40, 80, 22];

for (const number of numbers) {
  console.log(number);
}

const smt = "LOREM IPSUM 42";
for (const chr of smt) {
  console.log(chr);
}
```

<img src="../assets/filterwords.jpg" />
