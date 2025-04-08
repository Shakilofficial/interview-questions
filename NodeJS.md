# 📘 Node.js Interview Questions

---

## 📚 Table of Contents

1. [What is Node.js and how is it different from traditional server-side platforms?](#1-what-is-nodejs-and-how-is-it-different-from-traditional-server-side-platforms)
2. [What is the event loop in Node.js?](#2-what-is-the-event-loop-in-nodejs)
3. [Explain how non-blocking I/O works in Node.js.](#3-explain-how-non-blocking-io-works-in-nodejs)
4. [What are global objects in Node.js?](#4-what-are-global-objects-in-nodejs)
5. [What is the difference between require and import?](#5-what-is-the-difference-between-require-and-import)
6. [What are streams in Node.js? Name their types.](#6-what-are-streams-in-nodejs-name-their-types)
7. [What is the difference between process.nextTick() and setImmediate()?](#7-what-is-the-difference-between-processnexttick-and-setimmediate)
8. [How does Node.js handle child processes?](#8-how-does-nodejs-handle-child-processes)
9. [How do you handle file system operations in Node.js?](#9-how-do-you-handle-file-system-operations-in-nodejs)
10. [What are buffers in Node.js?](#10-what-are-buffers-in-nodejs)
11. [How do you handle exceptions and errors in Node.js?](#11-how-do-you-handle-exceptions-and-errors-in-nodejs)
12. [What is middleware in Node.js context?](#12-what-is-middleware-in-nodejs-context)
13. [What are some common built-in modules in Node.js?](#13-what-are-some-common-built-in-modules-in-nodejs)
14. [How do you manage environment variables in Node.js?](#14-how-do-you-manage-environment-variables-in-nodejs)
15. [What is the purpose of the package.json file?](#15-what-is-the-purpose-of-the-packagejson-file)
16. [What is the difference between dependencies and devDependencies?](#16-what-is-the-difference-between-dependencies-and-devdependencies)
17. [What are some common npm scripts?](#17-what-are-some-common-npm-scripts)
18. [How do you use ES Modules in Node.js?](#18-how-do-you-use-es-modules-in-nodejs)
19. [How do you create and use your own module in Node.js?](#19-how-do-you-create-and-use-your-own-module-in-nodejs)
20. [How do you implement a simple HTTP server using the http module?](#20-how-do-you-implement-a-simple-http-server-using-the-http-module)

---

### 1. What is Node.js and how is it different from traditional server-side platforms?

Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript code on the server-side. Unlike traditional server-side platforms, Node.js is event-driven, non-blocking, and lightweight, making it highly efficient for handling concurrent requests. Traditional platforms like PHP or Java are typically synchronous and can be slower when handling large numbers of requests, while Node.js can handle thousands of concurrent requests with ease.

---

### 2. What is the event loop in Node.js?

The event loop is the mechanism that handles asynchronous operations in Node.js. It processes tasks from the event queue, executing them in a non-blocking manner. When there are no tasks in the queue, the event loop continuously checks for new tasks to process, allowing Node.js to handle multiple I/O operations without blocking the main thread.

---

### 3. Explain how non-blocking I/O works in Node.js.

Non-blocking I/O in Node.js allows operations like reading files, querying databases, and making HTTP requests to run asynchronously. This means the main thread doesn't get blocked while waiting for these operations to complete. Instead, Node.js registers a callback to be invoked when the operation finishes, enabling other tasks to run in the meantime.

---

### 4. What are global objects in Node.js?

Global objects in Node.js are objects that are accessible throughout the entire Node.js runtime. These objects can be accessed in any module without needing to be explicitly imported. Some examples include:

- `global`: The global object, similar to `window` in browsers.
- `process`: Provides information about the current Node.js process.
- `__dirname`: The directory name of the current module.
- `__filename`: The file name of the current module.

---

### 5. What is the difference between require and import?

- `require`: A built-in function used to import modules in Node.js (CommonJS syntax).

  ```javascript
  const fs = require("fs");
  ```

- `import`: A part of ES Modules (ESM) syntax, which is now supported in newer versions of Node.js. It allows importing modules using the `import` keyword.

  ```javascript
  import fs from "fs";
  ```

---

### 6. What are streams in Node.js? Name their types.

Streams in Node.js are objects that allow reading or writing data in a continuous flow, enabling efficient handling of large amounts of data. There are four types of streams:

- **Readable**: Used for reading data (e.g., `fs.createReadStream()`).
- **Writable**: Used for writing data (e.g., `fs.createWriteStream()`).
- **Duplex**: Streams that are both readable and writable (e.g., TCP sockets).
- **Transform**: A type of duplex stream where the data is modified as it's read or written (e.g., `zlib.createGzip()`).

---

### 7. What is the difference between process.nextTick() and setImmediate()?

- **`process.nextTick()`**: Schedules a callback to be invoked in the current phase of the event loop, before any I/O operations.

  ```javascript
  process.nextTick(() => console.log("nextTick"));
  ```

- **`setImmediate()`**: Schedules a callback to be invoked in the next iteration of the event loop, after I/O events.

  ```javascript
  setImmediate(() => console.log("setImmediate"));
  ```

---

### 8. How does Node.js handle child processes?

Node.js uses the `child_process` module to handle child processes. This allows Node.js to spawn new processes, execute system commands, and handle the output. You can create child processes using methods like `spawn()`, `exec()`, or `fork()`.

---

### 9. How do you handle file system operations in Node.js?

In Node.js, the `fs` module is used for interacting with the file system. You can read, write, and manipulate files using methods like `fs.readFile()`, `fs.writeFile()`, and `fs.appendFile()`. Node.js provides both synchronous and asynchronous methods to handle these operations.

```javascript
const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### 10. What are buffers in Node.js?

Buffers in Node.js are used to handle binary data directly in memory. They are often used when working with binary streams, file I/O, or network communication. A buffer is a temporary storage area for binary data.

```javascript
const buffer = Buffer.from("Hello World");
console.log(buffer);
```

---

### 11. How do you handle exceptions and errors in Node.js?

Node.js provides a standard error-handling mechanism using `try-catch` blocks for synchronous code and error-first callbacks for asynchronous code. Additionally, for uncaught exceptions, Node.js provides an `uncaughtException` event that can be used to handle unhandled exceptions globally.

```javascript
process.on("uncaughtException", (err) => {
  console.error("Caught exception: ", err);
});
```

---

### 12. What is middleware in Node.js context?

Middleware in Node.js, particularly in the context of Express.js, refers to functions that process requests before they reach the final route handler. Middleware can be used for various tasks such as authentication, logging, and error handling.

```javascript
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

---

### 13. What are some common built-in modules in Node.js?

Node.js provides several built-in modules that simplify common tasks, including:

- `fs`: File system operations
- `http`: HTTP server and client
- `path`: Path utilities
- `url`: URL resolution and parsing
- `events`: Event handling

---

### 14. How do you manage environment variables in Node.js?

You can manage environment variables in Node.js using the `process.env` object, which provides access to environment variables. For more complex management, libraries like `dotenv` can be used to load environment variables from `.env` files.

```javascript
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.DB_HOST);
```

---

### 15. What is the purpose of the package.json file?

The `package.json` file holds metadata about the project, including dependencies, scripts, and configuration. It is essential for managing and installing project dependencies using npm or yarn.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

---

### 16. What is the difference between dependencies and devDependencies?

- **Dependencies**: Libraries required for the application to run in production.
- **devDependencies**: Libraries required only for development purposes (e.g., testing, build tools).

---

### 17. What are some common npm scripts?

Common npm scripts include:

- `npm start`: Starts the application.
- `npm run build`: Compiles the application (e.g., for production).
- `npm test`: Runs tests.
- `npm install`: Installs dependencies.

---

### 18. How do you use ES Modules in Node.js?

ES Modules (ESM) are supported in newer versions of Node.js. To use them, you need to either set `"type": "module"` in your `package.json` or use `.mjs` file extensions.

```javascript
// In package.json
{
  "type": "module"
}

// Importing ES modules
import express from 'express';
```

---

### 19. How do you create and use your own module in Node.js?

You can create your own module by defining a file with the necessary functions or objects and exporting them using `module.exports` or `exports`.

```javascript
// myModule.js
module.exports = {
  greet: () => console.log("Hello World"),
};

// In another file
const myModule = require("./myModule");
myModule.greet(); // Outputs: Hello World
```

---

### 20. How do you implement a simple HTTP server using the http module?

You can create a basic HTTP server using the `http` module as follows:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

---
