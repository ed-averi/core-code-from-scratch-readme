<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# End of Month & React

# [Index](/README.md)

# Week 10

## Week goal 🏁

<p>Learn about React</p>

## Week subtopics

- React Project Overview

## Week challenges (Monday) 💻

1. Time to catch up ⏱️

<img src="https://media1.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif?cid=ecf05e47ca1lqtqs3ad25ayukmc4zmwo1bhgqj8y03oy3bi0&rid=giphy.gif&ct=g ">

## Week challenges (Tuesday) 💻

1. Time to catch up ⏱️

<img src="https://media0.giphy.com/media/HdcimOKferlkI/giphy.gif?cid=ecf05e47scvyrwt5fdlmzxeyekycajzkg8bwt76x0t054xvq&rid=giphy.gif&ct=g">

## Week challenges (Wednesday) 💻

1. Watch this [What Is React (React js) & Why Is It So Popular?](https://www.youtube.com/watch?v=N3AkSS5hXMA&ab_channel=ProgrammingwithMosh) video
2. Watch this [Learn React](https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified) video

## Week challenges (Tuesday) 💻

1. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173)

### Description

```
You decide to create a simple list of your favourite Easter eggs in React.
Challenge

Learn about nesting and listing React components.

    The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
    Loop through the props.eggs to output a unorder list of Easter eggs.
    Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
    Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.

About keys in React lists

While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

```

### Solution ✅

```js
import React from 'react';

export const EggList = ({eggs}) => {
  return <ul>{eggs.map((v, i) => <EasterEgg name={v} key={i} />)}</ul>;
};
 
export const EasterEgg = ({name,key}) => {
  return <li key={key}>{name}</li>;
};

//Time: 3937ms Passed: 23Failed: 0
```