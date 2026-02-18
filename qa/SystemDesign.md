# 📘 System Design Interview Questions

---

## 📚 Table of Contents

### 🔹 Fundamentals

1. [What is system design and why is it important?](#1-what-is-system-design-and-why-is-it-important)
2. [What are the key metrics in system design?](#2-what-are-the-key-metrics-in-system-design)
3. [What is scalability and how do you achieve it?](#3-what-is-scalability-and-how-do-you-achieve-it)
4. [What is availability and how do you measure it?](#4-what-is-availability-and-how-do-you-measure-it)
5. [What is consistency and what are different consistency models?](#5-what-is-consistency-and-what-are-different-consistency-models)
6. [What is CAP theorem and its implications?](#6-what-is-cap-theorem-and-its-implications)
7. [What is horizontal and vertical scaling?](#7-what-is-horizontal-and-vertical-scaling)
8. [What are trade-offs in system design?](#8-what-are-trade-offs-in-system-design)

### 🔸 Core Components

9. [What is a load balancer and why is it needed?](#9-what-is-a-load-balancer-and-why-is-it-needed)
10. [What are different load balancing algorithms?](#10-what-are-different-load-balancing-algorithms)
11. [What is database sharding and when should you use it?](#11-what-is-database-sharding-and-when-should-you-use-it)
12. [What is caching and different caching strategies?](#12-what-is-caching-and-different-caching-strategies)
13. [What is a CDN and how does it work?](#13-what-is-a-cdn-and-how-does-it-work)
14. [What are message queues and their benefits?](#14-what-are-message-queues-and-their-benefits)
15. [What is a reverse proxy and why is it used?](#15-what-is-a-reverse-proxy-and-why-is-it-used)
16. [What are microservices and their advantages?](#16-what-are-microservices-and-their-advantages)

### 🔸 Design Patterns

17. [What is the API gateway pattern?](#17-what-is-the-api-gateway-pattern)
18. [What is the service mesh pattern?](#18-what-is-the-service-mesh-pattern)
19. [What is eventual consistency?](#19-what-is-eventual-consistency)
20. [What is the saga pattern for distributed transactions?](#20-what-is-the-saga-pattern-for-distributed-transactions)
21. [What is the circuit breaker pattern?](#21-what-is-the-circuit-breaker-pattern)
22. [What is the rate limiting pattern?](#22-what-is-the-rate-limiting-pattern)
23. [What is database replication?](#23-what-is-database-replication)
24. [What is the CQRS pattern?](#24-what-is-the-cqrs-pattern)

### 🔸 Real-world Scenarios

25. [How would you design a URL shortener?](#25-how-would-you-design-a-url-shortener)
26. [How would you design a real-time notification system?](#26-how-would-you-design-a-real-time-notification-system)
27. [How would you design a chat application?](#27-how-would-you-design-a-chat-application)
28. [How would you design an e-commerce system?](#28-how-would-you-design-an-e-commerce-system)
29. [How would you design a social media feed?](#29-how-would-you-design-a-social-media-feed)
30. [How would you design a search system?](#30-how-would-you-design-a-search-system)

---

## **Answers**

### 1. What is system design and why is it important?

**System design** is the process of planning the architecture of a large-scale system that can handle millions of users and process terabytes of data. Why it's important:

- **Scalability**: Design systems to handle growth.
- **Reliability**: Ensure system availability and fault tolerance.
- **Performance**: Optimize for speed and efficiency.
- **Maintainability**: Easy to update and maintain.
- **Cost-effectiveness**: Efficient resource usage.

System design involves choosing databases, APIs, cache systems, load balancers, and more.

---

### 2. What are the key metrics in system design?

Key metrics to consider:

**Performance Metrics**:

- **Latency**: Time to process a request (ms).
- **Throughput**: Requests processed per second (RPS/QPS).
- **Response time**: Time for user to get response.

**Reliability Metrics**:

- **Availability**: System uptime percentage (%), target 99.9% (3 nines).
- **Error rate**: Percentage of failed requests.
- **MTBF/MTTR**: Mean time between failures / Mean time to recover.

**Resource Metrics**:

- **Bandwidth**: Data transfer rate.
- **Storage**: Space required.
- **CPU/Memory**: Computational resources needed.

---

### 3. What is scalability and how do you achieve it?

**Scalability** is the ability to handle increasing load without performance degradation. How to achieve it:

**Horizontal Scaling** (add more servers):

- Load balancer distributes traffic
- Stateless services
- Database replication

**Vertical Scaling** (upgrade hardware):

- More CPU/memory
- Easier but limited ceiling

Strategies:

```
Client → Load Balancer → Server 1
                      → Server 2
                      → Server 3
          Cache Layer (Redis)
            Database (with replicas)
```

---

### 4. What is availability and how do you measure it?

**Availability** is the percentage of time a system is operational.

Common targets:

```
99%     = 2 nines  = 87.6 hours downtime/year
99.9%   = 3 nines  = 8.76 hours downtime/year
99.99%  = 4 nines  = 0.876 hours downtime/year
99.999% = 5 nines  = 5.26 minutes downtime/year
```

Formula:

```
Availability = Uptime / (Uptime + Downtime) × 100%
```

How to improve:

- Redundancy (backup systems)
- Load balancing (distribute failures)
- Health checks and auto-recovery
- Replication across regions

---

### 5. What is consistency and what are different consistency models?

**Consistency** ensures data accuracy across the system. Models:

**Strong Consistency**:

- All reads see latest write
- Slower, but guaranteed accuracy
- Used for: Banking, inventory

**Eventual Consistency**:

- Reads may see stale data temporarily
- Faster performance
- Eventually all nodes see same data
- Used for: Social media, caching

**Weak Consistency**:

- No guarantee when data is consistent
- Used for: Real-time games

**ACID vs BASE**:

| ACID                  | BASE                 |
| --------------------- | -------------------- |
| Strong consistency    | Eventual consistency |
| Traditional databases | NoSQL                |
| Slower                | Faster               |

---

### 6. What is CAP theorem and its implications?

**CAP theorem** states that distributed systems can guarantee only 2 of 3:

- **Consistency**: Every read returns latest write
- **Availability**: System is always available
- **Partition tolerance**: System works despite network failures

In practice:

```
Consistent + Available = No network failures (impossible)
Consistent + Partition Tolerant = Sometimes unavailable
Available + Partition Tolerant = Eventual consistency
```

Real systems choose:

- **CA**: Traditional databases (no network issues)
- **CP**: Databases with strong consistency (sacrifice availability)
- **AP**: Most distributed systems (eventual consistency)

---

### 7. What is horizontal and vertical scaling?

**Vertical Scaling** (Scale Up):

- Add resources to single server (CPU, RAM, disk)
- Easier implementation
- Single point of failure risk
- Has ceiling (hardware limits)

```
Server (2 CPU) → Server (8 CPU)
```

**Horizontal Scaling** (Scale Out):

- Add more servers
- Better fault tolerance
- More complex (load balancing, state management)
- Unlimited scaling potential

```
Server 1
Server 2
Server 3
...
```

Most systems use combination: horizontal + cache layer + database optimization.

---

### 8. What are trade-offs in system design?

Common trade-offs:

**Performance vs Cost**:

- Fast system costs more
- Choose appropriate performance target

**Consistency vs Availability**:

- Strong consistency (slower)
- Eventual consistency (faster but stale data)

**Simplicity vs Functionality**:

- Complex system = more features but hard to maintain
- Simple system = fewer features but easy to manage

**Latency vs Throughput**:

- Low latency = fewer requests processed
- High throughput = more latency

**Storage vs Computation**:

- Store more data = faster retrieval
- Compute on demand = less storage

Decision matrix: Always understand what matters most for your use case.

---

### 9. What is a load balancer and why is it needed?

**Load balancer** distributes incoming traffic across multiple servers.

Why needed:

- **Scalability**: Distribute load across servers
- **Availability**: If one server fails, others handle traffic
- **Performance**: Prevent single server overload

Types:

**Layer 4 (Transport Layer)**:

- TCP/IP routing
- Very fast

**Layer 7 (Application Layer)**:

- HTTP/HTTPS routing
- Can route based on URL path, hostname
- More flexible

Common load balancers:

- **Nginx**: Open-source, lightweight
- **HAProxy**: High-performance
- **AWS ELB**: Cloud-native

---

### 10. What are different load balancing algorithms?

Algorithms for distributing requests:

**Round Robin**:

```
Request 1 → Server 1
Request 2 → Server 2
Request 3 → Server 3
Request 4 → Server 1
```

**Least Connection**:

- Route to server with fewest active connections
- Good for long-lived connections

**Weighted Round Robin**:

- Some servers get more traffic
- Server 1 (weight 5), Server 2 (weight 3)

**IP Hash**:

```python
server_index = hash(client_ip) % num_servers
```

- Same client always goes to same server
- Good for session management

**Least Response Time**:

- Route to server with fastest response time

---

### 11. What is database sharding and when should you use it?

**Sharding** partitions data across multiple databases. Each shard holds subset of data.

Example (shard by user ID):

```
Shard 1: Users 1-1M
Shard 2: Users 1M-2M
Shard 3: Users 2M-3M
```

When to use:

- Data too large for single database
- Single database is bottleneck

Strategies:

**Range-based**: Shard by ranges (user ID 1-1M, 1M-2M)
**Hash-based**: shard_id = hash(user_id) % num_shards
**Directory-based**: Look up which shard in separate table

Challenges:

- Complex joins (data in different shards)
- Hot shards (uneven distribution)
- Rebalancing (adding new shards)

---

### 12. What is caching and different caching strategies?

**Caching** stores frequently accessed data in fast storage.

Strategies:

**Cache-Aside**:

```
1. Check cache
2. If miss, fetch from database
3. Store in cache
4. Return to client
```

**Write-Through**:

```
1. Write to cache and database together
2. If cache fails, request fails
```

**Write-Behind**:

```
1. Write to cache immediately
2. Asynchronously update database
3. Risk of data loss
```

**Refresh-Ahead**:

- Proactively refresh cache before expiration

Best practices:

- Use TTL (time-to-live) for cache entries
- Invalidate cache when data changes
- Monitor cache hit ratio
- Use consistent hashing for distributed cache

---

### 13. What is a CDN and how does it work?

**CDN (Content Delivery Network)** distributes content geographically.

How it works:

```
User in NYC → Nearest Edge Server (NYC)
User in London → Nearest Edge Server (London)
User in Tokyo → Nearest Edge Server (Tokyo)
    (All pull from Origin Server if cache miss)
```

Benefits:

- **Lower latency**: Content closer to users
- **Reduced bandwidth**: Edge servers cache content
- **Improved availability**: Multiple servers

Use cases:

- Static content (images, videos, CSS, JS)
- Live streaming
- Large file downloads

Popular CDNs:

- Cloudflare
- AWS CloudFront
- Akamai

---

### 14. What are message queues and their benefits?

**Message queue** decouples producers and consumers.

Benefits:

- **Asynchronous processing**: Producer doesn't wait
- **Scalability**: Add more consumers
- **Reliability**: Message stored until processed
- **Decoupling**: Producers and consumers independent

Architecture:

```
Producer 1 ┐
Producer 2 ├→ Message Queue → Consumer 1
Producer 3 ┘                 Consumer 2
```

Examples:

- RabbitMQ
- Apache Kafka
- AWS SQS

Use cases:

- Email notifications
- Data processing pipelines
- Task scheduling

---

### 15. What is a reverse proxy and why is it used?

**Reverse proxy** sits in front of backend servers, forwards client requests to them.

Why used:

- **Load balancing**: Distribute traffic
- **Caching**: Cache responses
- **Compression**: Compress responses
- **SSL/TLS termination**: Decrypt HTTPS
- **Routing**: Route to different backends

Popular reverse proxies:

- Nginx
- Apache
- HAProxy

Example:

```
Client → Reverse Proxy (Nginx) → Backend Server 1
                              → Backend Server 2
                              → Backend Server 3
```

---

### 16. What are microservices and their advantages?

**Microservices** architecture breaks application into small, independent services.

Advantages:

- **Scalability**: Scale individual services
- **Maintainability**: Smaller, simpler code
- **Flexibility**: Different technologies per service
- **Resilience**: Failure isolated to service
- **Deployment**: Fast, independent deployments

Challenges:

- **Complexity**: Distributed system complexity
- **Networking**: Network calls slower than function calls
- **Data consistency**: Transactions across services hard
- **Debugging**: Hard to trace issues

Architecture:

```
API Gateway → Auth Service
           → User Service
           → Post Service
           → Notification Service
           (each with own database)
```

---

### 17. What is the API gateway pattern?

**API Gateway** sits between clients and microservices.

Responsibilities:

- **Request routing**: Route to appropriate service
- **Authentication**: Verify user identity
- **Rate limiting**: Prevent abuse
- **Response aggregation**: Combine responses from multiple services
- **Protocol translation**: Convert protocols (REST to gRPC)
- **Caching**: Cache responses

Example:

```
Client → API Gateway → User Service
                    → Product Service
                    → Order Service
```

Benefits:

- Single entry point
- Prevents direct access to services
- Centralized logic

---

### 18. What is the service mesh pattern?

**Service mesh** manages service-to-service communication.

Components:

- **Data plane**: Proxies that handle traffic
- **Control plane**: Manages configuration

Popular service meshes:

- Istio
- Linkerd

Capabilities:

- **Traffic management**: Routing, load balancing
- **Security**: mTLS, authorization
- **Observability**: Metrics, logs, traces
- **Resilience**: Retries, circuit breakers

---

### 19. What is eventual consistency?

**Eventual consistency** guarantees that eventually all read requests return same value.

Timeline:

```
Time 0: Write A=5
Time 1: Read A returns 3 (stale)
Time 2: Read A returns 3 (stale)
Time 3: Read A returns 5 (consistent)
```

Best for:

- Social media (likes, shares)
- Caching
- Distributed databases

When to avoid:

- Banking (need strong consistency)
- Inventory (need accurate counts)

---

### 20. What is the saga pattern for distributed transactions?

**Saga** handles transactions across multiple services.

Two types:

**Choreography** (event-driven):

```
User Service → publishes UserCreated
                        ↓
Email Service subscribed → sends email
                        ↓
Profile Service subscribed → creates profile
```

**Orchestration** (centralized):

```
Saga Orchestrator
    ├→ Call User Service
    ├→ Call Email Service
    ├→ Call Profile Service
    └→ If any fails, compensate
```

Compensation (rollback):

```
If Email fails:
- Call User Service to delete user
- Return error to client
```

---

### 21. What is the circuit breaker pattern?

**Circuit breaker** prevents cascading failures.

States:

```
CLOSED (Normal)
    ↓ (failures exceed threshold)
OPEN (Reject requests)
    ↓ (wait time expires)
HALF_OPEN (Test if recovered)
    ↓ (if success) → CLOSED
    ↓ (if fail) → OPEN
```

Implementation:

```typescript
class CircuitBreaker {
  async call(fn) {
    if (this.state === "OPEN") {
      throw new Error("Circuit breaker is open");
    }
    try {
      const result = await fn();
      if (this.state === "HALF_OPEN") {
        this.setState("CLOSED");
      }
      return result;
    } catch (err) {
      this.failures++;
      if (this.failures > this.threshold) {
        this.setState("OPEN");
        setTimeout(() => this.setState("HALF_OPEN"), 5000);
      }
      throw err;
    }
  }
}
```

---

### 22. What is the rate limiting pattern?

**Rate limiting** controls request rate to prevent abuse.

Algorithms:

**Token Bucket**:

- Bucket fills with tokens at fixed rate
- Each request consumes 1 token
- Allows burst traffic

**Sliding Window**:

- Count requests in time window
- Reject if exceeds limit

**Leaky Bucket**:

- Fixed rate of request processing
- Smooth traffic

Implementation:

```typescript
async function rateLimit(userId, limit = 100, window = 60000) {
  const key = `rate:${userId}`;
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, window);
  }
  return current <= limit;
}
```

---

### 23. What is database replication?

**Replication** copies data across multiple databases.

Types:

**Master-Slave** (Primary-Replica):

```
Writes → Master
Read ← Master or Slave
       (Slave replicates from Master)
```

**Multi-Master** (Active-Active):

```
Writes → Master 1
      → Master 2
Both can accept writes and replicate
```

Benefits:

- High availability
- Read scaling
- Backup

Challenges:

- Replication lag
- Conflict resolution
- Network bandwidth

---

### 24. What is the CQRS pattern?

**CQRS (Command Query Responsibility Segregation)** separates read and write models.

Architecture:

```
Write Path (Commands):
User Input → Command Handler → Update Database → Event Store

Read Path (Queries):
Query Request → Query Handler → Read Model (Cache) → Return
```

Benefits:

- **Scalability**: Scale reads and writes separately
- **Performance**: Optimize each model independently
- **Complexity**: Eventual consistency to manage

Example:

```typescript
// Write
class CreateUserCommand {
  async execute(name, email) {
    const user = await User.create(name, email);
    EventBus.publish(new UserCreatedEvent(user));
  }
}

// Read
class GetUserQuery {
  async execute(userId) {
    return UserReadModel.findById(userId); // Cached, denormalized
  }
}
```

---

### 25. How would you design a URL shortener?

**Requirements**:

- Create short URL from long URL
- Redirect short URL to long URL
- No collisions
- Scalable

**High-level design**:

```
Client → API Gateway → Encode/Decode Service
                    → Database (URL mapping)
                    → Cache
                    → Analytics Service
```

**Database Schema**:

```
URLs table:
- id (PK)
- short_url (unique)
- long_url
- user_id (FK)
- created_at
- redirect_count

Index on short_url for fast lookup
```

**Encoding**:

```typescript
// Base62 encoding for short URLs
const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encode(id) {
  let code = "";
  while (id > 0) {
    code = alphabet[id % 62] + code;
    id = Math.floor(id / 62);
  }
  return code;
}
```

**Scaling**:

- Cache frequently accessed mappings (Redis)
- Shard by short_url for very large scale
- CDN for redirects

---

### 26. How would you design a real-time notification system?

**Components**:

```
Event Source → Event Queue (Kafka/RabbitMQ)
                    ↓
            Notification Service
                    ↓
        ┌─────────┬──────────┬──────────┐
        ↓         ↓          ↓          ↓
    Email    SMS    Push   WebSocket
    Queue   Queue   Queue   Server
```

**Architecture**:

```typescript
// Event Producer
class UserService {
  async createUser(userData) {
    const user = await User.create(userData);
    EventBus.publish("user.created", { userId: user.id });
  }
}

// Event Consumer
class NotificationService {
  async onUserCreated(event) {
    await emailQueue.push({
      to: event.user.email,
      subject: "Welcome",
      body: "Thanks for signing up",
    });
  }
}

// WebSocket for real-time
class NotificationServer {
  broadcast(userId, message) {
    io.to(`user_${userId}`).emit("notification", message);
  }
}
```

**Database**:

```
notifications table:
- id
- user_id
- type (email, sms, push, in-app)
- content
- status (pending, sent, failed)
- created_at
```

---

### 27. How would you design a chat application?

**Components**:

```
Client (WebSocket) → Message Broker/Queue → Chat Service
                  ↑                           ↓
                  └─ WebSocket Server ← Message Storage
                                            ↓
                                        Cache (Redis)
```

**Architecture**:

```typescript
// Send message
socket.on('send_message', async (message) => {
  const msg = await Message.create({
    senderId: socket.userId,
    conversationId: message.conversationId,
    content: message.content
  });

  // Store in cache for quick retrieval
  await redis.zadd(`messages:${conversationId}`, Date.now(), msg.id);

  // Broadcast to receivers
  io.to(`conversation_${conversationId}`).emit('receive_message', msg);
});

// Get conversation history
async getMessages(conversationId, limit = 50) {
  // Check cache first
  const cached = await redis.zrevrange(`messages:${conversationId}`, 0, limit);
  if (cached.length > 0) {
    return cached;
  }

  // Fetch from database and cache
  const messages = await Message.find({ conversationId }).limit(limit);
  await redis.zadd(`messages:${conversationId}`, messages.map(m => [m.timestamp, m.id]));
  return messages;
}
```

**Scaling**:

- Multiple WebSocket servers with sticky sessions
- Use Redis Pub/Sub for cross-server messaging
- Shard messages by conversation_id

---

### 28. How would you design an e-commerce system?

**Core Components**:

```
Client (Web/Mobile) → API Gateway
                    ↓
    ┌───────────────┼─────────────────┐
    ↓               ↓                   ↓
User Service   Product Service    Order Service
    ↓               ↓                   ↓
User DB       Product DB          Order DB
    ↓               ↓                   ↓
    └───────────────┼─────────────────┘
                    ↓
        ┌───────────┬────────────┬──────────┐
        ↓           ↓            ↓          ↓
    Payment   Inventory   Notification  Analytics
    Service   Service      Service       Service
```

**Key Features**:

```typescript
// Product Service
async getProducts(filters) {
  // Query with filters
  const products = await Product.find(filters)
    .populate('reviews')
    .populate('ratings')
    .lean();

  // Cache popular products
  return products;
}

// Order Service
async createOrder(userId, items) {
  const tx = await db.transaction(async (trx) => {
    // Create order
    const order = await Order.create({
      userId,
      items,
      totalAmount: calculateTotal(items),
      status: 'pending'
    }, { trx });

    // Reserve inventory
    for (const item of items) {
      await Inventory.decrement(item.productId, item.quantity, { trx });
    }

    // Create payment
    const payment = await Payment.create({
      orderId: order.id,
      amount: order.totalAmount
    }, { trx });

    return { order, payment };
  });

  // Trigger async tasks
  EventBus.publish('order.created', tx.order);

  return tx;
}

// Handle payment confirmation
async onPaymentConfirmed(event) {
  const order = await Order.findById(event.orderId);
  order.status = 'confirmed';
  await order.save();

  EventBus.publish('order.confirmed', order);
  // Notify user, update inventory, etc.
}
```

---

### 29. How would you design a social media feed?

**Challenge**: Massive data, millions of users, real-time updates, billions of posts.

**Architecture**:

```
User Follows Pattern:
User 1 follows User 2, 3, 4, 5...
When User 2 posts, deliver to all followers' feeds

Write Optimization:
User 2 posts → Event → Feed Service → Cache followers' feeds

Read Optimization:
User 1: Pull from personalized feed cache
```

**Two approaches**:

**Pull Model**:

```
User posts → Database
User feeds → Read from followers' posts
Pro: Storage efficient
Con: Slow (multiple queries)
```

**Push Model**:

```
User posts → Event → For each follower:
                      → Add post to their feed cache
Pro: Fast reads
Con: Storage intensive (celebrity problem)
```

**Hybrid**:

```
Regular users: Use Push model
Celebrities (millions followers): Use Pull model
```

**Implementation**:

```typescript
// Push when user posts
async createPost(userId, content) {
  const post = await Post.create({ userId, content });

  const followers = await User.getFollowers(userId);
  const fanout = followers.map(f => ({
    userId: f.id,
    postId: post.id
  }));

  // Push to Redis sorted sets (by timestamp)
  const pipeline = redis.pipeline();
  fanout.forEach(item => {
    pipeline.zadd(`feed:${item.userId}`, Date.now(), item.postId);
  });
  await pipeline.exec();
}

// Get personalized feed
async getFeed(userId, page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  const postIds = await redis.zrevrange(`feed:${userId}`, offset, offset + limit);

  const posts = await Post.find({ id: { $in: postIds } })
    .populate('author')
    .populate('comments');

  return posts.sort((a, b) => postIds.indexOf(b.id) - postIds.indexOf(a.id));
}
```

**Scaling**:

- Cache only recent posts (ttl)
- Shard feed data by userId
- Use Kafka for fanout processing

---

### 30. How would you design a search system?

**Challenge**: Index billions of documents, return relevant results in milliseconds.

**Architecture**:

```
Indexing Pipeline:
Document → Parser → Tokenizer → Analyzer → Inverted Index

Search Pipeline:
Query → Tokenizer → Analyzer → Search Index → Rank → Results
```

**Components**:

```
Elasticsearch/Solr: Full-text search engine
Database: Store original documents
Redis: Cache popular searches
CDN: Cache search results
```

**Implementation**:

```typescript
// Indexing
async indexDocument(doc) {
  const tokens = tokenize(doc.content);
  const analyzed = analyzeTokens(tokens);

  // Store in Elasticsearch
  await es.index({
    index: 'documents',
    id: doc.id,
    body: {
      title: doc.title,
      content: doc.content,
      tokens: analyzed,
      author: doc.author,
      createdAt: doc.createdAt
    }
  });
}

// Search
async search(query, filters = {}) {
  // Check cache first
  const cacheKey = `search:${query}:${JSON.stringify(filters)}`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // Full-text search
  const results = await es.search({
    index: 'documents',
    body: {
      query: {
        multi_match: {
          query,
          fields: ['title^2', 'content'],
          fuzziness: 'AUTO'
        }
      },
      filter: [
        { range: { createdAt: { gte: filters.from } } },
        { term: { author: filters.author } }
      ],
      sort: [{ _score: { order: 'desc' } }],
      size: 20
    }
  });

  // Cache results
  await redis.setex(cacheKey, 3600, JSON.stringify(results));

  return results;
}
```

**Optimizations**:

- Inverted index for fast lookups
- Autocomplete with trie/prefix trees
- Ranking algorithm (TF-IDF, BM25)
- Caching popular searches

---
