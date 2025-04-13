# 📘 NextJS Interview Questions

---

## 📚 Table of Contents

1. [What is Next.js and what problems does it solve?](#1-what-is-nextjs-and-what-problems-does-it-solve)
2. [What is the difference between SSR, SSG, and ISR in Next.js?](#2-what-is-the-difference-between-ssr-ssg-and-isr-in-nextjs)
3. [What is the difference between getServerSideProps, getStaticProps, and getInitialProps?](#3-what-is-the-difference-between-getserversideprops-getstaticprops-and-getinitialprops)
4. [What are dynamic routes and how are they implemented?](#4-what-are-dynamic-routes-and-how-are-they-implemented)
5. [How do API routes work in Next.js?](#5-how-do-api-routes-work-in-nextjs)
6. [What is the difference between the pages and app directories?](#6-what-is-the-difference-between-the-pages-and-app-directories)
7. [What is middleware in Next.js 15?](#7-what-is-middleware-in-nextjs-15)
8. [How does image optimization work in Next.js?](#8-how-does-image-optimization-work-in-nextjs)
9. [How do you configure SEO using the Head component?](#9-how-do-you-configure-seo-using-the-head-component)
10. [What is Link prefetching in Next.js?](#10-what-is-link-prefetching-in-nextjs)
11. [How does routing work in the app directory (Next.js 15+)?](#11-how-does-routing-work-in-the-app-directory-nextjs-15)
12. [What is a layout in Next.js and how does it help?](#12-what-is-a-layout-in-nextjs-and-how-does-it-help)
13. [How do you implement authentication in Next.js?](#13-how-do-you-implement-authentication-in-nextjs)
14. [How do you deploy a Next.js app to Vercel?](#14-how-do-you-deploy-a-nextjs-app-to-vercel)
15. [How do you use environment variables in Next.js?](#15-how-do-you-use-environment-variables-in-nextjs)

---

### 1. What is Next.js and what problems does it solve?

**Next.js** is a React framework that allows for both **server-side rendering (SSR)** and **static site generation (SSG)** out of the box. It helps to build optimized, production-ready React applications with features like:

- Automatic **code splitting** for faster loading.
- **Server-side rendering (SSR)** for SEO-friendly pages.
- **Static site generation (SSG)** for fast, static pages.
- **API routes** for building backend services inside the Next.js app.
- Easy **routing** and file-based routing.

---

### 2. What is the difference between SSR, SSG, and ISR in Next.js?

- **SSR (Server-Side Rendering)**: Pages are rendered on the server at the request time (every request).
  - `getServerSideProps` is used.
- **SSG (Static Site Generation)**: Pages are pre-rendered at build time and served as static files.
  - `getStaticProps` is used.
- **ISR (Incremental Static Regeneration)**: Allows you to update static pages after build time with revalidation. A static page is regenerated in the background when a request is made, allowing content to be updated without a full rebuild.
  - `revalidate` field in `getStaticProps`.

---

### 3. What is the difference between getServerSideProps, getStaticProps, and getInitialProps?

- **getServerSideProps**: Runs on the server before the page is rendered and is used for SSR. It’s called on each request.
- **getStaticProps**: Runs at build time, generating static HTML and is used for SSG. It’s called once at build time.
- **getInitialProps**: Can be used in both class components and functional components. It works similarly to `getServerSideProps` but with a few differences, including support for custom page-level data fetching.

---

### 4. What are dynamic routes and how are they implemented?

**Dynamic routes** are routes that depend on a variable part of the URL, such as an ID or slug. They are implemented using square brackets in the filename.

Example:

```js
// pages/post/[id].js
export default function Post({ id }) {
  return <div>Post ID: {id}</div>;
}

// The page is accessible at /post/1, /post/2, etc.
```

---

### 5. How do API routes work in Next.js?

Next.js supports API routes, allowing you to create backend API endpoints within the same application. API routes are created inside the `pages/api` directory. Each file in this directory maps to an endpoint.

Example:

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, world!" });
}
```

---

### 6. What is the difference between the pages and app directories?

- **pages directory**: Used for traditional file-based routing where the structure of the files determines the route.
- **app directory (Next.js 13+ and later)**: Introduces an **app-based routing system** which allows more flexible layout management, better integration with **React Server Components**, and advanced features for routing.

---

### 7. What is middleware in Next.js 15?

**Middleware** in Next.js allows you to run code before a request is completed. It enables actions like authentication, redirects, logging, and custom request handling. Middleware can be placed in the `middleware.ts` file and works by intercepting requests at the edge.

---

### 8. How does image optimization work in Next.js?

Next.js provides an `Image` component that automatically optimizes images for faster loading. It supports automatic resizing, lazy loading, and serving images in modern formats like WebP.

Example:

```js
import Image from "next/image";

<Image src="/example.jpg" width={500} height={500} alt="Example" />;
```

---

### 9. How do you configure SEO using the Head component?

The **Head** component allows you to manage the `<head>` section of your HTML document, including adding meta tags, titles, and other SEO-related tags.

Example:

```js
import Head from "next/head";

function MyPage() {
  return (
    <Head>
      <title>My Page</title>
      <meta name="description" content="This is an example page for SEO" />
    </Head>
  );
}
```

---

### 10. What is Link prefetching in Next.js?

**Link prefetching** is a Next.js feature that automatically preloads linked pages in the background when a user hovers over a `<Link>` component. This results in faster navigation.

Example:

```js
import Link from "next/link";

<Link href="/about">
  <a>About</a>
</Link>;
```

By default, Next.js prefetches pages when they are in the viewport.

---

### 11. How does routing work in the app directory (Next.js 15+)?

In the app directory (available in Next.js 13 and later), routing works with the file-based routing system. Each folder and file inside the `app` directory maps directly to a route. Additionally, you can use layouts, templates, and server components.

---

### 12. What is a layout in Next.js and how does it help?

A **layout** in Next.js is a component that wraps around multiple pages or sections. It allows you to structure reusable UI elements, such as navigation bars, footers, or sidebars, that persist across pages.

Example:

```js
// app/layout.js
export default function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
```

---

### 13. How do you implement authentication in Next.js?

Authentication in Next.js can be implemented by using API routes for login, JWT tokens for user sessions, or external authentication providers like **NextAuth.js**.

Example with **NextAuth.js**:

```js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
```

---

### 14. How do you deploy a Next.js app to Vercel?

To deploy a Next.js app to **Vercel**:

1. Push your Next.js project to a GitHub, GitLab, or Bitbucket repository.
2. Sign up or log into [Vercel](https://vercel.com).
3. Connect your repository to Vercel and follow the prompts to deploy.
4. Vercel automatically detects that it's a Next.js app and handles the deployment configuration.

---

### 15. How do you use environment variables in Next.js?

You can use environment variables in Next.js by adding them to a `.env.local` file. Variables prefixed with `NEXT_PUBLIC_` will be exposed to the browser.

Example:

```env
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access it in the code:

```js
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---
