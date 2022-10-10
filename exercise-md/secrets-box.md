# Secrets Box API Challenge

## Motivation

If you've made it this far, you've already written a few REST APIs and you're probably comfortable using Node.JS and its ecosystem, congratulations!

Part of being a programmer is knowing how to write and read code, most of the time we will read more than we write and that is why this challenge is based on your understanding of code and Node.JS as a whole.

Remember, this challenge is based on the question why? and not in what?

## Challenge Description

[This](https://github.com/NSA-CORE-CODE/secrets-box-api) simple REST API was created by the [NSA](https://www.nsa.gov/). The API is able to respond to a request with the NSA github account user and password. The NSA considers that its API is the safest that exists so they invite you to try to hack it.

## How the API works?

The API is able to respond with the username and password of the NSA github account only if a parameter called role is inside the body of the request and if this parameter contains the correct role.

So basically you just have to pass a correct role param inside the body of the request to the API and the credentials as well as the account are yours, piece of cake right?

At the end of the challenge you should be able to get a JSON containing the username and password of the account.

## Setup Instructions

- Clone the API code repository
- Install all project dependencies
- Start the application with: `npm run start`
- Start hacking :^)

## API Test Instructions

- You should use Postman to test the API
- Your request should look like this one:

![](https://i.ibb.co/2F0DnxN/sb.png)

## Recommendations

- Read, Play and Analyze the code.
- If you feel stuck, read the suggested resources, ask the team for help, or search it on Google.

## What to deliver

If you managed to hack the API and get the github account, congratulations!

Now you need to create a new issue in the repository of the hacked API. The issue name must follow the following structure:

`pentest-report/<your-hacker-name/your-team-name/>`

The issue description must contain an explanation of how you managed to hack the API and, if you wish, a recommendation on how to fix it.

## Challenge Rules

- If you feel stuck you can ask the team for help, but the explanation and submission of your github issue is personal.

- In this challenge you can work alone, or with as many people as you want. If you want to organize the whole team to solve it, you can do it, this challenge is free and you can work with whoever you want.

## Challenge resources

Here you have a list of useful resources that can help you with the challenge:

- [Object Prototypes](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes)

- [Javascript Type Coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

- [Base64](https://en.wikipedia.org/wiki/Base64)

- [Node.JS Base 64 Encoding - Decoding](https://attacomsian.com/blog/nodejs-base64-encode-decode)

## Solution ✅

### Code

```js
//index.js
const cors = require("cors");
const express = require("express");
const validateRole = require("./lib/role-validator");
const { getAccountCredentials } = require("./lib/credentials-client");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/secrets-box/api", async (req, res) => {
  const { role } = req.body;

  if (!role) {
    res.status(401).send({
      error: `Expected role, got ${role}`,
    });
    res.end();
  }

  const isValidRole = validateRole(role);

  if (!isValidRole) {
    const error = await getAccountCredentials(role);
    res.status(401).send({ ...error });
    return;
  }

  const credentials = await getAccountCredentials(role);
  res.send({ ...credentials });
});

app.listen(8080, () => {
  console.clear();
  console.log(`Server running on localhost:8080`);
});


```

### Role Validator

```js
//role-validator 
function validatRole(role) {
  const roles = {
    contractor: 1,
    agent: 0.1,
    director: 0.01,
  };

  const randomNumber = Math.random();

  if (!roles[role]) {
    role = "agent";
  }

/*
Below is the tricky part. In order to get the credentials for the account through a
requestquest via Postman {body} we have to enter a key role and value {toString}
What this does is that it converts the function to string; automatically it will try to convert the string to a function therefore, it will be false and return true, which will give us the information that we're looking for.
*/

  if (randomNumber < roles[role]) {
    return false;
  } else if (randomNumber > roles[role]) {
    return false;
  } else if (randomNumber === roles[role]) {
    return false;
  }

  return true;
}

module.exports = validateRole;

```

### Credentials-client

```js
const axios = require("axios");

/**
 *
 * This method will call an external API and make a second
 * validation of the role using the exact same function of
 * the role-validator.js file, if you crack the validateRole
 * function you will be able to hack the entire API.
 *
 */

async function getAccountCredentials(role) {
  try {
    const response = await axios.post(
      "https://credentials-server.vercel.app/api",
      { role }
    );

    return response.data;
  } catch (error) {
    return {
      error: "Invalid Role try again :)",
    };
  }
}

module.exports = { getAccountCredentials };

```


We were able to <kbd>hack</kbd> and get access to the account. 

<img  height="400" src="../assets/wearein.jpg"/>


Running the request via Postman

<img src="../assets/postman.jpg"/>