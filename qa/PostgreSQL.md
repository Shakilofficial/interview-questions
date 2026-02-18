# 📘 PostgreSQL Interview Questions

---

## 📚 Table of Contents

1. [What is PostgreSQL and why is it popular?](#1-what-is-postgresql-and-why-is-it-popular)
2. [What are the key features of PostgreSQL?](#2-what-are-the-key-features-of-postgresql)
3. [What is the difference between SQL and PostgreSQL?](#3-what-is-the-difference-between-sql-and-postgresql)
4. [How do you create a database and table in PostgreSQL?](#4-how-do-you-create-a-database-and-table-in-postgresql)
5. [What are data types in PostgreSQL?](#5-what-are-data-types-in-postgresql)
6. [What is a primary key and why is it important?](#6-what-is-a-primary-key-and-why-is-it-important)
7. [What is a foreign key and how do you implement it?](#7-what-is-a-foreign-key-and-how-do-you-implement-it)
8. [What are indexes and why are they important?](#8-what-are-indexes-and-why-are-they-important)
9. [What is a view in PostgreSQL?](#9-what-is-a-view-in-postgresql)
10. [What are transactions and ACID properties?](#10-what-are-transactions-and-acid-properties)
11. [What is the difference between INNER JOIN and LEFT JOIN?](#11-what-is-the-difference-between-inner-join-and-left-join)
12. [How do you optimize query performance in PostgreSQL?](#12-how-do-you-optimize-query-performance-in-postgresql)
13. [What are stored procedures and functions in PostgreSQL?](#13-what-are-stored-procedures-and-functions-in-postgresql)
14. [What is VACUUM and why is it important?](#14-what-is-vacuum-and-why-is-it-important)
15. [How do you handle backup and recovery in PostgreSQL?](#15-how-do-you-handle-backup-and-recovery-in-postgresql)
16. [What is replication in PostgreSQL?](#16-what-is-replication-in-postgresql)
17. [What is the difference between DROP and TRUNCATE?](#17-what-is-the-difference-between-drop-and-truncate)
18. [How do you implement role-based access control in PostgreSQL?](#18-how-do-you-implement-role-based-access-control-in-postgresql)
19. [What are constraints and their types?](#19-what-are-constraints-and-their-types)
20. [How do you connect to PostgreSQL from Node.js?](#20-how-do-you-connect-to-postgresql-from-nodejs)

---

### 1. What is PostgreSQL and why is it popular?

**PostgreSQL** is an open-source, advanced relational database management system (RDBMS). It's popular because it offers:

- **Reliability**: ACID compliance and data integrity.
- **Advanced Features**: Supports JSON, arrays, and custom data types.
- **Scalability**: Handles large datasets efficiently.
- **Security**: Advanced authentication and authorization mechanisms.
- **Open Source**: Free to use with extensive community support.

---

### 2. What are the key features of PostgreSQL?

Key features of PostgreSQL include:

- **ACID Compliance**: Ensures data consistency and reliability.
- **Full-text Search**: Built-in text search capabilities.
- **JSON Support**: Native JSON data type for flexible data storage.
- **ArrayData Type**: Support for array data types.
- **Stored Procedures**: Implement business logic in the database.
- **Extensibility**: Create custom data types and functions.
- **Replication**: Multi-master and streaming replication.

---

### 3. What is the difference between SQL and PostgreSQL?

- **SQL**: Structured Query Language is a standard language used to interact with relational databases.
- **PostgreSQL**: A specific RDBMS implementation that supports SQL and extends it with additional features like JSON, arrays, and custom types.

PostgreSQL is compliant with SQL standards but adds proprietary extensions.

---

### 4. How do you create a database and table in PostgreSQL?

Create a database:

```sql
CREATE DATABASE myapp;
```

Create a table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 5. What are data types in PostgreSQL?

Common data types in PostgreSQL:

- **Numeric**: `INTEGER`, `BIGINT`, `DECIMAL`, `FLOAT`
- **Text**: `VARCHAR`, `TEXT`, `CHAR`
- **Date/Time**: `DATE`, `TIME`, `TIMESTAMP`
- **Boolean**: `BOOLEAN`
- **JSON**: `JSON`, `JSONB`
- **Arrays**: `INTEGER[]`, `TEXT[]`
- **Special**: `UUID`, `ENUM`

Example:

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2),
  properties JSONB,
  tags TEXT[]
);
```

---

### 6. What is a primary key and why is it important?

A **primary key** is a column or set of columns that uniquely identifies each row in a table. It ensures:

- **Uniqueness**: No two rows have the same primary key value.
- **Non-null**: Primary key values cannot be null.
- **Data Integrity**: Prevents duplicate records.

Example:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL
);
```

---

### 7. What is a foreign key and how do you implement it?

A **foreign key** establishes a relationship between two tables by referencing the primary key of another table:

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  order_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

This ensures that every `user_id` in the `orders` table exists in the `users` table.

---

### 8. What are indexes and why are they important?

**Indexes** are database structures that improve query performance by allowing faster data retrieval. They work like a book's index, enabling PostgreSQL to find data without scanning the entire table.

Create an index:

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

Benefits:

- Faster SELECT queries
- Slower INSERT/UPDATE/DELETE (index must be updated)

---

### 9. What is a view in PostgreSQL?

A **view** is a virtual table created by a stored query. It doesn't store data but displays data from underlying tables:

```sql
CREATE VIEW active_users AS
SELECT id, name, email FROM users WHERE status = 'active';

SELECT * FROM active_users;
```

Benefits:

- Simplifies complex queries
- Provides data security by hiding sensitive columns
- Allows code reuse

---

### 10. What are transactions and ACID properties?

A **transaction** is a sequence of SQL operations that are executed as a single unit. **ACID** properties are:

- **Atomicity**: All operations succeed or all fail.
- **Consistency**: Database remains in a valid state.
- **Isolation**: Transactions don't interfere with each other.
- **Durability**: Committed data persists even after failures.

Example:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
INSERT INTO transactions (account_id, amount) VALUES (1, 100);
COMMIT;
```

---

### 11. What is the difference between INNER JOIN and LEFT JOIN?

- **INNER JOIN**: Returns only rows that have matches in both tables.

```sql
SELECT u.name, o.order_id
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

- **LEFT JOIN**: Returns all rows from the left table and matched rows from the right table.

```sql
SELECT u.name, o.order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

---

### 12. How do you optimize query performance in PostgreSQL?

- **Use Indexes**: Create indexes on frequently queried columns.
- **EXPLAIN ANALYZE**: Analyze query execution plans.

```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'john@example.com';
```

- **Normalize Data**: Reduce data redundancy.
- **Use Proper Data Types**: Choose appropriate data types for columns.
- **Partition Large Tables**: Split tables into smaller parts.
- **Monitor Slow Queries**: Use `log_min_duration_statement`.

---

### 13. What are stored procedures and functions in PostgreSQL?

**Stored procedures** and **functions** are reusable blocks of SQL code stored in the database:

```sql
CREATE FUNCTION get_user_by_id(user_id INTEGER)
RETURNS TABLE (id INTEGER, name VARCHAR, email VARCHAR) AS $$
BEGIN
  RETURN QUERY SELECT u.id, u.name, u.email FROM users u WHERE u.id = user_id;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_user_by_id(1);
```

---

### 14. What is VACUUM and why is it important?

**VACUUM** is a maintenance command that:

- Removes dead tuples (rows marked for deletion).
- Reclaims disk space.
- Optimizes query performance.

Run manually:

```sql
VACUUM;  -- Standard VACUUM
VACUUM ANALYZE;  -- Also updates statistics
```

Or configure automatic VACUUM in `postgresql.conf`.

---

### 15. How do you handle backup and recovery in PostgreSQL?

**Backup** using `pg_dump`:

```bash
pg_dump -U username -W dbname > backup.sql
pg_dump -U username -W --format=custom dbname > backup.dump
```

**Restore** from backup:

```bash
psql -U username dbname < backup.sql
pg_restore -U username -d dbname backup.dump
```

Use continuous archiving for point-in-time recovery:

```
wal_level = replica
archive_mode = on
archive_command = 'cp %p /mnt/archive/%f'
```

---

### 16. What is replication in PostgreSQL?

**Replication** creates copies of the database for redundancy and load balancing. Types:

- **Streaming Replication**: Real-time copying of WAL (Write-Ahead Logging) records.
- **Logical Replication**: Selectively replicate specific tables or databases.

Configure streaming replication:

```
wal_level = replica
max_wal_senders = 3
hot_standby = on
```

---

### 17. What is the difference between DROP and TRUNCATE?

- **DROP**: Removes table structure and data.

```sql
DROP TABLE users;
```

- **TRUNCATE**: Removes only data, keeps table structure. Faster and uses less disk space.

```sql
TRUNCATE TABLE users;
```

---

### 18. How do you implement role-based access control in PostgreSQL?

Create roles and grant permissions:

```sql
CREATE ROLE app_user WITH LOGIN PASSWORD 'password';
CREATE ROLE admin_role;

GRANT SELECT, INSERT, UPDATE ON users TO app_user;
GRANT CONNECT ON DATABASE myapp TO app_user;

GRANT admin_role TO app_user;  -- Role inheritance
```

---

### 19. What are constraints and their types?

Constraints enforce rules on data:

- **PRIMARY KEY**: Uniquely identifies each row.
- **FOREIGN KEY**: References another table.
- **UNIQUE**: Ensures unique values.
- **NOT NULL**: Ensures values are present.
- **CHECK**: Validates data meets a condition.
- **DEFAULT**: Sets default values.

Example:

```sql
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INTEGER CHECK (age >= 18),
  department VARCHAR(50) DEFAULT 'IT'
);
```

---

### 20. How do you connect to PostgreSQL from Node.js?

Use **pg** or **node-postgres** package:

```typescript
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "myapp",
  user: "postgres",
  password: "password",
});

await client.connect();
const result = await client.query("SELECT * FROM users");
console.log(result.rows);
await client.end();
```

Or use **node-postgres** with connection pooling:

```typescript
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgresql://user:password@localhost:5432/myapp",
});

const result = await pool.query("SELECT * FROM users");
```

---
