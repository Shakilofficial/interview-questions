# 📘 Redis & Pub/Sub Caching Interview Questions

---

## 📚 Table of Contents

1. [What is Redis and what are its use cases?](#1-what-is-redis-and-what-are-its-use-cases)
2. [What is the difference between Redis and traditional databases?](#2-what-is-the-difference-between-redis-and-traditional-databases)
3. [What are the main data structures in Redis?](#3-what-are-the-main-data-structures-in-redis)
4. [How do you set and get values in Redis?](#4-how-do-you-set-and-get-values-in-redis)
5. [What is expiration and TTL in Redis?](#5-what-is-expiration-and-ttl-in-redis)
6. [What is Redis Pub/Sub and how does it work?](#6-what-is-redis-pubsub-and-how-does-it-work)
7. [How do you implement publish/subscribe in Node.js?](#7-how-do-you-implement-publishsubscribe-in-nodejs)
8. [What is caching and why is it important?](#8-what-is-caching-and-why-is-it-important)
9. [What are caching strategies in Redis?](#9-what-are-caching-strategies-in-redis)
10. [What is the difference between CACHE-ASIDE and WRITE-THROUGH strategies?](#10-what-is-the-difference-between-cache-aside-and-write-through-strategies)
11. [How do you implement a basic cache with Redis?](#11-how-do-you-implement-a-basic-cache-with-redis)
12. [What is Redis persistence and when do you need it?](#12-what-is-redis-persistence-and-when-do-you-need-it)
13. [What are RDB and AOF in Redis?](#13-what-are-rdb-and-aof-in-redis)
14. [How do you implement rate limiting with Redis?](#14-how-do-you-implement-rate-limiting-with-redis)
15. [What are Redis transactions and how do you use them?](#15-what-are-redis-transactions-and-how-do-you-use-them)
16. [What is Redis clustering and why is it needed?](#16-what-is-redis-clustering-and-why-is-it-needed)
17. [How do you connect to Redis from Node.js?](#17-how-do-you-connect-to-redis-from-nodejs)
18. [What are Redis streams and their use cases?](#18-what-are-redis-streams-and-their-use-cases)
19. [How do you implement session storage with Redis?](#19-how-do-you-implement-session-storage-with-redis)
20. [What are best practices for Redis caching?](#20-what-are-best-practices-for-redis-caching)

---

### 1. What is Redis and what are its use cases?

**Redis** (Remote Dictionary Server) is an in-memory data structure store that acts as a database, cache, and message broker. Key use cases:

- **Caching**: Speed up database queries.
- **Session Storage**: Store user sessions.
- **Real-time Analytics**: Count events, track metrics.
- **Pub/Sub Messaging**: Real-time message distribution.
- **Rate Limiting**: Control request rates.
- **Leaderboards**: Store and rank data.
- **Job Queues**: Manage background tasks.

---

### 2. What is the difference between Redis and traditional databases?

| Aspect          | Redis            | Traditional DB         |
| --------------- | ---------------- | ---------------------- |
| **Storage**     | In-memory        | Disk-based             |
| **Speed**       | Extremely fast   | Slower (disk I/O)      |
| **Persistence** | Optional         | Always                 |
| **Data Type**   | Rich structures  | Rows and tables        |
| **Scalability** | Vertical scaling | Horizontal or vertical |
| **Use Case**    | Cache, real-time | Persistent storage     |

---

### 3. What are the main data structures in Redis?

Redis supports multiple data structures:

- **String**: Simple key-value pairs.
- **List**: Ordered collection of strings.
- **Set**: Unordered unique strings.
- **Sorted Set**: Set with scores for ordering.
- **Hash**: Map of field-value pairs.
- **Stream**: Log-like structure for events.

Example:

```
SET key "value"           # String
LPUSH list "item"        # List
SADD set "member"        # Set
ZADD sorted_set 1 "item" # Sorted Set
HSET hash field "value"  # Hash
```

---

### 4. How do you set and get values in Redis?

Using the Redis CLI:

```bash
SET user:1:name "John"
GET user:1:name           # Returns "John"

MSET user:1:age 30 user:1:city "NYC"
MGET user:1:name user:1:age
```

In Node.js with `redis` package:

```typescript
import { createClient } from "redis";

const client = createClient();
await client.connect();

await client.set("user:1:name", "John");
const name = await client.get("user:1:name");

await client.disconnect();
```

---

### 5. What is expiration and TTL in Redis?

**TTL (Time To Live)** is the time before a key expires. Use `EXPIRE` or set expiration when creating:

```bash
SET key "value" EX 3600    # Expires in 3600 seconds
SET key "value" PX 3600000 # Expires in milliseconds

TTL key                    # Get remaining seconds
PTTL key                   # Get remaining milliseconds

EXPIRE key 1800            # Set expiration on existing key
PERSIST key                # Remove expiration
```

In Node.js:

```typescript
await client.setEx("sessionId", 3600, "sessionData");
const ttl = await client.ttl("sessionId");
```

---

### 6. What is Redis Pub/Sub and how does it work?

**Pub/Sub** is a messaging pattern where publishers send messages to channels and subscribers receive them:

```bash
SUBSCRIBE channel1
PUBLISH channel1 "Hello"
```

Key characteristics:

- **Fire-and-Forget**: Messages aren't stored; missed by subscribers are lost.
- **Real-time**: Subscribers receive messages instantly.
- **Multiple Channels**: Subscribe to multiple channels.

---

### 7. How do you implement publish/subscribe in Node.js?

```typescript
import { createClient } from "redis";

// Subscriber
const subscriber = createClient();
await subscriber.connect();

await subscriber.subscribe("channel1", (message) => {
  console.log(`Received: ${message}`);
});

// Publisher
const publisher = createClient();
await publisher.connect();

await publisher.publish("channel1", "Hello from pub/sub!");

// Pattern subscription
await subscriber.pSubscribe("news.*", (message, channel) => {
  console.log(`${channel}: ${message}`);
});

await publisher.publish("news.tech", "New tech update");
```

---

### 8. What is caching and why is it important?

**Caching** stores frequently accessed data in fast-access storage (Redis) to reduce:

- **Database Load**: Fewer queries to database.
- **Response Time**: Faster data retrieval.
- **Cost**: Reduced database operations.

Why it's important:

- Improves application performance.
- Reduces database strain.
- Enhances user experience.
- Enables offline-like experience.

---

### 9. What are caching strategies in Redis?

Common strategies:

- **Cache-Aside**: Load data on miss, update cache manually.
- **Write-Through**: Write to cache and database simultaneously.
- **Write-Behind**: Write to cache, later sync with database.
- **Refresh-Ahead**: Proactively refresh cache before expiration.

---

### 10. What is the difference between CACHE-ASIDE and WRITE-THROUGH strategies?

**CACHE-ASIDE**:

```typescript
async function getUser(id) {
  let user = await cache.get(`user:${id}`);
  if (!user) {
    user = await db.query(`SELECT * FROM users WHERE id = ${id}`);
    await cache.set(`user:${id}`, user, 3600);
  }
  return user;
}
```

**WRITE-THROUGH**:

```typescript
async function updateUser(id, data) {
  await cache.set(`user:${id}`, data);
  await db.update(`UPDATE users SET ... WHERE id = ${id}`);
}
```

**Difference**:

| Cache-Aside         | Write-Through         |
| ------------------- | --------------------- |
| Load on miss        | Always write to cache |
| Manual invalidation | Automatic consistency |
| Simple to implement | More complex          |

---

### 11. How do you implement a basic cache with Redis?

```typescript
import { createClient } from "redis";

const cache = createClient();
await cache.connect();

class CacheService {
  async get(key) {
    return JSON.parse(await cache.get(key));
  }

  async set(key, value, ttl = 3600) {
    await cache.setEx(key, ttl, JSON.stringify(value));
  }

  async del(key) {
    await cache.del(key);
  }

  async clear() {
    await cache.flushDb();
  }
}

const cacheService = new CacheService();

// Usage
await cacheService.set("user:1", { id: 1, name: "John" }, 3600);
const user = await cacheService.get("user:1");
```

---

### 12. What is Redis persistence and when do you need it?

**Persistence** saves Redis data to disk for recovery after failures. When you need it:

- Production environments.
- Critical data that shouldn't be lost.
- Long-running applications.

Persistence methods:

- **RDB (Snapshot)**: Periodic snapshots of data.
- **AOF (Append Only File)**: Log every command.

---

### 13. What are RDB and AOF in Redis?

**RDB (Redis Database)**:

- Creates snapshots at intervals.
- Fast to load.
- Less durable (can lose data between snapshots).
- Smaller file size.

Configure in `redis.conf`:

```
SAVE 900 1    # Save if 1 key changed in 900 seconds
```

**AOF (Append Only File)**:

- Logs every write command.
- More durable.
- Larger file size.
- Slower to load.

Configure:

```
appendonly yes
appendfsync everysec
```

---

### 14. How do you implement rate limiting with Redis?

Use a counter that increments and expires:

```typescript
async function rateLimit(userId, limit = 10, window = 60) {
  const key = `rate:${userId}`;
  const current = await cache.incr(key);

  if (current === 1) {
    await cache.expire(key, window);
  }

  if (current > limit) {
    throw new Error("Rate limit exceeded");
  }

  return true;
}
```

Or use sliding window:

```typescript
async function slidingWindowRateLimit(userId, limit = 10, window = 60) {
  const key = `rate:${userId}`;
  const now = Date.now();

  await cache.zRemRangeByScore(key, 0, now - window * 1000);
  const count = await cache.zCard(key);

  if (count < limit) {
    await cache.zAdd(key, { score: now, value: `${now}-${uuid()}` });
    return true;
  }

  throw new Error("Rate limit exceeded");
}
```

---

### 15. What are Redis transactions and how do you use them?

Transactions ensure atomic execution using `MULTI` and `EXEC`:

```bash
MULTI
SET key1 "value1"
SET key2 "value2"
INCR counter
EXEC          # Execute all commands atomically
```

In Node.js:

```typescript
const transaction = cache.multi();
transaction.set("key1", "value1");
transaction.set("key2", "value2");
transaction.incr("counter");
const result = await transaction.exec();
```

---

### 16. What is Redis clustering and why is it needed?

**Redis Cluster** distributes data across multiple nodes for:

- **High Availability**: Continues if a node fails.
- **Scalability**: Increased capacity and throughput.
- **Data Sharding**: Data distributed using consistent hashing.

Create a cluster:

```bash
redis-server --port 7000 --cluster-enabled yes --cluster-config-file nodes-7000.conf
```

---

### 17. How do you connect to Redis from Node.js?

Using `redis` package:

```typescript
import { createClient } from "redis";

const client = createClient({
  sock: {
    host: "localhost",
    port: 6379,
  },
});

client.on("error", (err) => console.error("Redis error:", err));

await client.connect();

// Use client
await client.set("key", "value");
const value = await client.get("key");

await client.disconnect();
```

---

### 18. What are Redis streams and their use cases?

**Streams** are log-like data structures for event sourcing and message queues:

```bash
XADD mystream "*" field1 value1 field2 value2
XREAD STREAMS mystream 0
XGROUP CREATE mystream mygroup 0
XREADGROUP GROUP mygroup consumer1 STREAMS mystream >
```

Use cases:

- Event streaming
- Message queues
- Log analysis
- Real-time data ingestion

---

### 19. How do you implement session storage with Redis?

```typescript
import session from "express-session";
import RedisStore from "connect-redis";

const redisClient = createClient();
await redisClient.connect();

const sessionStore = new RedisStore({ client: redisClient });

app.use(
  session({
    store: sessionStore,
    secret: "process.env.SESSION_SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
  }),
);
```

---

### 20. What are best practices for Redis caching?

- **Use meaningful keys**: `user:123:profile` instead of `u123`.
- **Set TTL**: Always set expiration to prevent stale data.
- **Handle cache misses**: Gracefully load from database.
- **Avoid large values**: Store only necessary data.
- **Monitor memory**: Set max memory policy to evict old keys.
- **Use pipelining**: Batch multiple commands for performance.
- **Implement cache warming**: Preload frequently accessed data.
- **Version your cache**: Include version in key for easy invalidation.

---
