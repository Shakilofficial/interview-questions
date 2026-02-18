# 📘 Prisma Interview Questions

---

## 📚 Table of Contents

1. [What is Prisma and how does it work?](#1-what-is-prisma-and-how-does-it-work)
2. [What is the difference between Prisma and an ORM?](#2-what-is-the-difference-between-prisma-and-an-orm)
3. [What is a Prisma schema and what does it contain?](#3-what-is-a-prisma-schema-and-what-does-it-contain)
4. [How do you define models in Prisma?](#4-how-do-you-define-models-in-prisma)
5. [What is Prisma Client and how do you use it?](#5-what-is-prisma-client-and-how-do-you-use-it)
6. [How do you set up Prisma in a Node.js project?](#6-how-do-you-set-up-prisma-in-a-nodejs-project)
7. [What are relationships in Prisma?](#7-what-are-relationships-in-prisma)
8. [How do you implement one-to-many relationships in Prisma?](#8-how-do-you-implement-one-to-many-relationships-in-prisma)
9. [How do you implement many-to-many relationships in Prisma?](#9-how-do-you-implement-many-to-many-relationships-in-prisma)
10. [What is Prisma Migrate and how do you use it?](#10-what-is-prisma-migrate-and-how-do-you-use-it)
11. [What are field and model attributes in Prisma?](#11-what-are-field-and-model-attributes-in-prisma)
12. [How do you perform CRUD operations with Prisma?](#12-how-do-you-perform-crud-operations-with-prisma)
13. [What are filters and how do you use them in Prisma?](#13-what-are-filters-and-how-do-you-use-them-in-prisma)
14. [How do you handle transactions in Prisma?](#14-how-do-you-handle-transactions-in-prisma)
15. [What is Prisma Studio and what is its purpose?](#15-what-is-prisma-studio-and-what-is-its-purpose)
16. [How do you implement pagination in Prisma?](#16-how-do-you-implement-pagination-in-prisma)
17. [What is middleware in Prisma and how do you use it?](#17-what-is-middleware-in-prisma-and-how-do-you-use-it)
18. [How do you handle timestamps and default values in Prisma?](#18-how-do-you-handle-timestamps-and-default-values-in-prisma)
19. [What are the differences between Prisma and TypeORM?](#19-what-are-the-differences-between-prisma-and-typeorm)
20. [How do you test Prisma applications?](#20-how-do-you-test-prisma-applications)

---

### 1. What is Prisma and how does it work?

**Prisma** is a next-generation ORM (Object-Relational Mapping) that provides a type-safe database client. It works by:

1. Defining data models in a schema file.
2. Running migrations to create database tables.
3. Using Prisma Client to interact with the database in a type-safe manner.

Prisma bridges the gap between database and application code with an intuitive API and automatic type generation.

---

### 2. What is the difference between Prisma and an ORM?

**ORM (Object-Relational Mapping)** is a general pattern for converting between databases and objects. **Prisma** is a modern ORM implementation that offers:

- **Type Safety**: Full TypeScript support with auto-generated types.
- **Developer Experience**: Elegant API with auto-completion.
- **Data Modeling**: Declarative schema definition.
- **Migrations**: Built-in migration system.
- **Studio**: Visual interface to explore data.

Traditional ORMs like TypeORM and Sequelize require more manual setup.

---

### 3. What is a Prisma schema and what does it contain?

A **Prisma schema** (prisma/schema.prisma) is a declarative configuration file that defines:

- **Data Source**: Database connection information.
- **Generator**: Which tools to generate (Prisma Client, etc.).
- **Models**: Data models representing database tables.

Example:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

---

### 4. How do you define models in Prisma?

Models are defined using the `model` keyword and represent database tables:

```prisma
model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  age       Int
  isActive  Boolean   @default(true)
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  posts     Post[]  // Relationship
}

model Post {
  id        Int       @id @default(autoincrement())
  title     String
  content   String
  published Boolean   @default(false)
  authorId  Int
  author    User      @relation(fields: [authorId], references: [id])
}
```

---

### 5. What is Prisma Client and how do you use it?

**Prisma Client** is the auto-generated database client that allows you to query the database in a type-safe way:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create
const user = await prisma.user.create({
  data: { name: "John", email: "john@example.com" },
});

// Read
const users = await prisma.user.findMany();

// Update
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Jane" },
});

// Delete
await prisma.user.delete({ where: { id: 1 } });
```

---

### 6. How do you set up Prisma in a Node.js project?

Install dependencies:

```bash
npm install @prisma/client
npm install -D prisma
```

Initialize Prisma:

```bash
npx prisma init
```

This creates:

- `.env`: Environment variables file with `DATABASE_URL`.
- `prisma/schema.prisma`: Schema configuration file.

Configure the database URL in `.env` and define models in the schema.

---

### 7. What are relationships in Prisma?

Relationships connect models together. Types of relationships:

- **One-to-Many**: One user has many posts.
- **Many-to-One**: Many posts belong to one user.
- **Many-to-Many**: Many users have many roles.
- **One-to-One**: One user has one profile.

Relationships are defined using relation fields and the `@relation` attribute.

---

### 8. How do you implement one-to-many relationships in Prisma?

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  posts Post[]  // One user has many posts
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
```

Query with relations:

```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }, // Include related posts
});
```

---

### 9. How do you implement many-to-many relationships in Prisma?

For many-to-many relationships, create a junction table:

```prisma
model User {
  id       Int              @id @default(autoincrement())
  name     String
  roles    UserRole[]
}

model Role {
  id    Int        @id @default(autoincrement())
  name  String
  users UserRole[]
}

model UserRole {
  id     Int  @id @default(autoincrement())
  userId Int
  roleId Int
  user   User @relation(fields: [userId], references: [id])
  role   Role @relation(fields: [roleId], references: [id])

  @@unique([userId, roleId])
}
```

Query:

```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { roles: { include: { role: true } } },
});
```

---

### 10. What is Prisma Migrate and how do you use it?

**Prisma Migrate** is a tool that generates and applies database migrations based on schema changes:

Create a migration:

```bash
npx prisma migrate dev --name add_user_table
```

Apply migrations to production:

```bash
npx prisma migrate deploy
```

Reset the database (development only):

```bash
npx prisma migrate reset
```

---

### 11. What are field and model attributes in Prisma?

**Field Attributes** define properties of a field:

- `@id`: Primary key
- `@unique`: Unique constraint
- `@default(value)`: Default value
- `@updatedAt`: Auto-update timestamp
- `@db.VarChar(255)`: Map to database type

**Model Attributes** define properties of the entire model:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String

  @@index([email])  // Create index
  @@map("users")   // Map to different table name
}
```

---

### 12. How do you perform CRUD operations with Prisma?

**Create**:

```typescript
const user = await prisma.user.create({
  data: { name: "John", email: "john@example.com" },
});
```

**Read**:

```typescript
const user = await prisma.user.findUnique({ where: { id: 1 } });
const users = await prisma.user.findMany();
const first = await prisma.user.findFirst({ where: { name: "John" } });
```

**Update**:

```typescript
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Jane" },
});
```

**Delete**:

```typescript
await prisma.user.delete({ where: { id: 1 } });
```

---

### 13. What are filters and how do you use them in Prisma?

Filters allow you to query data with conditions:

```typescript
// Comparison
const users = await prisma.user.findMany({
  where: {
    age: { gte: 18 }, // greater than or equal
  },
});

// Multiple conditions
const posts = await prisma.post.findMany({
  where: {
    AND: [{ author: { name: "John" } }, { published: true }],
  },
});

// String filters
const users = await prisma.user.findMany({
  where: { name: { contains: "john", mode: "insensitive" } },
});
```

---

### 14. How do you handle transactions in Prisma?

Use `$transaction()` to execute multiple operations atomically:

```typescript
const result = await prisma.$transaction([
  prisma.user.create({ data: { name: "John" } }),
  prisma.post.create({ data: { title: "Hello" } }),
]);

// Or with callback
const result = await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: { name: "John" } });
  const post = await tx.post.create({
    data: { title: "Hello", authorId: user.id },
  });
  return { user, post };
});
```

---

### 15. What is Prisma Studio and what is its purpose?

**Prisma Studio** is a visual database browser that allows you to view and edit data:

```bash
npx prisma studio
```

It provides:

- Visual interface to browse data
- Edit records directly
- View relationships
- Test queries

---

### 16. How do you implement pagination in Prisma?

Use `skip` and `take` for pagination:

```typescript
const pageSize = 10;
const page = 1;

const users = await prisma.user.findMany({
  skip: (page - 1) * pageSize,
  take: pageSize,
  orderBy: { id: "desc" },
});

// Get total count
const total = await prisma.user.count();
const pages = Math.ceil(total / pageSize);
```

---

### 17. What is middleware in Prisma and how do you use it?

Middleware allows you to hook into Prisma operations:

```typescript
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  console.log(
    `Query ${params.model}.${params.action} took ${after - before}ms`,
  );
  return result;
});
```

---

### 18. How do you handle timestamps and default values in Prisma?

```prisma
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  status    String   @default("draft")
}
```

The `@updatedAt` attribute automatically updates the field on every update.

---

### 19. What are the differences between Prisma and TypeORM?

| Feature               | Prisma               | TypeORM         |
| --------------------- | -------------------- | --------------- |
| **API Style**         | Query-based          | Decorator-based |
| **Type Safety**       | Excellent            | Good            |
| **Learning Curve**    | Easy                 | Steep           |
| **Schema Definition** | Declarative          | Decorators      |
| **Relationships**     | Simple and intuitive | More complex    |
| **Migrations**        | Built-in             | Requires setup  |
| **Performance**       | Very good            | Good            |

---

### 20. How do you test Prisma applications?

Use a test database and reset before each test:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("User Service", () => {
  beforeEach(async () => {
    await prisma.$executeRawUnsafe("TRUNCATE TABLE users CASCADE");
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a user", async () => {
    const user = await prisma.user.create({
      data: { name: "John", email: "john@example.com" },
    });
    expect(user.name).toBe("John");
  });
});
```

Alternative: Use a separate test database in `.env.test`.

---
