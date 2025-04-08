# 📘 Mongoose and MongoDB Interview Questions

## 📚 Table of Contents

1. [What is Mongoose and how is it different from MongoDB?](#1-what-is-mongoose-and-how-is-it-different-from-mongodb)
2. [What is a schema in Mongoose and how do you define one?](#2-what-is-a-schema-in-mongoose-and-how-do-you-define-one)
3. [What is a model in Mongoose and how is it related to a schema?](#3-what-is-a-model-in-mongoose-and-how-is-it-related-to-a-schema)
4. [How do you connect to MongoDB using Mongoose?](#4-how-do-you-connect-to-mongodb-using-mongoose)
5. [What are the most commonly used schema types in Mongoose?](#5-what-are-the-most-commonly-used-schema-types-in-mongoose)
6. [What are virtuals in Mongoose?](#6-what-are-virtuals-in-mongoose)
7. [How do you set default values in a schema?](#7-how-do-you-set-default-values-in-a-schema)
8. [What are schema validation options in Mongoose?](#8-what-are-schema-validation-options-in-mongoose)
9. [What are middleware/hooks in Mongoose? Explain pre and post hooks.](#9-what-are-middlewarehooks-in-mongoose-explain-pre-and-post-hooks)
10. [How do you populate referenced documents in Mongoose?](#10-how-do-you-populate-referenced-documents-in-mongoose)
11. [What is the difference between .save() and .create()?](#11-what-is-the-difference-between-save-and-create)
12. [How do you update a document in Mongoose? (e.g., findByIdAndUpdate)](#12-how-do-you-update-a-document-in-mongoose-eg-findbyidandupdate)
13. [What are the differences between lean() and exec() in Mongoose?](#13-what-are-the-differences-between-lean-and-exec-in-mongoose)
14. [How do you delete a document in Mongoose?](#14-how-do-you-delete-a-document-in-mongoose)
15. [What is the use of timestamps in Mongoose?](#15-what-is-the-use-of-timestamps-in-mongoose)
16. [How can you add custom methods to a schema?](#16-how-can-you-add-custom-methods-to-a-schema)
17. [How does Mongoose handle indexing?](#17-how-does-mongoose-handle-indexing)
18. [What is the difference between required: true and validate?](#18-what-is-the-difference-between-required-true-and-validate)
19. [How do you use async/await with Mongoose queries?](#19-how-do-you-use-asyncawait-with-mongoose-queries)
20. [How do you structure Mongoose models in a scalable project?](#20-how-do-you-structure-mongoose-models-in-a-scalable-project)

---

### 1. What is Mongoose and how is it different from MongoDB?

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a higher-level abstraction over MongoDB, making it easier to work with data in MongoDB by providing features like schema validation, data modeling, and middleware support. Unlike MongoDB, which is just a NoSQL database, Mongoose helps in structuring your data with schemas and models.

---

### 2. What is a schema in Mongoose and how do you define one?

A schema in Mongoose defines the structure of a MongoDB document, including fields, types, and validation rules. You define it using `mongoose.Schema()`.

Example:

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: { type: Number, default: 18 },
});
```

---

### 3. What is a model in Mongoose and how is it related to a schema?

A model in Mongoose is a wrapper around a schema that allows you to interact with a MongoDB collection. A schema defines the structure of the document, while a model provides methods to interact with the database (e.g., saving, querying, updating).

Example:

```js
const User = mongoose.model("User", userSchema);
```

---

### 4. How do you connect to MongoDB using Mongoose?

To connect to MongoDB using Mongoose, use the `mongoose.connect()` method, passing the database URI.

Example:

```js
try {
    await mongoose.connect(config.database_uri);
    console.log('🌱 Database connected successfully ✅');
  } catch (err) {
    console.error('🚨 Database connection failed ❌:', err);
    process.exit(1);
  }
```

---

### 5. What are the most commonly used schema types in Mongoose?

Commonly used schema types in Mongoose include:

- `String`: For textual data.
- `Number`: For numerical values.
- `Boolean`: For true/false values.
- `Date`: For date and time.
- `Buffer`: For binary data.
- `ObjectId`: For referencing other documents.
- `Array`: For arrays of values.

Example:

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  active: Boolean,
  createdAt: Date,
});
```

---

### 6. What are virtuals in Mongoose?

Virtuals in Mongoose are fields that do not get persisted in the database but are computed dynamically. They are useful for creating properties that can be derived from existing data in the document. You can define virtuals using `.virtual()` on a schema.

```js
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```

---

### 7. How do you set default values in a schema?

You can set default values in Mongoose schema by using the `default` property for a field.

```js
const userSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  age: { type: Number, default: 18 },
});
```

---

### 8. What are schema validation options in Mongoose?

Mongoose allows schema validation through properties like `required`, `min`, `max`, `enum`, `match`, and `validate`. These help in ensuring data integrity before saving to the database.

```js
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  age: { type: Number, min: 18 },
});
```

---

### 9. What are middleware/hooks in Mongoose? Explain pre and post hooks.

Middleware (also called hooks) are functions that run at specific points during the lifecycle of a Mongoose document.

- **Pre hooks** run before an action, like saving a document.
- **Post hooks** run after an action, like after a document is saved.

```js
userSchema.pre("save", function (next) {
  console.log("Saving user...");
  next();
});

userSchema.post("save", function (doc) {
  console.log("User saved:", doc);
});
```

---

### 10. How do you populate referenced documents in Mongoose?

You can populate referenced documents using the `.populate()` method. This is useful when you have a reference to another document via `ObjectId`.

```js
const userSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

userSchema.populate("posts");
```

---

### 11. What is the difference between .save() and .create()?

- `.save()` is used on an instance of a model, saving the specific document to the database.
- `.create()` is used to create and save a new document in one step.

```js
const user = new User({ name: "John" });
user.save(); // saves the specific user instance

User.create({ name: "Jane" }); // creates and saves a new user
```

---

### 12. How do you update a document in Mongoose? (e.g., findByIdAndUpdate)

To update a document, you can use methods like `findByIdAndUpdate()` or `updateOne()`. These allow you to find a document by ID and update specific fields.

```js
User.findByIdAndUpdate(id, { age: 25 }, { new: true }).then((updatedUser) =>
  console.log(updatedUser)
);
```

---

### 13. What are the differences between lean() and exec() in Mongoose?

- `lean()` returns plain JavaScript objects rather than Mongoose document instances, making it faster.
- `exec()` executes the query and returns a promise, allowing for more control and handling.

```js
User.find({}).lean(); // Returns plain JS object
User.find({})
  .exec()
  .then((result) => console.log(result)); // Returns promise
```

---

### 14. How do you delete a document in Mongoose?

You can delete a document using methods like `findByIdAndDelete()` or `deleteOne()`.

```js
User.findByIdAndDelete(id).then(() => console.log("User deleted"));
```

---

### 15. What is the use of timestamps in Mongoose?

Timestamps automatically add `createdAt` and `updatedAt` fields to documents. They are helpful for tracking when documents were created and last updated.

```js
const userSchema = new mongoose.Schema({ name: String }, { timestamps: true });
```

---

### 16. How can you add custom methods to a schema?

Custom methods can be added to a Mongoose schema using `.methods`. These methods can be called on model instances.

```js
userSchema.methods.sayHello = function () {
  console.log(`Hello, ${this.name}`);
};
```

---

### 17. How does Mongoose handle indexing?

Mongoose supports indexing to improve query performance. You can define indexes using `.index()` on schema fields.

```js
userSchema.index({ email: 1 }, { unique: true });
```

---

### 18. What is the difference between required: true and validate?

- `required: true` ensures the field must be provided when creating or updating the document.
- `validate` allows custom validation logic, providing more flexibility (e.g., checking if the email follows a valid format).

```js
email: { type: String, required: true, validate: /\S+@\S+\.\S+/ }
```

---

### 19. How do you use async/await with Mongoose queries?

You can use async/await with Mongoose queries by marking the function as `async` and awaiting Mongoose operations.

```js
const user = await User.findOne({ email: "john@example.com" });
```

---

### 20. How do you structure Mongoose models in a scalable project?

To structure Mongoose models in a scalable way:

1. Place each model in its own file.
2. Use separate files for schemas, models, and services.
3. Use a `models/` directory to keep the models organized.
4. Apply modular routing and service patterns to handle business logic.

---
