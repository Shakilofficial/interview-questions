# 📘 ReactJS Interview Questions

---

## 📚 Table of Contents

1. [What is the virtual DOM and how does React use it?](#1-what-is-the-virtual-dom-and-how-does-react-use-it)
2. [What is the difference between functional and class components?](#2-what-is-the-difference-between-functional-and-class-components)
3. [What are React hooks? Name some common ones.](#3-what-are-react-hooks-name-some-common-ones)
4. [How does useState work internally?](#4-how-does-usestate-work-internally)
5. [How does useEffect work and when is it called?](#5-how-does-useeffect-work-and-when-is-it-called)
6. [What is prop drilling and how do you avoid it?](#6-what-is-prop-drilling-and-how-do-you-avoid-it)
7. [How does Context API work?](#7-how-does-context-api-work)
8. [What is the use of useRef?](#8-what-is-the-use-of-useref)
9. [What are keys in React and why are they important?](#9-what-are-keys-in-react-and-why-are-they-important)
10. [How do you handle forms in React?](#10-how-do-you-handle-forms-in-react)
11. [What are controlled vs uncontrolled components?](#11-what-are-controlled-vs-uncontrolled-components)
12. [How does conditional rendering work?](#12-how-does-conditional-rendering-work)
13. [What is React.memo and when would you use it?](#13-what-is-reactmemo-and-when-would-you-use-it)
14. [What is the difference between useCallback and useMemo?](#14-what-is-the-difference-between-usecallback-and-usememo)
15. [How do you handle errors in React?](#15-how-do-you-handle-errors-in-react)
16. [What are fragments in React?](#16-what-are-fragments-in-react)
17. [What is lazy loading and how do you implement it?](#17-what-is-lazy-loading-and-how-do-you-implement-it)
18. [How do you optimize performance in a large React app?](#18-how-do-you-optimize-performance-in-a-large-react-app)
19. [How do portals work in React?](#19-how-do-portals-work-in-react)
20. [What are the benefits of server components in React 18?](#20-what-are-the-benefits-of-server-components-in-react-18)

---

### 1. What is the virtual DOM and how does React use it?

The **virtual DOM** is an in-memory representation of the real DOM elements. React uses it to optimize DOM updates by minimizing the number of direct updates to the real DOM. When the state of a component changes, React updates the virtual DOM first, compares it with the previous virtual DOM, and calculates the minimal changes needed to update the real DOM.

---

### 2. What is the difference between functional and class components?

- **Functional components**: Simpler to write, use hooks, and have no lifecycle methods. They are stateless by default (although hooks can be used to manage state).
- **Class components**: More complex, with lifecycle methods and the ability to hold internal state. They require the `render()` method.

---

### 3. What are React hooks? Name some common ones.

React hooks are functions that allow functional components to use state and other React features. Some common hooks are:

- **useState**: Manages local state.
- **useEffect**: Runs side effects like data fetching or DOM manipulation.
- **useContext**: Accesses values from the Context API.
- **useRef**: Provides a reference to a DOM element or a value.
- **useMemo**: Memoizes a computed value to optimize performance.

---

### 4. How does useState work internally?

Internally, `useState` works by keeping track of state variables in the component using React's internal mechanism. When you call `useState(initialValue)`, it creates a state variable with the provided initial value and returns a getter and setter function. React re-renders the component when the setter function is called to update the state.

---

### 5. How does useEffect work and when is it called?

`useEffect` is a hook that lets you perform side effects in functional components. It runs after the component renders, but it can be controlled with dependencies to run conditionally.

Example:

```js
useEffect(() => {
  // Code to run after render
}, [dependency]); // Dependency array to control when it runs
```

It can be used for tasks like fetching data, subscribing to events, or manually changing the DOM.

---

### 6. What is prop drilling and how do you avoid it?

**Prop drilling** refers to the process of passing props through multiple layers of components just to get them to a deep child. This can make the code harder to maintain.

To avoid it, you can use:

- **Context API**: Pass data globally without drilling.
- **State management libraries** like Redux.

---

### 7. How does Context API work?

The **Context API** allows you to share data across the component tree without having to pass props down manually. You create a context using `createContext`, provide it using `Provider`, and consume it with `useContext`.

Example:

```js
const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="some value">
      <Component />
    </MyContext.Provider>
  );
}

function Component() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
```

---

### 8. What is the use of useRef?

`useRef` is a hook that provides a way to persist values across renders without causing a re-render. It's often used to reference DOM elements or store mutable values that don’t need to trigger a re-render.

Example:

```js
const inputRef = useRef(null);
```

---

### 9. What are keys in React and why are they important?

**Keys** help React identify which items in a list have changed, been added, or removed, improving performance during re-renders. Keys should be unique to each item in a list.

Example:

```js
const list = [1, 2, 3];
const items = list.map((item) => <li key={item}>{item}</li>);
```

---

### 10. How do you handle forms in React?

In React, forms can be handled using controlled components, where form data is managed by React state. You use `useState` to manage the value of form elements and `onChange` events to update the state.

Example:

```js
function MyForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  return <input value={value} onChange={handleChange} />;
}
```

---

### 11. What are controlled vs uncontrolled components?

- **Controlled components**: React state controls the form data, making the component the "source of truth."
- **Uncontrolled components**: Form elements manage their own state, and you can access the data via `refs`.

---

### 12. How does conditional rendering work?

**Conditional rendering** in React is the process of rendering different elements or components based on some condition. This can be done using JavaScript operators like `if`, ternary operator, or logical `&&`.

Example:

```js
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

---

### 13. What is React.memo and when would you use it?

`React.memo` is a higher-order component that prevents unnecessary re-renders of a component if its props haven’t changed. It is useful when you have functional components that only re-render when specific props change.

---

### 14. What is the difference between useCallback and useMemo?

- **useCallback**: Memoizes a callback function so it doesn’t get re-created on every render.
- **useMemo**: Memoizes the result of a computation so it doesn’t get recalculated unless its dependencies change.

---

### 15. How do you handle errors in React?

You can handle errors in React using **Error Boundaries**. These are special components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

Example:

```js
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

### 16. What are fragments in React?

**Fragments** allow you to group multiple elements without adding extra nodes to the DOM. You can use `<React.Fragment>` or the shorthand `<>` to wrap multiple children.

Example:

```js
<>
  <h1>Hello</h1>
  <p>Welcome to React</p>
</>
```

---

### 17. What is lazy loading and how do you implement it?

**Lazy loading** is a technique to load components only when they are needed, improving performance by reducing the initial load time. You can implement it using `React.lazy` and `Suspense`.

Example:

```js
const MyComponent = React.lazy(() => import("./MyComponent"));
```

---

### 18. How do you optimize performance in a large React app?

To optimize performance:

- Use **React.memo**, **useCallback**, and **useMemo**.
- **Code splitting**: Load components lazily.
- Avoid **reconciliation** with unnecessary state changes.
- Use **windowing** or **virtualization** libraries (e.g., `react-window`).

---

### 19. How do portals work in React?

**Portals** allow you to render children into a DOM node that exists outside the parent component's DOM hierarchy. You use `ReactDOM.createPortal` for this.

Example:

```js
ReactDOM.createPortal(child, document.getElementById("portal"));
```

---

### 20. What are the benefits of server components in React 18?

Server components in React 18 allow rendering parts of the UI on the server, improving performance and SEO. They allow you to send a minimal JavaScript bundle to the client while keeping rendering on the server-side.

---
