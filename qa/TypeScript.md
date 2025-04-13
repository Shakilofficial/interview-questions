# 📘 TypeScript Interview Questions

---
## 📚 Table of Contents

### 🔹 Basic TypeScript

1. **[What is TypeScript and why should we use it?](#1-what-is-typescript-and-why-should-we-use-it)**
2. **[What are the differences between TypeScript and JavaScript?](#2-what-are-the-differences-between-typescript-and-javascript)**
3. **[How do you declare variables and types in TypeScript?](#3-how-do-you-declare-variables-and-types-in-typescript)**
4. **[What is type inference?](#4-what-is-type-inference)**
5. **[What is a union type in TypeScript?](#5-what-is-a-union-type-in-typescript)**
6. **[What are literal types?](#6-what-are-literal-types)**
7. **[What are type aliases?](#7-what-are-type-aliases)**
8. **[What are interfaces in TypeScript?](#8-what-are-interfaces-in-typescript)**
9. **[What is the difference between interface and type?](#9-what-is-the-difference-between-interface-and-type)**
10. **[How do you define optional properties in TypeScript?](#10-how-do-you-define-optional-properties-in-typescript)**

### 🔸 Intermediate TypeScript

11. **[What is an enum in TypeScript?](#11-what-is-an-enum-in-typescript)**
12. **[How do generics work in TypeScript?](#12-how-do-generics-work-in-typescript)**
13. **[What is a tuple in TypeScript?](#13-what-is-a-tuple-in-typescript)**
14. **[How do you extend interfaces or types?](#14-how-do-you-extend-interfaces-or-types)**
15. **[How do you define function types in TypeScript?](#15-how-do-you-define-function-types-in-typescript)**
16. **[What is unknown vs any?](#16-what-is-unknown-vs-any)**
17. **[How does TypeScript handle type assertion?](#17-how-does-typescript-handle-type-assertion)**
18. **[What are utility types like Partial, Pick, Omit?](#18-what-are-utility-types-like-partial-pick-omit)**
19. **[How can you handle nullable types in TypeScript?](#19-how-can-you-handle-nullable-types-in-typescript)**
20. **[What is the never type and when would you use it?](#20-what-is-the-never-type-and-when-would-you-use-it)**

### 🔸 Advanced TypeScript

21. **[How do you write a generic function that works with any type?](#21-how-do-you-write-a-generic-function-that-works-with-any-type)**
22. **[What are conditional types in TypeScript?](#22-what-are-conditional-types-in-typescript)**
23. **[What is keyof and how do you use it?](#23-what-is-keyof-and-how-do-you-use-it)**
24. **[How do mapped types work in TypeScript?](#24-how-do-mapped-types-work-in-typescript)**
25. **[What is the difference between interface merging and type redefinition?](#25-what-is-the-difference-between-interface-merging-and-type-redefinition)**
26. **[How do you work with third-party types in DefinitelyTyped (@types)?](#26-how-do-you-work-with-third-party-types-in-definitelytyped-typess)**
27. **[How does type narrowing work?](#27-how-does-type-narrowing-work)**
28. **[How do you create a type from a value using typeof?](#28-how-do-you-create-a-type-from-a-value-using-typeof)**
29. **[How do you use Zod or Yup for runtime validation with TypeScript?](#29-how-do-you-use-zod-or-yup-for-runtime-validation-with-typescript)**
30. **[How can you configure strict typing rules in tsconfig.json?](#30-how-can-you-configure-strict-typing-rules-in-tsconfigjson)**

---

## **Answers**

### 1. What is TypeScript and why should we use it?

TypeScript is a statically typed superset of JavaScript that adds types to JavaScript, making it easier to detect errors at compile time rather than at runtime. We use it to improve code quality, enhance development with better tooling (like autocomplete), and increase maintainability.

---

### 2. What are the differences between TypeScript and JavaScript?

- **TypeScript**: Statically typed, supports features like interfaces, generics, and type inference. It compiles down to JavaScript.
- **JavaScript**: Dynamically typed, doesn't have built-in type safety. It's the language that runs directly in browsers or Node.js.

---

### 3. How do you declare variables and types in TypeScript?

In TypeScript, we declare variables with a specific type like so:

```typescript
let name: string = "John"; // Declaring a string
let age: number = 25; // Declaring a number
```

---

### 4. What is type inference?

Type inference in TypeScript means that the compiler can automatically determine the type of a variable based on its value without explicitly specifying the type.

```typescript
let name = "John"; // TypeScript infers that 'name' is of type string.
```

---

### 5. What is a union type in TypeScript?

A union type allows a variable to hold multiple types. It's declared using the `|` operator.

```typescript
let value: string | number = "Hello";
value = 42; // Valid, as 'value' can also be a number
```

---

### 6. What are literal types?

Literal types allow a variable to be assigned only specific values.

```typescript
let status: "active" | "inactive" = "active"; // Only 'active' or 'inactive' is allowed
```

---

### 7. What are type aliases?

Type aliases create a new name for a type.

```typescript
type Name = string;
let username: Name = "Jane";
```

---

### 8. What are interfaces in TypeScript?

An interface in TypeScript defines a structure for an object. It is similar to a type alias but used specifically for object shapes.

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "Alice", age: 30 };
```

---

### 9. What is the difference between interface and type?

- **Interface**: Primarily used for objects, can be extended or merged.
- **Type**: Can represent primitive, object, or union types. Type is more flexible but less specialized for objects.

---

### 10. How do you define optional properties in TypeScript?

Optional properties in TypeScript are defined using `?` after the property name.

```typescript
interface Person {
  name: string;
  age?: number; // age is optional
}
```

---

### 11. What is an enum in TypeScript?

An enum is a way to define a set of named constants.

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up; // move is 1
```

---

### 12. How do generics work in TypeScript?

Generics allow you to write flexible and reusable code by providing type parameters that can be specified later.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity(5); // result is inferred as type 'number'
```

---

### 13. What is a tuple in TypeScript?

A tuple is an array with a fixed number of elements where each element can have a different type.

```typescript
let person: [string, number] = ["John", 30]; // Tuple with string and number
```

---

### 14. How do you extend interfaces or types?

You can extend interfaces using the `extends` keyword, or use intersection types (`&`) for types.

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let dog: Dog = { name: "Buddy", breed: "Labrador" };
```

---

### 15. How do you define function types in TypeScript?

You can define function types with parameter and return types.

```typescript
let greet: (name: string) => string = (name) => `Hello, ${name}`;
```

---

### 16. What is unknown vs any?

- **any**: Can be any type, and TypeScript doesn't check it at all.
- **unknown**: Like `any`, but requires type checking before performing operations on it.

---

### 17. How does TypeScript handle type assertion?

Type assertion is a way of telling the compiler to treat a value as a certain type.

```typescript
let value: any = "Hello";
let length: number = (value as string).length; // Using 'as' for type assertion
```

---

### 18. What are utility types like Partial, Pick, Omit?

- **Partial**: Makes all properties optional.
- **Pick**: Selects a subset of properties.
- **Omit**: Excludes specific properties.

---

### 19. How can you handle nullable types in TypeScript?

You can handle nullable types by explicitly using `null` or `undefined`, or by using union types to allow for nullability.

```typescript
let name: string | null = null; // Allows null as a valid value
let age: number | undefined; // 'undefined' is allowed
```

You can also use the `?` operator in function parameters or object properties to make them nullable.

```typescript
function greet(name?: string) {
  // 'name' is optional (can be undefined)
  console.log(name?.toUpperCase()); // Safe access using optional chaining
}
```

---

### 20. What is the never type and when would you use it?

The `never` type represents a value that never occurs. It’s typically used for functions that never return (e.g., throwing an error or an infinite loop).

```typescript
function throwError(message: string): never {
  throw new Error(message); // Function never returns
}
```

---

### 21. How do you write a generic function that works with any type?

You can write a generic function by using the `<T>` placeholder, which will accept any type at runtime.

```typescript
function identity<T>(value: T): T {
  return value; // 'T' can be any type
}

let stringValue = identity("Hello");
let numberValue = identity(42);
```

---

### 22. What are conditional types in TypeScript?

Conditional types allow you to define types that depend on a condition. They are defined using the `extends` keyword.

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

let result: IsString<string>; // "Yes"
let result2: IsString<number>; // "No"
```

---

### 23. What is keyof and how do you use it?

`keyof` is a TypeScript operator that takes an object type and returns a union type of its keys.

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

You can use `keyof` to restrict a variable to a key from an object.

---

### 24. How do mapped types work in TypeScript?

Mapped types allow you to create new types by transforming the properties of an existing type. You can iterate over the keys of a type and apply a transformation to each key.

```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Person {
  name: string;
  age: number;
}

const readonlyPerson: ReadOnly<Person> = { name: "John", age: 30 };
readonlyPerson.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
```

---

### 25. What is the difference between interface merging and type redefinition?

- **Interface Merging**: TypeScript allows multiple interfaces with the same name to be merged automatically.

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = { name: "Alice", age: 25 }; // Merged interface
```

- **Type Redefinition**: Types cannot be merged, and redefining a type will result in an error.

```typescript
type Person = { name: string };
// Redefining causes an error
type Person = { age: number }; // Error: Duplicate identifier 'Person'.
```

---

### 26. How do you work with third-party types in DefinitelyTyped (@types)?

To use third-party types from the `@types` repository, install the package via npm:

```bash
npm install @types/library-name
```

Then you can import the types directly in your project.

```typescript
import { LibraryType } from "library-name";
```

---

### 27. How does type narrowing work?

Type narrowing is the process of refining a variable's type based on control flow and checks like `typeof` or `instanceof`.

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value is narrowed to string
  } else {
    console.log(value.toFixed(2)); // value is narrowed to number
  }
}
```

---

### 28. How do you create a type from a value using typeof?

The `typeof` operator can be used to create a type from a value.

```typescript
let person = { name: "Alice", age: 30 };
type PersonType = typeof person; // PersonType will be { name: string; age: number; }
```

---

### 29. How do you use Zod or Yup for runtime validation with TypeScript?

- **Zod**: A TypeScript-first schema declaration and validation library.

```typescript
import { z } from "zod";

const PersonSchema = z.object({
  name: z.string(),
  age: z.number().positive(),
});

const person = { name: "Alice", age: 30 };
PersonSchema.parse(person); // Throws error if invalid
```

- **Yup**: A runtime schema validator.

```typescript
import * as Yup from "yup";

const personSchema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.number().required().positive(),
});

personSchema.validateSync({ name: "Alice", age: 30 }); // Throws error if invalid
```

---

### 30. How can you configure strict typing rules in tsconfig.json?

You can enable strict typing rules in `tsconfig.json` by setting `"strict": true`. This turns on all strict type-checking options.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Alternatively, you can enable individual strict checks:

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

---
