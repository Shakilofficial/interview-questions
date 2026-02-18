# 📘 Docker Interview Questions

---

## 📚 Table of Contents

1. [What is Docker and why is it used?](#1-what-is-docker-and-why-is-it-used)
2. [What is the difference between Docker and virtual machines?](#2-what-is-the-difference-between-docker-and-virtual-machines)
3. [What are Docker images and containers?](#3-what-are-docker-images-and-containers)
4. [What is a Dockerfile and what are common instructions?](#4-what-is-a-dockerfile-and-what-are-common-instructions)
5. [How do you build a Docker image?](#5-how-do-you-build-a-docker-image)
6. [How do you run a Docker container?](#6-how-do-you-run-a-docker-container)
7. [What is Docker Compose and why is it used?](#7-what-is-docker-compose-and-why-is-it-used)
8. [How do you define services in Docker Compose?](#8-how-do-you-define-services-in-docker-compose)
9. [What are volumes in Docker and their types?](#9-what-are-volumes-in-docker-and-their-types)
10. [What is networking in Docker?](#10-what-is-networking-in-docker)
11. [How do you handle environment variables in Docker?](#11-how-do-you-handle-environment-variables-in-docker)
12. [What is Docker Registry and Docker Hub?](#12-what-is-docker-registry-and-docker-hub)
13. [How do you push an image to Docker Hub?](#13-how-do-you-push-an-image-to-docker-hub)
14. [What are Docker layers and how do they work?](#14-what-are-docker-layers-and-how-do-they-work)
15. [How do you optimize Docker images?](#15-how-do-you-optimize-docker-images)
16. [What is CMD vs ENTRYPOINT in Dockerfile?](#16-what-is-cmd-vs-entrypoint-in-dockerfile)
17. [How do you mount volumes in Docker containers?](#17-how-do-you-mount-volumes-in-docker-containers)
18. [What is a .dockerignore file?](#18-what-is-a-dockerignore-file)
19. [How do you debug Docker containers?](#19-how-do-you-debug-docker-containers)
20. [What are best practices for Docker?](#20-what-are-best-practices-for-docker)

---

### 1. What is Docker and why is it used?

**Docker** is a containerization platform that packages applications with all dependencies into standardized units called containers. Why it's used:

- **Consistency**: Same environment across development, testing, and production.
- **Portability**: Containers run the same on any machine.
- **Isolation**: Each container has its own filesystem, processes, and resources.
- **Efficiency**: Lightweight compared to virtual machines.
- **Scalability**: Easy to scale by running multiple containers.
- **DevOps**: Simplifies CI/CD pipelines.

---

### 2. What is the difference between Docker and virtual machines?

| Docker             | Virtual Machines             |
| ------------------ | ---------------------------- | ------------------------ |
| **Type**           | Container (shares OS kernel) | Full OS with kernel      |
| **Size**           | Small (MB)                   | Large (GB)               |
| **Startup**        | Fast (seconds)               | Slow (minutes)           |
| **Performance**    | Native-like                  | Overhead from hypervisor |
| **Isolation**      | Process-level                | Complete isolation       |
| **Resource Usage** | Lower                        | Higher                   |

Docker is more lightweight and faster than VMs.

---

### 3. What are Docker images and containers?

**Docker Image**: A read-only template containing everything needed to run an application (code, runtime, dependencies).

**Container**: A running instance of an image. Multiple containers can run from the same image.

Analogy: Image = Class, Container = Instance

---

### 4. What is a Dockerfile and what are common instructions?

A **Dockerfile** is a text file with instructions to build a Docker image. Common instructions:

- **FROM**: Base image to build on.
- **RUN**: Execute commands in the image.
- **COPY/ADD**: Copy files into the image.
- **WORKDIR**: Set working directory.
- **ENV**: Set environment variables.
- **EXPOSE**: Expose ports.
- **CMD**: Default command to run.
- **ENTRYPOINT**: Configure container as an executable.

Example:

```dockerfile
FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "index.js"]
```

---

### 5. How do you build a Docker image?

Use `docker build` command:

```bash
docker build -t myapp:1.0 .
```

Breakdown:

- `-t`: Tag (name) for the image.
- `.`: Path to Dockerfile (current directory).

Build with different Dockerfile:

```bash
docker build -f Dockerfile.prod -t myapp:prod .
```

---

### 6. How do you run a Docker container?

Use `docker run` command:

```bash
docker run -d --name myapp -p 3000:3000 myapp:1.0
```

Options:

- `-d`: Detached mode (background).
- `--name`: Container name.
- `-p`: Port mapping (host:container).
- `-e`: Environment variables.
- `-v`: Mount volumes.
- `--rm`: Remove container on exit.

Run with interactive terminal:

```bash
docker run -it myapp:1.0 /bin/bash
```

---

### 7. What is Docker Compose and why is it used?

**Docker Compose** is a tool to define and run multi-container applications using a `docker-compose.yml` file. Why it's used:

- Define services, networks, and volumes in one file.
- Start all services with a single command.
- Easy local development environment.
- Manage dependencies between services.

---

### 8. How do you define services in Docker Compose?

```yaml
version: "3.8"

services:
  web:
    image: myapp:1.0
    container_name: web
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db
    networks:
      - mynetwork

  db:
    image: postgres:15
    container_name: db
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - db_data:/var/lib/postgresql/data
    networks:
      - mynetwork

volumes:
  db_data:

networks:
  mynetwork:
    driver: bridge
```

Run:

```bash
docker-compose up -d
```

---

### 9. What are volumes in Docker and their types?

**Volumes** persist data outside containers. Types:

1. **Named Volumes**: Managed by Docker, can be reused.

```bash
docker volume create myvolume
docker run -v myvolume:/data myapp
```

2. **Host Volumes**: Map host directory to container.

```bash
docker run -v /host/path:/container/path myapp
```

3. **Anonymous Volumes**: Created automatically, deleted when container is removed.

```bash
docker run -v /data myapp
```

---

### 10. What is networking in Docker?

Docker provides networking for inter-container communication. Types:

- **bridge**: Default, containers communicate via bridge network.
- **host**: Container uses host's network.
- **overlay**: For swarm mode across multiple hosts.
- **none**: No networking.

Create custom network:

```bash
docker network create mynetwork
docker run --network mynetwork myapp
```

Containers can communicate by service name:

```yaml
services:
  web:
    environment:
      - DB_HOST=db # Can access db service by name
  db:
    image: postgres
```

---

### 11. How do you handle environment variables in Docker?

Using `.env` file:

```bash
# .env
PORT=3000
DATABASE_URL=postgres://localhost/myapp
```

In Docker Compose:

```yaml
services:
  web:
    image: myapp:1.0
    env_file: .env
    environment:
      - NODE_ENV=production # Override
```

Or with `docker run`:

```bash
docker run -e PORT=3000 -e DEBUG=true myapp
```

---

### 12. What is Docker Registry and Docker Hub?

**Docker Registry** stores and distributes Docker images. **Docker Hub** is the public registry.

Pull image from registry:

```bash
docker pull node:18
docker pull myrepo/myimage:1.0
```

Pull from private registry:

```bash
docker login private-registry.com
docker pull private-registry.com/myimage:1.0
```

---

### 13. How do you push an image to Docker Hub?

1. Create image with your Docker Hub username:

```bash
docker build -t username/myapp:1.0 .
```

2. Login to Docker Hub:

```bash
docker login
```

3. Push image:

```bash
docker push username/myapp:1.0
```

Others can now pull:

```bash
docker pull username/myapp:1.0
```

---

### 14. What are Docker layers and how do they work?

Each instruction in Dockerfile creates a layer. Layers are cached for faster builds.

```dockerfile
FROM node:18           # Layer 1
WORKDIR /app          # Layer 2
COPY package.json .   # Layer 3
RUN npm install       # Layer 4
COPY . .              # Layer 5
CMD ["node", "app.js"]  # Layer 6
```

Docker reuses cached layers if nothing changed before them. Put frequently changing instructions at the end.

---

### 15. How do you optimize Docker images?

**Multi-stage builds**:

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package.json .
RUN npm install

# Runtime stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "app.js"]
```

**Other optimizations**:

- Use smaller base images (alpine).
- Remove unnecessary files.
- Combine RUN commands.
- Use .dockerignore.

---

### 16. What is CMD vs ENTRYPOINT in Dockerfile?

**CMD**: Provides default command (can be overridden).

```dockerfile
CMD ["node", "app.js"]
docker run myapp                # Uses CMD
docker run myapp /bin/bash      # Overrides CMD
```

**ENTRYPOINT**: Configures container as executable (harder to override).

```dockerfile
ENTRYPOINT ["node"]
CMD ["app.js"]

docker run myapp                # Runs: node app.js
docker run myapp script.js      # Runs: node script.js
```

Use ENTRYPOINT for wrapper scripts, CMD for default arguments.

---

### 17. How do you mount volumes in Docker containers?

Bind mount (host directory):

```bash
docker run -v /host/path:/container/path myapp
```

Named volume:

```bash
docker run -v myvolume:/container/path myapp
```

In Docker Compose:

```yaml
services:
  web:
    volumes:
      - ./src:/app/src # Bind mount
      - db_data:/var/lib/data # Named volume

volumes:
  db_data:
```

---

### 18. What is a .dockerignore file?

**.dockerignore** specifies files/directories to exclude from Docker build context. Similar to .gitignore.

```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
dist
coverage
.DS_Store
```

Reduces build context size and speeds up builds.

---

### 19. How do you debug Docker containers?

View logs:

```bash
docker logs myapp
docker logs -f myapp          # Follow logs
docker logs --tail 50 myapp   # Last 50 lines
```

Execute commands in running container:

```bash
docker exec -it myapp /bin/bash
docker exec myapp npm test
```

Inspect container details:

```bash
docker inspect myapp
docker stats myapp            # Resource usage
```

---

### 20. What are best practices for Docker?

- **Use specific base image versions**: Avoid `latest` tag.
- **Keep containers small**: Use alpine images.
- **Single responsibility**: One service per container.
- **Health checks**: Add HEALTHCHECK instruction.
- **Security**: Run as non-root user.
- **Logging**: Log to stdout/stderr.
- **Secrets**: Use environment variables, not hardcoded secrets.
- **Caching**: Order Dockerfile for efficient caching.
- **Documentation**: Include README and usage instructions.
- **Regular updates**: Keep images and dependencies updated.

---
