# 📘 React Native Interview Questions

---

## 📚 Table of Contents

1. [What is React Native and how does it differ from React for the web?](#1-what-is-react-native-and-how-does-it-differ-from-react-for-the-web)
2. [Describe React Native architecture (JS thread, native modules, bridge).](#2-describe-react-native-architecture-js-thread-native-modules-bridge)
3. [Benefits and drawbacks of using React Native?](#3-benefits-and-drawbacks-of-using-react-native)
4. [Functional vs class components and Hooks equivalents.](#4-functional-vs-class-components-and-hooks-equivalents)
5. [How does useEffect work and its dependency array?](#5-how-does-useeffect-work-and-its-dependency-array)
6. [Styling in React Native vs CSS on the web.](#6-styling-in-react-native-vs-css-on-the-web)
7. [Explain Flexbox in React Native.](#7-explain-flexbox-in-react-native)
8. [Handling different screen sizes and pixel densities.](#8-handling-different-screen-sizes-and-pixel-densities)
9. [Core components: when to use View, Text, Image, etc.](#9-core-components-when-to-use-view-text-image-etc)
10. [FlatList vs ScrollView — when to use which?](#10-flatlist-vs-scrollview-when-to-use-which)
11. [Navigation libraries and tradeoffs.](#11-navigation-libraries-and-tradeoffs)
12. [State management options and structuring state.](#12-state-management-options-and-structuring-state)
13. [Performance pitfalls and optimizations](#13-performance-pitfalls-and-optimizations)
14. [JS-Native bridge and reducing bridge traffic.](#14-js-native-bridge-and-reducing-bridge-traffic)
15. [What are native modules and when to write one?](#15-what-are-native-modules-and-when-to-write-one)
16. [Metro, Hermes and JSI — what they are and why they matter.](#16-metro-hermes-and-jsi-what-they-are-and-why-they-matter)
17. [Debugging tools (Flipper, RN DevTools) and native crash debugging.](#17-debugging-tools-flipper-rn-devtools-and-native-crash-debugging)
18. [Testing strategies and common frameworks.](#18-testing-strategies-and-common-frameworks)
19. [CI/CD and releasing to stores; OTA updates.](#19-ci-cd-and-releasing-to-stores-ota-updates)
20. [Security: storing secrets and best practices.](#20-security-storing-secrets-and-best-practices)

---

### 1. What is React Native and how does it differ from React for the web?

React Native is a framework for building native mobile apps using JavaScript and React. Unlike React for the web, which renders to the DOM, React Native renders to native UI components. It provides platform-specific primitives (`View`, `Text`, `Image`) and uses a bridge to communicate between JS and native code.

---

### 2. Describe React Native architecture (JS thread, native modules, bridge).

React Native apps run JS code on a JS thread (engine: Hermes or JavaScriptCore). UI updates and native APIs are handled on native threads. Communication happens over a bridge (or newer JSI/TurboModules) where serialized messages pass between JS and native sides.

---

### 3. Benefits and drawbacks of using React Native?

- Benefits: faster cross-platform development, large ecosystem, hot reload, shared business logic.
- Drawbacks: platform gaps for complex native features, bridge overhead for heavy native-JS traffic, possible performance tuning required.

---

### 4. Functional vs class components and Hooks equivalents.

Functional components use hooks (`useState`, `useEffect`) and are the recommended style. Class components use lifecycle methods (`componentDidMount`, `componentWillUnmount`). Hooks provide the same lifecycle control with simpler composition.

---

### 5. How does useEffect work and its dependency array?

`useEffect` runs side effects after render. The dependency array controls when it re-runs: empty array runs once, omitted array runs after every render, specific deps re-run when those values change. Return a cleanup function to run on unmount or before next effect.

---

### 6. Styling in React Native vs CSS on the web.

Styling uses JavaScript objects via `StyleSheet.create`. It supports a subset of CSS properties (layout powered by Flexbox). No cascading or selectors; styles are applied directly to components.

---

### 7. Explain Flexbox in React Native.

Flexbox is the primary layout system. Key props include `flexDirection`, `justifyContent`, and `alignItems`. Default is `column` (different from web default `row`). Use `flex` to distribute space.

---

### 8. Handling different screen sizes and pixel densities.

Use `Dimensions`, `PixelRatio`, responsive units, percentage widths, and libraries like `react-native-responsive-screen`. For images use multiple density assets or `Image` with different `@2x/@3x` resources.

---

### 9. Core components: when to use View, Text, Image, etc.

`View` is a container (div equivalent), `Text` for text, `Image` for images, `TouchableOpacity`/`Pressable` for touchable elements, `TextInput` for inputs. Use platform-native components or community packages for complex needs.

---

### 10. FlatList vs ScrollView — when to use which?

`ScrollView` renders all children (good for small static content). `FlatList` virtualizes large lists, rendering items on demand — use for long lists to save memory and improve performance.

---

### 11. Navigation libraries and tradeoffs.

Common choices: `React Navigation` (JS-based, flexible, easy to extend) and `React Native Navigation` (native-driven, more performant for complex apps). Choose based on performance needs and native feature requirements.

---

### 12. State management options and structuring state.

Options: local `useState`/`useReducer`, Context for small global state, Redux/MobX/Recoil for complex global state. Keep UI state local and business/auth state in centralized stores.

---

### 13. Performance pitfalls and optimizations

Pitfalls: unnecessary re-renders, heavy JSON over the bridge, large unoptimized lists, heavy images. Optimizations: memoize components, use `keyExtractor`, `getItemLayout`, enable Hermes, use native modules for heavy CPU work.

---

### 14. JS-Native bridge and reducing bridge traffic.

The bridge serializes data between JS and native; frequent small messages cause overhead. Batch updates, move logic to native when necessary, use event coalescing, or adopt JSI/TurboModules to reduce serialization costs.

---

### 15. What are native modules and when to write one?

Native modules expose platform APIs (camera, sensors) or performance-sensitive code to JS. Write one when no community package exists or when you need native performance or platform-specific functionality.

---

### 16. Metro, Hermes and JSI — what they are and why they matter.

`Metro` is the bundler for RN. `Hermes` is a lightweight JS engine optimized for React Native (faster startup, lower memory). `JSI` (JavaScript Interface) enables faster, direct calls between JS and native, enabling TurboModules.

---

### 17. Debugging tools (Flipper, RN DevTools) and native crash debugging.

Use Flipper for inspecting network, logs, layout, and plugins. Remote JS debugging, React DevTools, and native debuggers (Xcode/Android Studio) help isolate JS vs native issues. Symbolicate native crashes for readable stack traces.

---

### 18. Testing strategies and common frameworks.

Unit tests with `Jest`, component tests with `React Native Testing Library`, and E2E tests with `Detox` or `Appium`. Mock native modules and use CI to run tests on emulators or device farms.

---

### 19. CI/CD and releasing to stores; OTA updates.

CI: use GitHub Actions, CircleCI, or Bitrise to build Android/iOS artifacts. Code signing: manage keystores and provisioning profiles securely. OTA (CodePush) allows JS bundle updates but be aware of native API or schema changes that require app store releases.

---

### 20. Security: storing secrets and best practices.

Use secure storage (`react-native-keychain`, `SecureStore`), avoid embedding API keys in JS, keep secrets server-side, use certificate pinning and HTTPS, and minimize permissions.

---

If you want, I can: add difficulty labels, expand answers, or produce a printable study sheet.
