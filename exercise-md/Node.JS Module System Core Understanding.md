# Node.JS Module System

## Description

Now that you have a clearer concept about what Node.JS is, it's time to
practice with one of its most important concepts: The Module System.

Please answer the following questions with your own words:

1. What is a Javascript Module? <p><i>🔶A JavaScript module is simply a JavaScript file with pieces of the whole code exported for use by other pieces of code. </i></p>
2. Why are Javascript Modules necessary?<p><i>🔶To better organize and structure your code</i></p>
   <img src= "https://raw.githubusercontent.com/ed-averi/core-code-from-scratch-readme/main/assets/togetridoff.jpg"/>
[Source](https://slides.com/javascriptcowboy/javascript-modules)
3. What module standards are available in Node.JS?
<ul><p><i>
<li>🔶ECMAScript module</li><li>🔶Common JS</li>
</i></p></ul>

4. What are the differences between ESModules and CommonJS modules?

<ul><p><i>

<li><a href="https://nodejs.org/api/esm.html#no-require-exports-or-moduleexports">No require, exports, or module.exports</a></li>
<li><a href="https://nodejs.org/api/esm.html#no-__filename-or-__dirname">No __filename or __dirname</a></li>
<li><a href="https://nodejs.org/api/esm.html#no-native-module-loading">No Native Module Loading</a></li>
<li><a href="https://nodejs.org/api/esm.html#no-requireresolve">No require.resolve</a></li>
<li><a href="https://nodejs.org/api/esm.html#no-node_path">No NODE_PATH</a></li>
<li><a href="https://nodejs.org/api/esm.html#no-requireextensions">No require.extensions</a></li>
<li><a href="https://nodejs.org/api/esm.html#no-requirecache">No require.cache</a></li>

</i></p></ul>

5. Which types of modules exist in Node.JS? [Source](https://data-flair.training/blogs/nodejs-modules/)
<ul><i>

<li>Core Modules</li><p>Built-in modules of node.js that are part of nodejs and come with the Node.js installation process are known as core modules. To load/include this module in our program, we use the require function.</p>

```js
let  module = require('module_name')
```
<li><u><strong>local Modules</strong></u></li><p>Local modules are created by us locally in our Node.js application. These modules are included in our program in the same way as we include the built in module.</p>

```js

//Let’s build a module with the name as sum to add two numbers and include them in our index.js file to use them.

//Code for creating local modules and exporting:
exports.add=function(n,m){
    return n+m;
};
```
<p>Exports keyword is used to make properties and methods available outside the file.

In order to include the add function in our index.js file we use the require function. 

Code for including local modules:</p>

```js
let sum = require('./sum')
 
console.log("Sum of 10 and 20 is ", sum.add(10, 20))
```

<li>Third-party Modules</li>
<p>Modules that are available online and are installed using the npm are called third party modules. Examples of third party modules are express, mongoose, etc.

To install third party modules refer to the previous blog where we have discussed how to install modules using npm.

Nodejs HTTP Module:
It is a built-in module of node.js. It allows node.js applications to transfer data using HyperText Transfer Protocol (HTTP).

This module creates an HTTP server that listens to server ports and also gives responses back to the client.

Properties:
1. http.METHODS: this tells us all the methods available in http module.

Code to check HTTP methods:

</p>

```js
let http = require('http');
console.log(http.METHODS)
/*
OUTPUT
[
  'ACL',         'BIND',       'CHECKOUT',
  'CONNECT',     'COPY',       'DELETE',
  'GET',         'HEAD',       'LINK',
  'LOCK',        'M-SEARCH',   'MERGE',
  'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
  'MOVE',        'NOTIFY',     'OPTIONS',
  'PATCH',       'POST',       'PROPFIND',
  'PROPPATCH',   'PURGE',      'PUT',
  'REBIND',      'REPORT',     'SEARCH',
  'SOURCE',      'SUBSCRIBE',  'TRACE',
  'UNBIND',      'UNLINK',     'UNLOCK',
  'UNSUBSCRIBE'
]

*/
```

</i></ul>

<!-- It's important to share your opinion with the team and thus be able to
form your own concept of the module system, so before answering the
questions, meet or chat with at least two colleagues and discuss the answers
as a group and refine your final answers. -->

<!-- ## How to submit my solution?

Add your answers to your README file, add a link to the github profile
of the colleagues with whom you exchanged ideas. -->

<!-- ## More Help?

Slack us 😉 -->


## Useful Resources:

Check out these links, where you can find some starting point for your research:

[MDN Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)

[Modules Introduction](https://javascript.info/modules-intro)


[What is a Javascript Module?](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples)

[Node.JS CommonJS Modules](https://nodejs.org/api/modules.html)
[Node.JS Module Types](https://www.tutorialsteacher.com/nodejs/nodejs-modules)