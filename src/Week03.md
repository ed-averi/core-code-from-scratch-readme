<a href="https://www.core-code.io/">

![alt text](https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png "corecodeio")

</a>

# Javascript

# [Index](/README.md)

# Week 3

## Week goal 🏁

<p>Learn about Javascript behaviour</p>

## Week subtopics

- scopes
- var, let, const
- Operators
  - TypeOf
- Data structure
  - Array
  - List
  - Stack
- Object
- DOM API

## Week challenges (Monday) 💻

1. [Who Likes It?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript) exercise
2. [Bit Counting]() exercise
3. [Your Order, Please]() exercise

<ol>

<li>Who Likes It?</li>

### Description

```xml
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
```

### Solution: ✅

```python

#Python

def likes(names):
    if len(names)==0:return 'no one likes this'
    elif len(names)==1:return names[0] +' likes this'
    elif len(names)==2:return names[0] +' and ' + names[1] + ' like this'
    elif len(names)==3:return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    else: return names[0] + ', ' + names[1] + ' and ' + str(len(names)-2) + ' others like this'

```

</ol>
