# 📘 WebSocket Interview Questions

---

## 📚 Table of Contents

1. [What is WebSocket and how is it different from HTTP?](#1-what-is-websocket-and-how-is-it-different-from-http)
2. [How does WebSocket handshake work?](#2-how-does-websocket-handshake-work)
3. [What are the WebSocket events?](#3-what-are-the-websocket-events)
4. [What is a WebSocket frame?](#4-what-is-a-websocket-frame)
5. [How do you implement WebSocket in Node.js?](#5-how-do-you-implement-websocket-in-nodejs)
6. [What is Socket.IO and how is it different from WebSocket?](#6-what-is-socketio-and-how-is-it-different-from-websocket)
7. [How do you handle real-time events with Socket.IO?](#7-how-do-you-handle-real-time-events-with-socketio)
8. [What are rooms and namespaces in Socket.IO?](#8-what-are-rooms-and-namespaces-in-socketio)
9. [How do you implement Socket.IO authentication?](#9-how-do-you-implement-socketio-authentication)
10. [What is broadcasting in Socket.IO?](#10-what-is-broadcasting-in-socketio)
11. [How do you handle disconnect events in WebSocket?](#11-how-do-you-handle-disconnect-events-in-websocket)
12. [What is the purpose of ping/pong in WebSocket?](#12-what-is-the-purpose-of-pingpong-in-websocket)
13. [How do you scale WebSocket applications?](#13-how-do-you-scale-websocket-applications)
14. [What is a message queue and its role in WebSocket apps?](#14-what-is-a-message-queue-and-its-role-in-websocket-apps)
15. [How do you implement a chat application with WebSocket?](#15-how-do-you-implement-a-chat-application-with-websocket)
16. [What is binary frame in WebSocket?](#16-what-is-binary-frame-in-websocket)
17. [How do you handle errors in WebSocket?](#17-how-do-you-handle-errors-in-websocket)
18. [What are subprotocols in WebSocket?](#18-what-are-subprotocols-in-websocket)
19. [How do you implement automatic reconnection in WebSocket?](#19-how-do-you-implement-automatic-reconnection-in-websocket)
20. [What are best practices for WebSocket development?](#20-what-are-best-practices-for-websocket-development)

---

### 1. What is WebSocket and how is it different from HTTP?

**WebSocket** is a protocol that provides full-duplex communication over a single TCP connection. Unlike HTTP:

| WebSocket             | HTTP                         |
| --------------------- | ---------------------------- |
| Bidirectional         | One-way (request-response)   |
| Persistent connection | Connection per request       |
| Low latency           | Higher latency               |
| Real-time             | Polling needed for live data |
| Less bandwidth        | More overhead                |

WebSocket is ideal for real-time applications like chat, notifications, and live updates.

---

### 2. How does WebSocket handshake work?

The handshake establishes the WebSocket connection:

1. **Client sends HTTP upgrade request**:

```
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

2. **Server responds with 101 Switching Protocols**:

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

3. **Connection established**: Both can send frames.

---

### 3. What are the WebSocket events?

Common WebSocket events:

- **open**: Connection established.
- **message**: Message received.
- **close**: Connection closed.
- **error**: Error occurred.

Example:

```javascript
socket.addEventListener("open", () => {
  console.log("Connected");
});

socket.addEventListener("message", (event) => {
  console.log("Message:", event.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected");
});

socket.addEventListener("error", (error) => {
  console.error("Error:", error);
});
```

---

### 4. What is a WebSocket frame?

A **WebSocket frame** is the unit of data transmitted over WebSocket. Frame structure:

- **FIN** (1 bit): Final frame in message?
- **Opcode** (4 bits): Frame type (text=1, binary=2, close=8, ping=9, pong=10).
- **Mask** (1 bit): Data is masked?
- **Payload length**: Data length.
- **Payload**: Actual data.

Frames enable streaming of large messages.

---

### 5. How do you implement WebSocket in Node.js?

Using `ws` package:

```typescript
import WebSocket from "ws";

// Server
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("Error:", error);
  });
});

// Client
const ws = new WebSocket("ws://localhost:8080");

ws.addEventListener("open", () => {
  ws.send("Hello Server!");
});

ws.addEventListener("message", (event) => {
  console.log(event.data);
});
```

---

### 6. What is Socket.IO and how is it different from WebSocket?

**Socket.IO** is a library built on top of WebSocket that adds:

- **Fallbacks**: Uses HTTP polling if WebSocket unavailable.
- **Rooms**: Group clients and broadcast to groups.
- **Namespaces**: Separate communication channels.
- **Acknowledging**: Request-response pattern.
- **Auto-reconnection**: Automatic reconnect if disconnected.

WebSocket is lower-level; Socket.IO is higher-level abstraction.

---

### 7. How do you handle real-time events with Socket.IO?

```typescript
// Server
import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
  // Listen for events
  socket.on("chat_message", (data) => {
    console.log("Message:", data);
    // Respond to sender
    socket.emit("message_received", { status: "ok" });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Client
import io from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  socket.emit("chat_message", "Hello!");
});

socket.on("message_received", (data) => {
  console.log(data);
});
```

---

### 8. What are rooms and namespaces in Socket.IO?

**Rooms** group clients for targeted broadcasting:

```typescript
// Join a room
socket.join("room1");

// Send to room
io.to("room1").emit("message", "Hello room!");

// Leave room
socket.leave("room1");

// Check if in room
socket.to("room1").emit("event", data);
```

**Namespaces** separate communication channels:

```typescript
// Server
io.of("/chat").on("connection", (socket) => {
  socket.on("message", (data) => {
    io.of("/chat").emit("show", data);
  });
});

io.of("/notifications").on("connection", (socket) => {
  socket.on("alert", (data) => {
    io.of("/notifications").emit("alert", data);
  });
});

// Client
const chat = io("http://localhost:3000/chat");
const notifications = io("http://localhost:3000/notifications");
```

---

### 9. How do you implement Socket.IO authentication?

```typescript
// Server
io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("Authentication error"));
  }

  // Verify token
  try {
    const user = jwt.verify(token, "secret");
    socket.userId = user.id;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

io.on("connection", (socket) => {
  console.log(`User ${socket.userId} connected`);
});

// Client
const socket = io("http://localhost:3000", {
  auth: {
    token: localStorage.getItem("token"),
  },
});
```

---

### 10. What is broadcasting in Socket.IO?

Broadcasting sends messages to all clients or specific groups:

```typescript
// Send to all clients
io.emit("event", data);

// Send to all except sender
socket.broadcast.emit("user_joined", { username: "John" });

// Send to specific room
io.to("room1").emit("message", data);

// Send to client except room members
io.broadcast.to("room1").emit("event", data);

// Send to specific socket
io.to(socketId).emit("notification", data);
```

---

### 11. How do you handle disconnect events in WebSocket?

```typescript
socket.on("disconnect", (reason) => {
  console.log(`Client disconnected: ${reason}`);

  // Reason can be:
  // 'io server disconnect' - Server disconnected
  // 'io client namespace disconnect' - Client disconnected
  // 'ping timeout' - No ping response
  // 'transport close' - Connection lost
});

// Manual disconnect
socket.disconnect();

// Emit before disconnect
socket.on("disconnecting", () => {
  console.log("About to disconnect");
});
```

---

### 12. What is the purpose of ping/pong in WebSocket?

**Ping/Pong** keeps the connection alive and detects dead connections:

- **Ping**: Server sends to keep connection alive.
- **Pong**: Client responds to ping.
- **Timeout**: If no pong, connection is broken.

In Socket.IO:

```typescript
// Configure ping interval
const io = new Server(3000, {
  pingInterval: 25000, // 25 seconds
  pingTimeout: 60000, // 60 seconds
});
```

---

### 13. How do you scale WebSocket applications?

Use message queues and Redis for multi-server setup:

```typescript
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

const pubClient = createClient();
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

io.adapter(createAdapter(pubClient, subClient));
```

Benefits:

- Broadcasting works across servers.
- Clients can connect to any server.
- Shared state via Redis.

---

### 14. What is a message queue and its role in WebSocket apps?

**Message queues** buffer and distribute messages across services:

```typescript
import amqp from "amqplib";

const connection = await amqp.connect("amqp://localhost");
const channel = await connection.createChannel();
await channel.assertQueue("notifications");

// Publish to queue
channel.sendToQueue("notifications", Buffer.from("New message"));

// Consume from queue
channel.consume("notifications", (msg) => {
  if (msg) {
    console.log("Received:", msg.content.toString());
    channel.ack(msg);
  }
});
```

Enables:

- Decoupling publishers and subscribers
- Message persistence
- Fair distribution across workers

---

### 15. How do you implement a chat application with WebSocket?

```typescript
// Server
io.on("connection", (socket) => {
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user_joined", { username: socket.username });
  });

  socket.on("send_message", (roomId, message) => {
    io.to(roomId).emit("receive_message", {
      username: socket.username,
      message,
      timestamp: new Date(),
    });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user_left", { username: socket.username });
  });
});

// Client
const socket = io("http://localhost:3000");

socket.emit("join_room", "room1");

document.getElementById("send").addEventListener("click", () => {
  const message = document.getElementById("input").value;
  socket.emit("send_message", "room1", message);
});

socket.on("receive_message", (data) => {
  console.log(`${data.username}: ${data.message}`);
});
```

---

### 16. What is binary frame in WebSocket?

Binary frames transmit non-text data efficiently:

```typescript
// Server
ws.on("message", (message, isBinary) => {
  if (isBinary) {
    const buffer = Buffer.from(message);
    console.log("Binary data:", buffer);
  }
});

// Client
const arrayBuffer = new ArrayBuffer(4);
const view = new Uint8Array(arrayBuffer);
view[0] = 1;
view[1] = 2;
view[2] = 3;
view[3] = 4;

ws.send(arrayBuffer);
```

Use cases:

- Image streaming
- Video data
- Sensor data
- Large files

---

### 17. How do you handle errors in WebSocket?

```typescript
socket.on("error", (error) => {
  console.error("Socket error:", error.message);
});

// Handle connection errors
socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
  // Retry logic
});

// Server-side error handling
io.on("connection", (socket) => {
  socket.on("bad_event", (data, callback) => {
    try {
      // Process data
      callback(null, { success: true });
    } catch (err) {
      callback(err.message);
    }
  });
});
```

---

### 18. What are subprotocols in WebSocket?

**Subprotocols** define application-level protocols:

```javascript
// Client
const ws = new WebSocket("ws://localhost:8080", "chat");

// Server
wss.on("connection", (ws, req) => {
  const protocol = req.headers["sec-websocket-protocol"];
  if (protocol === "chat") {
    // Handle chat protocol
  }
});
```

Use cases:

- Version negotiation
- Protocol selection
- Feature negotiation

---

### 19. How do you implement automatic reconnection in WebSocket?

```typescript
let socket;
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

function connect() {
  socket = io("http://localhost:3000");

  socket.on("disconnect", () => {
    if (reconnectAttempts < maxReconnectAttempts) {
      reconnectAttempts++;
      const delay = Math.pow(2, reconnectAttempts) * 1000;
      setTimeout(connect, delay);
    }
  });

  socket.on("connect", () => {
    reconnectAttempts = 0;
  });
}

connect();
```

---

### 20. What are best practices for WebSocket development?

- **Use Socket.IO**: Easier than raw WebSocket with fallbacks.
- **Authentication**: Always verify user identity.
- **Message validation**: Sanitize and validate data.
- **Error handling**: Handle disconnects gracefully.
- **Scaling**: Use Redis adapter for multi-server.
- **Memory management**: Clean up on disconnect.
- **Logging**: Monitor connections and errors.
- **Testing**: Test reconnection and edge cases.
- **Rate limiting**: Prevent abuse with message rate limits.
- **Security**: Use WSS (WebSocket Secure) for production.

---
