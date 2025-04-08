# 📘 Express Interview Questions

---

## 📚 Table of Contents

Here is the index for all the Express.js questions:

---

1. [What is Express.js and why is it used?](#1-what-is-expressjs-and-why-is-it-used)  
2. [How do you define a basic route in Express?](#2-how-do-you-define-a-basic-route-in-express)  
3. [What is middleware in Express and how does it work?](#3-what-is-middleware-in-express-and-how-does-it-work)  
4. [How do you handle 404 and global errors in Express?](#4-how-do-you-handle-404-and-global-errors-in-express)  
5. [What are route parameters and query parameters?](#5-what-are-route-parameters-and-query-parameters)  
6. [How do you implement route-level and application-level middleware?](#6-how-do-you-implement-route-level-and-application-level-middleware)  
7. [How do you connect Express with MongoDB?](#7-how-do-you-connect-express-with-mongodb)  
8. [How do you serve static files in Express?](#8-how-do-you-serve-static-files-in-express)  
9. [How do you use environment variables with Express?](#9-how-do-you-use-environment-variables-with-express)  
10. [How do you organize routes and controllers in a modular structure?](#10-how-do-you-organize-routes-and-controllers-in-a-modular-structure)  
11. [What is CORS and how do you enable it in Express?](#11-what-is-cors-and-how-do-you-enable-it-in-express)  
12. [What is body-parser and is it required in modern Express versions?](#12-what-is-body-parser-and-is-it-required-in-modern-express-versions)  
13. [How do you secure an Express app?](#13-how-do-you-secure-an-express-app)  
14. [What is the role of next() in middleware?](#14-what-is-the-role-of-next-in-middleware)  
15. [How do you implement rate-limiting and input validation?](#15-how-do-you-implement-rate-limiting-and-input-validation)  

---

Sure! Here's the reformatted version of your questions **(1–15)** using the consistent structure like in question 20, ideal for clean markdown rendering with working index linking:

---

### 1. What is Express.js and why is it used?

**Express.js** is a minimal and flexible web application framework for Node.js, designed to simplify the development of web and mobile applications. It handles routing, middleware, and connecting to databases, making it ideal for REST APIs and web servers.

---

### 2. How do you define a basic route in Express?

You can define a basic route using `app.get()`, `app.post()`, etc.:

```javascript
const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Hello, World!");
});
```

---

### 3. What is middleware in Express and how does it work?

**Middleware** functions have access to `req`, `res`, and `next()`. They can modify requests/responses, end the cycle, or pass to the next middleware.

```javascript
app.use((req, res, next) => {
  console.log("Middleware executed!");
  next();
});
```

---

### 4. How do you handle 404 and global errors in Express?

You handle 404 and global errors with two middleware functions:

```javascript
// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});
```

---

### 5. What are route parameters and query parameters?

**Route parameters** are dynamic segments in the URL:

```javascript
app.get("/user/:id", (req, res) => {
  res.send(req.params.id);
});
```

**Query parameters** are part of the URL after the `?`:

```javascript
app.get("/search", (req, res) => {
  res.send(req.query.query);
});
```

---

### 6. How do you implement route-level and application-level middleware?

```javascript
const express = require("express");
const app = express();
const middleware = (req, res, next) => { next(); };

// Application-level middleware
app.use(express.json());

// Route-level middleware
app.get("/profile", middleware, (req, res) => {
  res.send("Profile");
});
```

---

### 7. How do you connect Express with MongoDB?

Use **Mongoose** to connect:

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

---

### 8. How do you serve static files in Express?

Use `express.static` middleware:

```javascript
const express = require("express");
const app = express();

app.use(express.static("public"));
```

---

### 9. How do you use environment variables with Express?

Use the `dotenv` package:

```javascript
require("dotenv").config();
console.log(process.env.MY_VARIABLE);
```

---

### 10. How do you organize routes and controllers in a modular structure?

**Modular Routing Example**:

```javascript
// routes/user.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("User Route"));

module.exports = router;

// app.js
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);
```

---

### 11. What is CORS and how do you enable it in Express?

Enable **CORS** to allow cross-origin requests:

```javascript
const cors = require("cors");
app.use(cors());
```

---

### 12. What is body-parser and is it required in modern Express versions?

Not required in modern Express; use `express.json()`:

```javascript
app.use(express.json());
```

---

### 13. How do you secure an Express app?

Use security middlewares like **helmet**, **CORS**, **rate-limiting**, etc.:

```javascript
const helmet = require("helmet");
app.use(helmet());
```

---

### 14. What is the role of next() in middleware?

`next()` passes control to the next middleware in the stack. If omitted, the request can hang.

```javascript
app.use((req, res, next) => {
  console.log("This will go to the next middleware");
  next();
});
```

---

### 15. How do you implement rate-limiting and input validation?

Use **express-rate-limit** and validation libraries like **Joi** or **Zod**:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
```

---
