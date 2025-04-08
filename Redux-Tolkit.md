# 📘 Redux Tolkit Interview Questions

---

## 📚 Table of Contents

1. [What is Redux and why is Redux Toolkit preferred over traditional Redux?](#1-what-is-redux-and-why-is-redux-toolkit-preferred-over-traditional-redux)
2. [What is a slice in Redux Toolkit?](#2-what-is-a-slice-in-redux-toolkit)
3. [How do you configure the Redux store using Redux Toolkit?](#3-how-do-you-configure-the-redux-store-using-redux-toolkit)
4. [What is createSlice and how does it work?](#4-what-is-createslice-and-how-does-it-work)
5. [How does createAsyncThunk work?](#5-how-does-createasyncthunk-work)
6. [What is the difference between dispatch and useSelector?](#6-what-is-the-difference-between-dispatch-and-useselector)
7. [How do you structure a scalable Redux store?](#7-how-do-you-structure-a-scalable-redux-store)
8. [What are middleware functions in Redux Toolkit?](#8-what-are-middleware-functions-in-redux-toolkit)
9. [How do you handle loading, success, and error states with async thunks?](#9-how-do-you-handle-loading-success-and-error-states-with-async-thunks)
10. [How do you integrate Redux Toolkit with React?](#10-how-do-you-integrate-redux-toolkit-with-react)
11. [What are RTK Query and its benefits?](#11-what-are-rtk-query-and-its-benefits)
12. [How do you normalize data in Redux Toolkit?](#12-how-do-you-normalize-data-in-redux-toolkit)
13. [What is the difference between extraReducers and reducers?](#13-what-is-the-difference-between-extrareducers-and-reducers)
14. [How do you persist Redux state?](#14-how-do-you-persist-redux-state)
15. [What is the purpose of the configureStore function?](#15-what-is-the-purpose-of-the-configurestore-function)

---

### 1. What is Redux and why is Redux Toolkit preferred over traditional Redux?

**Redux** is a state management library for JavaScript applications, especially useful for managing complex states in large applications. **Redux Toolkit** is preferred because it simplifies the Redux setup, reduces boilerplate code, and includes tools for efficiently working with Redux like `createSlice` and `createAsyncThunk`.

---

### 2. What is a slice in Redux Toolkit?

A **slice** in Redux Toolkit is a piece of the Redux state, along with the reducers and actions that operate on that state. It is defined using `createSlice`, which automatically generates the action creators and reducers for you.

Example:

```js
const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "" },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
```

---

### 3. How do you configure the Redux store using Redux Toolkit?

To configure the Redux store, use the `configureStore` method from Redux Toolkit. It simplifies store configuration and automatically sets up the Redux DevTools extension and middleware.

Example:

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

---

### 4. What is createSlice and how does it work?

`createSlice` is a function from Redux Toolkit that simplifies reducer creation. It automatically generates actions and reducers based on the provided `reducers` object.

Example:

```js
const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "" },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
```

---

### 5. How does createAsyncThunk work?

`createAsyncThunk` is used for handling asynchronous logic. It automatically generates action types for the start, success, and failure of an asynchronous operation, making it easier to work with async actions.

Example:

```js
export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
});
```

---

### 6. What is the difference between dispatch and useSelector?

- **dispatch**: Used to send actions to the Redux store.
- **useSelector**: Used to retrieve the current state from the Redux store.

Example:

```js
const dispatch = useDispatch();
const user = useSelector((state) => state.user);
```

---

### 7. How do you structure a scalable Redux store?

For a scalable Redux store, organize state into slices, one for each feature or domain of your application. Use separate files for slices, actions, and reducers to keep your code modular.

Example structure:

```
/store
  /slices
    userSlice.js
    postSlice.js
  store.js
```

---

### 8. What are middleware functions in Redux Toolkit?

Middleware functions in Redux Toolkit are used to extend the store’s capabilities, like logging, making asynchronous requests, or performing analytics. By default, Redux Toolkit includes `redux-thunk` for async actions, but you can add custom middleware as well.

Example:

```js
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});
```

---

### 9. How do you handle loading, success, and error states with async thunks?

In `createAsyncThunk`, Redux Toolkit automatically handles `pending`, `fulfilled`, and `rejected` action types, which you can use in the slice's `extraReducers` to manage loading, success, and error states.

Example:

```js
const userSlice = createSlice({
  name: "user",
  initialState: { loading: false, error: "", data: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
```

---

### 10. How do you integrate Redux Toolkit with React?

To integrate Redux Toolkit with React, you need to use the `Provider` component from `react-redux` and pass your Redux store to it. You can then use `useDispatch` and `useSelector` to interact with the store in your components.

Example:

```js
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
}
```

---

### 11. What are RTK Query and its benefits?

RTK Query is a powerful data fetching and caching tool included with Redux Toolkit. It simplifies handling API requests, caching, pagination, and optimistic updates without writing much boilerplate code.

Benefits:

- Automatically generates reducers and actions.
- Handles caching, pagination, and optimistic updates.
- Reduces boilerplate code compared to traditional approaches.

---

### 12. How do you normalize data in Redux Toolkit?

To normalize data, use the `entities` pattern where items are stored by their unique IDs. This helps reduce redundancy and makes it easier to update nested data.

Example:

```js
const postsSlice = createSlice({
  name: "posts",
  initialState: { entities: {}, ids: [] },
  reducers: {
    addPost(state, action) {
      const post = action.payload;
      state.entities[post.id] = post;
      state.ids.push(post.id);
    },
  },
});
```

---

### 13. What is the difference between extraReducers and reducers?

- **reducers**: Used for handling synchronous actions and updating the state directly.
- **extraReducers**: Used for handling asynchronous actions (e.g., from `createAsyncThunk`) and responding to their lifecycle events (pending, fulfilled, rejected).

---

### 14. How do you persist Redux state?

To persist Redux state, use libraries like `redux-persist`, which can save the Redux state to local storage or session storage, and automatically rehydrate the state when the app restarts.

Example:

```js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
```

---

### 15. What is the purpose of the configureStore function?

`configureStore` is a Redux Toolkit function that simplifies the process of creating the Redux store. It automatically sets up useful defaults like Redux DevTools integration, middleware (like `redux-thunk`), and an enhanced performance setup.

Example:

```js
const store = configureStore({
  reducer: rootReducer,
});
```

---
