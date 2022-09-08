```ts
//kata https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript

export function duplicateEncode(word: string) {
  // ...
  var string = "";
  var lowerCaseWord = word.toLowerCase();
  for (var i = 0; i < lowerCaseWord.length; i++) {
    if (
      lowerCaseWord.indexOf(lowerCaseWord[i]) ===
      lowerCaseWord.lastIndexOf(lowerCaseWord[i])
    ) {
      string += "(";
    } else {
      string += ")";
    }
  }
  return string;
}
```

```ts
//solution 2

export function duplicateEncode(word: string) {
  word = word.toLowerCase();
  var string = "";
  const characters: string[] = word.split("");
  for (var i = 0; i < characters.length; i++) {
    if (
      characters.indexOf(characters[i]) ===
      characters.lastIndexOf(characters[i])
    ) {
      string += "(";
    } else {
      string += ")";
    }
  }
  return string;
}
```
