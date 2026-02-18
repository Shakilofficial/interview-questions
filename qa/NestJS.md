# 📘 NestJS Interview Questions

---

## 📚 Table of Contents

1. [What is NestJS and how is it different from Express?](#1-what-is-nestjs-and-how-is-it-different-from-express)
2. [What are the core components of NestJS?](#2-what-are-the-core-components-of-nestjs)
3. [What is a controller in NestJS and how do you create one?](#3-what-is-a-controller-in-nestjs-and-how-do-you-create-one)
4. [What is a service in NestJS and what is its purpose?](#4-what-is-a-service-in-nestjs-and-what-is-its-purpose)
5. [Explain dependency injection in NestJS.](#5-explain-dependency-injection-in-nestjs)
6. [What are modules in NestJS?](#6-what-are-modules-in-nestjs)
7. [How do you create and use middleware in NestJS?](#7-how-do-you-create-and-use-middleware-in-nestjs)
8. [What are pipes and how do you use them?](#8-what-are-pipes-and-how-do-you-use-them)
9. [What are guards and what is their purpose?](#9-what-are-guards-and-what-is-their-purpose)
10. [What are interceptors and how do you implement them?](#10-what-are-interceptors-and-how-do-you-implement-them)
11. [What are exception filters and how do you use them?](#11-what-are-exception-filters-and-how-do-you-use-them)
12. [How do you handle validation in NestJS?](#12-how-do-you-handle-validation-in-nestjs)
13. [What is the difference between @Injectable() and @Global()?](#13-what-is-the-difference-between-injectable-and-global)
14. [How do you implement authentication and authorization in NestJS?](#14-how-do-you-implement-authentication-and-authorization-in-nestjs)
15. [What is the purpose of decorators in NestJS?](#15-what-is-the-purpose-of-decorators-in-nestjs)
16. [How do you connect NestJS with a database?](#16-how-do-you-connect-nestjs-with-a-database)
17. [What is TypeORM and how is it used with NestJS?](#17-what-is-typeorm-and-how-is-it-used-with-nestjs)
18. [How do you implement caching in NestJS?](#18-how-do-you-implement-caching-in-nestjs)
19. [What are microservices and how does NestJS support them?](#19-what-are-microservices-and-how-does-nestjs-support-them)
20. [How do you test NestJS applications?](#20-how-do-you-test-nestjs-applications)

---

### 1. What is NestJS and how is it different from Express?

**NestJS** is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Unlike Express, NestJS provides a structured, opinionated architecture with built-in support for dependency injection, decorators, modules, and other enterprise-level features. It's built on top of Express but adds a higher level of abstraction, making it better suited for large-scale applications.

---

### 2. What are the core components of NestJS?

The core components of NestJS are:

- **Controllers**: Handle incoming requests and return responses.
- **Services**: Contain business logic and are reusable across controllers.
- **Modules**: Organize related components together.
- **Middleware**: Functions that process requests before reaching controllers.
- **Pipes**: Transform and validate data.
- **Guards**: Protect routes from unauthorized access.
- **Interceptors**: Add logging, transform responses, error handling.
- **Exception Filters**: Handle and format errors.

---

### 3. What is a controller in NestJS and how do you create one?

A **controller** handles incoming requests and returns responses. You create one using the `@Controller()` decorator:

```typescript
import { Controller, Get, Post, Body } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get()
  getAll() {
    return "Get all users";
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
```

---

### 4. What is a service in NestJS and what is its purpose?

A **service** contains the business logic of your application. It's typically injected into controllers to keep them lightweight. You create one using the `@Injectable()` decorator:

```typescript
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getAll() {
    return ["user1", "user2"];
  }

  create(user: any) {
    return user;
  }
}
```

---

### 5. Explain dependency injection in NestJS.

**Dependency Injection (DI)** is a design pattern that NestJS uses to manage dependencies automatically. Instead of creating instances manually, you declare dependencies as constructor parameters, and NestJS provides them:

```typescript
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }
}
```

---

### 6. What are modules in NestJS?

**Modules** are containers that organize related components (controllers, services, etc.). Every NestJS app has at least a root module. You define modules using the `@Module()` decorator:

```typescript
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
```

---

### 7. How do you create and use middleware in NestJS?

You create middleware implementing the `NestMiddleware` interface:

```typescript
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request received...");
    next();
  }
}
```

Apply it in a module:

```typescript
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("users");
  }
}
```

---

### 8. What are pipes and how do you use them?

**Pipes** transform and validate data. NestJS has built-in pipes like `ValidationPipe`. You can also create custom pipes:

```typescript
import { Injectable, PipeTransform, BadRequestException } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string) {
    const num = parseInt(value);
    if (isNaN(num)) {
      throw new BadRequestException("Validation failed");
    }
    return num;
  }
}
```

Use it in a controller:

```typescript
@Get(':id')
getUser(@Param('id', ParseIntPipe) id: number) {
  return `User ${id}`;
}
```

---

### 9. What are guards and what is their purpose?

**Guards** are used for authorization to protect routes. They implement the `CanActivate` interface:

```typescript
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return request.user ? true : false;
  }
}
```

Use it in a controller:

```typescript
@Get('profile')
@UseGuards(AuthGuard)
getProfile() {
  return 'User profile';
}
```

---

### 10. What are interceptors and how do you implement them?

**Interceptors** can bind additional logic before/after method execution. They implement the `NestInterceptor` interface:

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        statusCode: 200,
        data,
      })),
    );
  }
}
```

---

### 11. What are exception filters and how do you use them?

**Exception filters** catch and handle exceptions. They implement the `ExceptionFilter` interface:

```typescript
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.getResponse(),
    });
  }
}
```

---

### 12. How do you handle validation in NestJS?

Use the `ValidationPipe` with **class-validator** and **class-transformer**:

```typescript
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

@Post()
create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  return createUserDto;
}
```

---

### 13. What is the difference between @Injectable() and @Global()?

- **@Injectable()**: Makes a class available for dependency injection within a module scope.
- **@Global()**: Combined with @Module(), makes a module globally available throughout the application without needing to import it.

```typescript
@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
```

---

### 14. How do you implement authentication and authorization in NestJS?

Use **Passport.js** strategy with guards:

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  async validate(username: string, password: string) {
    // Verify user credentials
    return user;
  }
}

@Post('login')
@UseGuards(LocalAuthGuard)
login(@Request() req) {
  return req.user;
}
```

---

### 15. What is the purpose of decorators in NestJS?

**Decorators** are functions that modify classes, methods, or properties. They're fundamental to NestJS and used to:

- Define routes (`@Controller`, `@Get`, `@Post`)
- Inject dependencies (`@Inject`)
- Extract request data (`@Param`, `@Query`, `@Body`)
- Apply middleware (`@UseGuards`, `@UseInterceptors`)

---

### 16. How do you connect NestJS with a database?

You can use database modules like **@nestjs/typeorm**, **@nestjs/mongoose**, or **@nestjs/sequelize**:

```typescript
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "user",
      password: "password",
      database: "myapp",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

---

### 17. What is TypeORM and how is it used with NestJS?

**TypeORM** is an ORM (Object-Relational Mapping) library that simplifies database operations. It works with NestJS via the `@nestjs/typeorm` package:

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
```

---

### 18. How do you implement caching in NestJS?

Use the `@nestjs/cache-manager` module:

```typescript
import { Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Inject } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(@Inject("CACHE_MANAGER") private cacheManager: Cache) {}

  async getUser(id: number) {
    const cachedUser = await this.cacheManager.get(`user-${id}`);
    if (cachedUser) return cachedUser;

    // Fetch from database
    const user = { id, name: "John" };
    await this.cacheManager.set(`user-${id}`, user, 60000);
    return user;
  }
}
```

---

### 19. What are microservices and how does NestJS support them?

**Microservices** are small, independent services that communicate with each other. NestJS supports microservices via the `@nestjs/microservices` package:

```typescript
// Sender
@Controller()
export class AppController {
  constructor(private client: ClientProxy) {}

  @Get()
  sendMessage() {
    return this.client.send('hello', 'world');
  }
}

// Receiver
@MessagePattern('hello')
handleHello(data: string) {
  return `Hello ${data}`;
}
```

---

### 20. How do you test NestJS applications?

Use **Jest** (default testing framework in NestJS):

```typescript
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return all users", () => {
    const users = service.getAll();
    expect(users).toEqual(["user1", "user2"]);
  });
});
```

---
