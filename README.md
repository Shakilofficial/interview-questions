# 📘 JavaScript Interview Questions

---

## 📚 Table of Contents

### 🔹 Basic JavaScript

1. [What are the data types in JavaScript?](#1-what-are-the-data-types-in-javascript)
2. [What is the difference between var, let, and const?](#2-what-is-the-difference-between-var-let-and-const)
3. [What are primitive and non-primitive data types?](#3-what-are-primitive-and-non-primitive-data-types)
4. [What is hoisting in JavaScript?](#4-what-is-hoisting-in-javascript)
5. [What is the difference between == and ===?](#5-what-is-the-difference-between--and-)
6. [Explain scope in JavaScript.](#6-explain-scope-in-javascript)
7. [What is a closure?](#7-what-is-a-closure)
8. [What is a callback function?](#8-what-is-a-callback-function)
9. [What is the difference between null and undefined?](#9-what-is-the-difference-between-null-and-undefined)
10. [What is NaN and how can you check for it?](#10-what-is-nan-and-how-can-you-check-for-it)
11. [What is the difference between function declaration and function expression?](#11-what-is-the-difference-between-function-declaration-and-function-expression)
12. [What is an IIFE (Immediately Invoked Function Expression)?](#12-what-is-an-iife-immediately-invoked-function-expression)
13. [What is event bubbling and event capturing?](#13-what-is-event-bubbling-and-event-capturing)
14. [What is the difference between synchronous and asynchronous code?](#14-what-is-the-difference-between-synchronous-and-asynchronous-code)
15. [What is the typeof operator and how does it work?](#15-what-is-the-typeof-operator-and-how-does-it-work)
16. [What are template literals?](#16-what-are-template-literals)
17. [What is the use of `this` keyword?](#17-what-is-the-use-of-this-keyword)
18. [What is the use of bind(), call(), and apply()?](#18-what-is-the-use-of-bind-call-and-apply)
19. [What are arrow functions and how are they different from regular functions?](#19-what-are-arrow-functions-and-how-are-they-different-from-regular-functions)
20. [What are truthy and falsy values in JavaScript?](#20-what-are-truthy-and-falsy-values-in-javascript)

### 🔸 Intermediate JavaScript

21. [What is the event loop in JavaScript?](#21-what-is-the-event-loop-in-javascript)
22. [Explain how `setTimeout` and `setInterval` work.](#22-explain-how-settimeout-and-setinterval-work)
23. [What is the difference between shallow copy and deep copy?](#23-what-is-the-difference-between-shallow-copy-and-deep-copy)
24. [What are JavaScript Promises? How do they work?](#24-what-are-javascript-promises-how-do-they-work)
25. [What is async/await and how is it different from Promises?](#25-what-is-asyncawait-and-how-is-it-different-from-promises)
26. [What is destructuring in JavaScript?](#26-what-is-destructuring-in-javascript)
27. [What are spread and rest operators?](#27-what-are-spread-and-rest-operators)
28. [What is the difference between `for`, `for..in`, and `for..of` loops?](#28-what-is-the-difference-between-for-forin-and-forof-loops)
29. [What are `map`, `filter`, and `reduce` methods?](#29-what-are-map-filter-and-reduce-methods)
30. [How does prototypal inheritance work in JavaScript?](#30-how-does-prototypal-inheritance-work-in-javascript)
31. [What is the difference between Object and Map?](#31-what-is-the-difference-between-object-and-map)
32. [How do you handle errors in JavaScript?](#32-how-do-you-handle-errors-in-javascript)
33. [What is the use of `Object.freeze()` and `Object.seal()`?](#33-what-is-the-use-of-objectfreeze-and-objectseal)
34. [What are higher-order functions?](#34-what-are-higher-order-functions)
35. [What is a pure function?](#35-what-is-a-pure-function)
36. [What is currying in JavaScript?](#36-what-is-currying-in-javascript)
37. [What is the difference between debounce and throttle?](#37-what-is-the-difference-between-debounce-and-throttle)
38. [What are the different ways to clone an object?](#38-what-are-the-different-ways-to-clone-an-object)
39. [How does garbage collection work in JavaScript?](#39-how-does-garbage-collection-work-in-javascript)
40. [What is the use of the `arguments` object?](#40-what-is-the-use-of-the-arguments-object)


### 🔸 Advanced JavaScript
51. [What is memory leak and how can you prevent it?](#51-what-is-memory-leak-and-how-can-you-prevent-it)
52. [Explain the concept of closures with an example.](#52-explain-the-concept-of-closures-with-an-example)
53. [What is the difference between Object.create() and constructor functions?](#53-what-is-the-difference-between-objectcreate-and-constructor-functions)
54. [How is async/await internally implemented?](#54-how-is-asyncawait-internally-implemented)
55. [What are generators in JavaScript?](#55-what-are-generators-in-javascript)
56. [What is the difference between deep equality and shallow equality?](#56-what-is-the-difference-between-deep-equality-and-shallow-equality)
57. [What is the Temporal Dead Zone?](#57-what-is-the-temporal-dead-zone)
58. [What are WeakMap and WeakSet?](#58-what-are-weakmap-and-weakset)
59. [What is tail call optimization?](#59-what-is-tail-call-optimization)
60. [What is the module pattern in JavaScript?](#60-what-is-the-module-pattern-in-javascript)
61. [What is Service Worker in JavaScript?](#61-what-is-service-worker-in-javascript)
62. [What is the difference between localStorage, sessionStorage, and cookies?](#62-what-is-the-difference-between-localstorage-sessionstorage-and-cookies)
63. [How does JavaScript handle concurrency?](#63-how-does-javascript-handle-concurrency)
64. [What is the difference between a microtask and a macrotask?](#64-what-is-the-difference-between-a-microtask-and-a-macrotask)
65. [What is the purpose of Symbol in JavaScript?](#65-what-is-the-purpose-of-symbol-in-javascript)
66. [What are dynamic imports?](#66-what-are-dynamic-imports)
67. [What is the difference between eval() and Function() constructor?](#67-what-is-the-difference-between-eval-and-function-constructor)
68. [What is reflow and repaint in the browser?](#68-what-is-reflow-and-repaint-in-the-browser)
69. [What is serialization and deserialization?](#69-what-is-serialization-and-deserialization)
70. [How can you make a custom iterable object in JavaScript?](#70-how-can-you-make-a-custom-iterable-object-in-javascript)

---

## 🔹 Basic JavaScript

### 1. **What are the data types in JavaScript?**

JavaScript has **7 primitive data types**:

- `Number`
- `String`
- `Boolean`
- `Undefined`
- `Null`
- `Symbol`
- `BigInt`  
  Non-primitive: **Object** (includes arrays, functions, etc.)

---

### 2. **What is the difference between var, let, and const?**

- `var`: Function/global scoped, can be redeclared/updated.
- `let`: Block scoped, can be updated but not redeclared in same scope.
- `const`: Block scoped, cannot be updated/redeclared.

---

### 3. **What are primitive and non-primitive data types?**

- **Primitive**: Immutable - `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`.
- **Non-primitive**: Mutable - `Object`, `Array`, `Function`.

---

### 4. **What is hoisting in JavaScript?**

JS moves declarations (not initializations) to the top of their scope during compilation.

---

### 5. **What is the difference between == and ===?**

- `==`: Loose comparison (type coercion).
- `===`: Strict comparison (no coercion, checks type + value).

---

### 6. **Explain scope in JavaScript.**

- **Global**: Available anywhere.
- **Function/Local**: Inside a function.
- **Block**: Within `{}` using `let`/`const`.

---

### 7. **What is a closure?**

A function that retains access to its lexical scope even when executed outside of it.

---

### 8. **What is a callback function?**

A function passed to another function and executed after some operation completes.

---

### 9. **What is the difference between null and undefined?**

- `null`: Intentional absence of value.
- `undefined`: Variable declared but not assigned.

---

### 10. **What is NaN and how can you check for it?**

- NaN: Not-a-Number.
- Check: `Number.isNaN(val)` or `val !== val`.

---

### 11. **What is the difference between function declaration and function expression?**

- **Declaration**: Hoisted, available before definition.
- **Expression**: Not hoisted, defined at runtime.

---

### 12. **What is an IIFE (Immediately Invoked Function Expression)?**

A function that runs immediately after being defined:

```js
(function () {
  console.log("IIFE");
})();
```

---

### 13. **What is event bubbling and event capturing?**

- **Bubbling**: Event flows from child to parent (default).
- **Capturing**: Event flows from parent to child (useCapture = true).

---

### 14. **What is the difference between synchronous and asynchronous code?**

- **Synchronous**: Blocks further execution.
- **Asynchronous**: Non-blocking, tasks run in parallel.

---

### 15. **What is the typeof operator and how does it work?**

Returns a string of the operand’s type:

```js
typeof "hello"; // "string"
```

---

### 16. **What are template literals?**

Strings enclosed in backticks that allow expression interpolation:

```js
`Hello, ${name}`;
```

---

### 17. **What is the use of this keyword?**

Refers to the context object of the current function/execution.

---

### 18. **What is the use of bind(), call(), and apply()?**

- `bind`: Returns new function with bound `this`.
- `call`: Executes function with specified `this` and args.
- `apply`: Same as `call`, but args passed as array.

---

### 19. **What are arrow functions and how are they different from regular functions?**

- Shorter syntax, no own `this`.
- Suitable for callbacks and preserving context.

---

### 20. **What are truthy and falsy values in JavaScript?**

- **Truthy**: `"0"`, `1`, `[]`, `{}`, etc.
- **Falsy**: `0`, `""`, `null`, `undefined`, `NaN`, `false`.

---

## 🔸 Intermediate JavaScript


### 21. **What is the event loop in JavaScript?**

The event loop is a mechanism that handles asynchronous code execution. It monitors the call stack and task queue, and once the call stack is empty, it pushes queued callbacks (like from `setTimeout`, Promises, or events) onto the stack for execution. This ensures non-blocking behavior in JavaScript.

---

### 22. **How do `setTimeout` and `setInterval` work?**

- `setTimeout(fn, delay)`: Executes `fn` once after the specified `delay`.
- `setInterval(fn, delay)`: Repeatedly executes `fn` every `delay` milliseconds until stopped with `clearInterval`.

```js
setTimeout(() => console.log("After 2s"), 2000);
setInterval(() => console.log("Every 2s"), 2000);
```

---

### 23. **Difference between shallow copy and deep copy?**

- **Shallow copy**: Copies only the top-level values. Nested objects are still referenced.
- **Deep copy**: Recursively copies all levels, creating independent nested structures.

```js
let shallow = [...array];
let deep = JSON.parse(JSON.stringify(object));
```

---

### 24. **What are JavaScript Promises?**

A `Promise` represents a future value from an asynchronous operation. It has three states:

- **Pending**
- **Fulfilled**
- **Rejected**

Handled via `.then()`, `.catch()`, and `.finally()`.

```js
new Promise((resolve, reject) => {
  // async task
}).then(...).catch(...);
```

---

### 25. **What is async/await?**

`async/await` is syntactic sugar over Promises. It makes asynchronous code look synchronous and improves readability.

```js
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

---

### 26. **What is destructuring?**

Destructuring allows unpacking values from arrays or objects into variables.

```js
const { name, age } = { name: "Alice", age: 25 };
```

---

### 27. **What are spread and rest operators?**

- **Spread (`...`)**: Expands elements of an array/object.
- **Rest (`...`)**: Gathers multiple elements into one.

```js
let newArr = [...arr, 4];
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

### 28. **Difference between for, for...in, and for...of?**

- `for`: Traditional loop over indices.
- `for...in`: Iterates over object keys.
- `for...of`: Iterates over iterable values (arrays, strings).

```js
for (let i = 0; i < arr.length; i++) {}
for (let key in obj) {
}
for (let value of arr) {
}
```

---

### 29. **What are `map`, `filter`, and `reduce`?**

- `map()`: Transforms elements.
- `filter()`: Selects elements.
- `reduce()`: Combines elements.

```js
nums.map((x) => x * 2);
nums.filter((x) => x > 0);
nums.reduce((a, b) => a + b, 0);
```

---

### 30. **How does prototypal inheritance work?**

JavaScript objects inherit from a prototype. If a property isn't found on an object, it's looked up in the prototype chain.

---

### 31. **Difference between Object and Map?**

- `Object`: Keys must be strings or symbols.
- `Map`: Keys can be any type and preserves insertion order.

```js
let map = new Map();
map.set("key", "value");
```

---

### 32. **How to handle errors in JavaScript?**

- `try...catch`: Catches runtime errors.
- `throw`: Manually raise errors.
- `finally`: Runs always.

```js
try {
  throw new Error("Oops");
} catch (e) {
  console.error(e);
} finally {
  console.log("Done");
}
```

---

### 33. **Use of Object.freeze() and Object.seal()?**

- `Object.freeze()`: Prevents all changes.
- `Object.seal()`: Allows value change but not addition/removal of properties.

---

### 34. **What are higher-order functions?**

Functions that accept or return other functions.

```js
function apply(a, b, fn) {
  return fn(a, b);
}
```

---

### 35. **What is a pure function?**

A function that:

- Returns the same output for the same input.
- Has no side effects.

---

### 36. What is currying in JavaScript?

Transforming a function with multiple arguments into a sequence of unary functions.

```js
const add = (x) => (y) => x + y;
add(5)(3); // 8
```

---

### 37. What is the difference between debounce and throttle?

- **Debounce**: Delays execution until inactivity.
- **Throttle**: Limits execution to once per interval.

---

### 38. What are the different ways to clone an object?

- Shallow: `Object.assign({}, obj)` or `{...obj}`
- Deep: `JSON.parse(JSON.stringify(obj))`

---

### 39. How does garbage collection work in JavaScript?

JS automatically removes unreachable memory (no references left) via garbage collection.

---

### 40. What is the use of the `arguments` object?

Available inside functions, it holds all passed arguments.

```js
function sum() {
  return [...arguments].reduce((a, b) => a + b);
}
```

---

### 💠 Advanced JavaScript

### 51. **What is memory leak and how can you prevent it?**

A **memory leak** occurs when memory that is no longer needed is not released. In JavaScript, it can happen if there are lingering references to objects. To prevent it:

- Remove event listeners when they are no longer needed.
- Avoid global variables.
- Nullify references to unused objects or elements.

---

### 52. **Explain the concept of closures with an example.**

A **closure** occurs when a function retains access to variables from its lexical scope, even after the outer function has finished executing.

Example:

```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const increment = outer();
increment(); // 1
increment(); // 2
```

In this case, `inner()` has access to `counter` even after `outer()` has finished executing.

---

### 53. **What is the difference between Object.create() and constructor functions?**

- **Object.create()**: Creates a new object with a specified prototype.
- **Constructor functions**: A function used to create objects with `this` keyword and initialize their properties.

```js
// Object.create()
let obj1 = Object.create({ name: "John" });

// Constructor function
function Person(name) {
  this.name = name;
}
let person1 = new Person("John");
```

---

### 54. **How is async/await internally implemented?**

`async/await` is syntactic sugar over **Promises**. Internally, `async` functions return a Promise. When `await` is used, the function execution pauses until the Promise resolves or rejects, without blocking the main thread.

---

### 55. **What are generators in JavaScript?**

A **generator** is a function that can be paused and resumed, allowing for asynchronous-like behavior without callbacks or promises. It uses `function*` syntax and `yield` to pause execution.

Example:

```js
function* count() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = count();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
```

---

### 56. **What is the difference between deep equality and shallow equality?**

- **Shallow equality** compares object references, meaning if objects are nested, only the top-level properties are checked.
- **Deep equality** compares both top-level and nested properties recursively to ensure the objects are identical.

---

### 57. **What is the Temporal Dead Zone?**

The **Temporal Dead Zone (TDZ)** is the period between entering the scope and the actual declaration of a variable. During this time, accessing the variable results in a **ReferenceError**.

Example:

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
```

---

### 58. **What are WeakMap and WeakSet?**

- **WeakMap**: A collection of key-value pairs where keys are objects, and values can be any type. It does not prevent garbage collection of keys when they are no longer referenced.
- **WeakSet**: A collection of unique objects. Like `WeakMap`, it does not prevent garbage collection.

---

### 59. **What is tail call optimization?**

**Tail call optimization** (TCO) is an optimization technique where the last call in a function is optimized to avoid creating a new stack frame, allowing recursion without growing the call stack.

Example:

```js
function factorial(n, acc = 1) {
  if (n === 0) return acc;
  return factorial(n - 1, n * acc); // Tail call
}
```

---

### 60. **What is the module pattern in JavaScript?**

The **module pattern** encapsulates functionality and creates private variables and methods, exposing only the necessary parts of the module.

Example:

```js
const counterModule = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();
```

---

### 61. **What is Service Worker in JavaScript?**

A **Service Worker** is a script that runs in the background, separate from the web page, and is used for caching assets, handling push notifications, and enabling offline functionality.

---

### 62. **What is the difference between localStorage, sessionStorage, and cookies?**

- **localStorage**: Stores data with no expiration time. Data persists across sessions.
- **sessionStorage**: Stores data for the duration of the page session. It is cleared when the page is closed.
- **Cookies**: Stores data with a specific expiration date and can be sent with every HTTP request.

---

### 63. **How does JavaScript handle concurrency?**

JavaScript uses an **event loop** to handle concurrency. It runs tasks asynchronously by adding them to a queue and processes them when the call stack is empty.

---

### 64. **What is the difference between a microtask and a macrotask?**

- **Microtasks**: Small tasks that are executed after the current script finishes but before rendering. Promises' `.then()`, `.catch()`, and `.finally()` are microtasks.
- **Macrotasks**: Larger tasks like `setTimeout()` and `setInterval()`, which are executed after microtasks.

---

### 65. **What is the purpose of Symbol in JavaScript?**

A **Symbol** is a primitive data type used to create unique identifiers for object properties. It ensures that property names are unique, avoiding name collisions.

Example:

```js
const id = Symbol("id");
let obj = { [id]: 123 };
```

---

### 66. **What are dynamic imports?**

**Dynamic imports** allow you to load modules at runtime instead of during the initial loading. This helps with lazy loading.

Example:

```js
import("./myModule").then((module) => {
  module.default();
});
```

---

### 67. **What is the difference between eval() and Function() constructor?**

- **eval()**: Executes JavaScript code represented as a string.
- **Function() constructor**: Creates a new function from a string, but does not execute the code immediately.

---

### 68. **What is reflow and repaint in the browser?**

- **Reflow**: The process of recalculating the layout of the webpage (e.g., resizing elements).
- **Repaint**: The process of re-rendering elements without affecting the layout (e.g., changing color).

---

### 69. **What is serialization and deserialization?**

- **Serialization**: The process of converting an object into a format (usually JSON) that can be easily stored or transmitted.
- **Deserialization**: The process of converting the serialized format back into an object.

---

### 70. **How can you make a custom iterable object in JavaScript?**

To make an object iterable, you need to define the `Symbol.iterator` method. This method should return an iterator with `next()` method.

Example:

```js
const myIterable = {
  data: [1, 2, 3],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};
```

---

# interview-questions
