# JS Fundamentals Review Day

Today you have several sections to work through. You are expected to use TDD throughout in order to demonstrate your understanding of the topics and of good TDD practices (the tests for _Section 3 - Using Closures_ have been written for you). Have fun!

**tip:** When running the test command you can pass jest a fileName pattern as an argument in the command line. e.g. `npm test 1` will only run tests that contain 1, just `__tests__/1-human-resources.test.js` in this case. You might find this useful to only run the tests you want to work on.

## Submitting your work

At the end of each section please push your work up to github and send us a link to your repo. This can be done via the `/nchelp review` slack command. Leave a comment in the form letting us know which section you've completed and add a link to your repo. Your repo url will be of the form `https://github.com/yourGithubUserName/fun-review-day`. You can copy this from the address bar in your browser or run `git remote -v` in the terminal.

**tip** If you forgot to fork and cloned the Northcoders repo directly you can fork it afterwards and then change the remote by running `git remote set-url origin your_repo_link_here`.

## Section 1 human-resources (Array Methods)

For each of these challenges, be sure to **use an appropriate array-method** and **demonstrate your understanding of TDD**.

The functions in this section should be **pure** - so you should also aim to implement test cases to check the functions have no **side effects**, besides any other functionality.

### 1 - `removeAgents`

After a survey of your organisation, it has transpired that a few of the respondents have been very open about committing corporate espionage. As a diligent HR professional, please remove each employee whose admitted profession is `mole`;

Your function should take an array of people objects, and return a new array of people objects whose profession is not `mole`.

```js
const employees = [
  { name: "Sam", profession: "artist" },
  { name: "Mitch", profession: "mole" },
];

removeAgents(employees); // returns [{name: 'Sam', profession: 'artist'}];
```

### 2 - `makeNameTags`

You wouldn't usually be found doing work like this, but Jon is off sick, and the HR Director is having a meeting in a couple of hours to discuss the recent espionage problems. Please make name tags for each of the guests.

Given an array of guest objects containing `title`, `forename`, `lastname` and `company` keys, your makeNameTags function should return a new array with the text (formatted as `<title> <forename> <surname>, <company>`) for each name tag.

```js
const guests = [
  {
    title: "Mr",
    forename: "Sam",
    surname: "Caine",
    age: 30,
    company: "Northcoders",
  },
  {
    title: "Mr",
    forename: "Kermit",
    surname: "The Frog",
    age: 35,
    company: "Jim Henson Studios",
  },
];

makeNameTags(guests); // returns ['Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios'];
```

### 3 - `createPoll`

Usually we'd use survey monkey, but the managers have taken to building polls across the organisation as strings. Given an array of strings, please build a much more useful poll object.

```js
createPoll(["cake", "biscuit", "biscuit"]); // returns { cake: 1, biscuit: 2 }
createPoll(["dog", "dog", "dog"]); // returns { dog: 3 }
```

Your final test should be using the NCFruitBowl from the `data/poll-data.js` file. _DO NOT COPY AND PASTE THIS INTO YOUR TEST FILE - it's huge!_ Be sure to export it properly. It should return the following object:

```js
{
  apple: 276,
  pear: 223,
  banana: 263,
  orange: 238,
  'lonesome plum': 1
}
```

❗️ `Push your work to Github and submit it before moving on` ❗️

❗️ `Commit and push your work to github then use /nchelp review to submit` ❗️

## Section 2 - OOP Vending Machine

Write a `VendingMachine` class that will return vending machine instances.

It must have a `credit` property, which will be a **number** representing amount of pence, starting at `0`.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0;
```

It must have a stock property, an object representing the rows of items in the machine. Individual positions in the machine can then be referenced by the row, either "A", "B" or "C" e.g.

```js
const testMachine = new VendingMachine();
testMachine.stock;
/** {
A : {},
B : {},
C : {},
};
**/
```

It must have an `addStock` method which will add new stock to the vending machine at the correct position.

```js
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
testMachine.stock;
/**
{ A: { name: 'marsBar', price: 50, quantity: 6 },
  B: {},
  C: {} }
 **/
```

It must have an `addCredit` method which will update the machine credit.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0
testMachine.addCredit(50);
testMachine.credit; // 50
testMachine.addCredit(10);
testMachine.credit; // 60;
```

It must have a `purchaseItem` method which will **decrease** the quantity of the stock if there is sufficient credit and returns the stock name.

```js
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
testMachine.addCredit(30);
testMachine.purchaseItem("A"); // returns 'Insufficent credit!'
```

```js
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
testMachine.addCredit(60);
testMachine.purchaseItem("A"); // returns 'marsBar'
testMachine.stock;
/**
{ A: { name: 'marsBar', price: 50, quantity: 5 },
  B: {},
  C: {}
}
 **/
testMachine.credit; // 10
```

❗️ `Push your work to Github and submit it before moving on` ❗️

❗️ `Commit and push your work to github then use /nchelp review to submit` ❗️

## Section 3 - Using Closures

### 1 - `generateMultiples`

Write a higher-order function called `generateMultiples`.

Your `generateMultiples` function should:

- take a number ( representing a multiple ) as an argument
- return a new function.

The new function should:

- take a number to determine how long the list of multiples should be
- return an array containing a list of multiples

### For Example:

```js
const makeMultiplesOf10 = generateMultiples(10);
makeMultiplesOf10(0); // []
makeMultiplesOf10(3); // [10, 20, 30]
```

```js
const makeMultiplesOf6 = generateMultiples(6);
makeMultiplesOf6(1); // [6]
makeMultiplesOf6(5); // [6, 12, 18, 24, 30]
```

### 2 - `secureFunc`

Write a higher-order function called `secureFunc`.

It should do the following:

- take an original password (string) and a function as its arguments
- return a new function.

The new function should:

- take a password attempt (string)
- if the password attempt matches the original password then it will return invocation of the original function
- otherwise, the new function will return a message stating: `Sorry your password is incorrect!`

### For example:

```js
const saySecret = () => {
  return "Hopscotch";
};

const securedSaySecret = secureFunc("nc123@!", saySecret);
securedSaySecret("nc123@!"); // returns 'Hopscotch';
securedSaySecret("oops"); // returns 'Sorry your password is incorrect!';
```

```js
const sum = (a, b) => {
  return a + b;
};

const securedSum = secureFunc("nc123@!", sum);
securedSum("nc123@!", 21, 6); // returns 27
securedSum("oops", 10, 5); // returns 'Sorry your password is incorrect!';
```

❗️ `Push your work to Github and submit it before moving on` ❗️

❗️ `Commit and push your work to github then use /nchelp review to submit` ❗️

## Section 4 - Recursion

### 1 - `deepEntries`

Implement a function `deepEntries` that will take an object as its argument and go through that object to convert any nested-objects into an array of entries. Each entry is itself a sub-array with the key-value pair from the original object. Your function should be a recursive version of the native method [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries). Use the documentation to help you in your implementation, but avoid using the method.

```js
deepEntries({ name: "Sam" }); // returns [ ["name", "Sam"] ]
deepEntries({ name: "Sam", favBook: "Blood Meridian" });
// returns [ ["name", "Sam"], ["favBook", "Blood Meridian"] ]

// more nested object
deepEntries({ name: "Sam", pets: { name: "fido" } }); /** returns [
  ["name", "Sam"],
  ["pets",[["name", "fido"]]]
]
**/
// even more nesting...
deepEntries({
  name: "Sam",
  favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
});
/** returns [
  ["name","Sam"],
  ["favBook",[["title","Blood Meridian"],["author", [["name","Cormac McCarthy"]]]
]]]
**/
```

### 2 - `deeplyEquals`

Implement a function called `deeplyEquals`. This function will check if two passed variables contain the same values. If passed _arrays_ or _objects_ the function will check the contents for equality.
You will nee to use recursion in your implementation of this method.
Be sure to build up your tests carefully and take care in building up your logic step by step.

```js
deeplyEquals("a", "a"); // true
deeplyEquals("a", "b"); // false
deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "hello" }]); // true
deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "bye" }]); // false
```

NOTE - do not use `JSON.stringify` for this. If you were considering it, well done, you're very smart.

❗️ `Push your work to Github and submit it before moving on` ❗️

❗️ `Commit and push your work to github then use /nchelp review to submit` ❗️

## Section 5 - Additional

Well done if you've got through everything. This is the end of work we would like you to submit but there some additional challenges below if you'd like some more practice. You'll have to setup your own files and tests for each of these problems.

### 1 - ADVANCED - `removeSmarterAgents`

It turns out there were even more corporate spies than the initial sweep of the organisation turned up. It's become obvious to the resident conspiracy theorist that the moles signify their presence to each other on the company's social media platform's `interests` and `aboutMe` section.

If the `aboutMe` section, or a single `interest` includes the letters `m`, `o`, `l`, `e` in that order, they are almost certainly a spy and should be removed immediately.

Do what you can.

Examples of users to remove:

```js
 const sam = {
   name: 'Sam',
   age: 30,
   aboutMe: 'I have no personality! :D',
   interests: ['code', 'guacamole']
  }

  // removed because of the interest guacamole!

  const mitch = {
    name: 'Mitch',
    age: 29,
    aboutMe: 'I am not a mole - I am a human being!',
    interests: ['Tudor hymns', 'dancing'];
  }

  // removed because of the word mole in aboutMe!

  const jonny = {
    name: 'Jonny',
    age: 32,
    aboutMe: "I'm a father of two girls - it's great!",
    interests: ['parenting']
  }

  // removed about me contains the letters m, o, l, e. In that order:
  //i'M a father Of two girLs - it's grEat"

  const vel = {
    name: 'Vel',
    age: 28,
    aboutMe: 'I love games!',
    interests: ['Magic', 'Monopoly Express'];
  }

  // removed because the interest Monopoly Express contains the letters in the correct order.
```

### 2 - ADVANCED - `rememberMe`

Write a higher-order function called `rememberMe`, which takes a function as it's only argument.

It should do the following:

- It should return a new function.

- The new function should work in exactly the same way as the old one

- If the new function has not previously been called with those arguments, it should return the output of the original function, but store it in a cache

- If the function has been called with those arguments, it should return the output of the original function **WITHOUT** having to execute the functionality

### 3 - ADVANCED - `flat`

Reimplement the array method `flat`. You can find the [docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
