# Boutique - High-Performance React E-Commerce Frontend

Boutique is a polished, high-performance e-commerce frontend application specializing in Apple devices and premium accessories. Built with React 18, Vite, Redux Toolkit, and React Router v6, it delivers an optimized, smooth, and highly interactive user experience.

- **Production Live URL:** [shop.trinhxuangiang.me](https://shop.trinhxuangiang.me)

---

## 🛠 Core Tech Stack & Architecture

- **Runtime & Build Tooling:** React 18 (Hooks, Suspense, Lazy loading) + Vite (Super fast HMR & Rollup compilation)
- **State Architecture:** Redux Toolkit (Slices for authentication, shopping cart, messaging, and interface toggles)
- **Routing Engine:** React Router DOM v6 (Utilizing modern Data Routers with Loaders and Route Guarding)
- **Styling Paradigm:** Tailwind CSS v4 (Design tokens & Utility-first) + React Bootstrap (Responsive components)
- **External Libraries:** `currency.js` (Accurate financial formatting), Lucide React (Slick SVG iconography)

---

## 🚀 Key Technical Highlights & Frontend Engineering

### 1. Data Router & Pre-fetching (Zero-Flicker UX)
Instead of relying on classic `useEffect` fetch waterfalls that cause page layout shifts and loading flickers, the app implements React Router v6 **Data Loaders** (`productsLoader`, `shopLoader`, etc.). 
- Dữ liệu được fetch song song trong lúc route đang thay đổi.
- Trang chỉ render khi dữ liệu đã sẵn sàng ở Client-side, loại bỏ hiện tượng giật màn hình (layout shift) và giảm thiểu số lần Re-render không cần thiết.

### 2. Global State & LocalStorage Synchronization
The state of the application is managed via Redux Toolkit slices, ensuring a clean unidirectional data flow:
- **Cart Persistence:** The cart state is fully synchronized with `localStorage`. Price calculations (subtotal, shipping, discounts, tax) are computed using `currency.js` to prevent JavaScript floating-point errors (e.g., `0.1 + 0.2 = 0.30000000000000004`).
- **Auth Database Mocking:** Regulated local account database stored in `localStorage` (`usersList`) supporting automatic role injection (`role: "user"` vs `role: "admin"`).

### 3. Advanced Route Guarding & Protected Routes
To secure client-side pages (Cart, Checkout, Orders, Profile), the routing structure was re-architected into a nested guard model:
- **`ProtectedRoute` Wrapper:** An authentication interceptor component hooks directly into the Redux auth state. Unauthenticated requests are immediately redirected back to `/login` using `<Navigate to="/login" replace />`.
- **Public Sandbox Isolation:** `/login` and `/register` are left exposed, allowing visitors to switch tabs freely while preventing logged-in users from revisiting auth pages.

### 4. Dynamic Product Grid & UI Polish
To solve common e-commerce UI bugs (like unequal height cards due to varying title lengths or broken image scales):
- **Flexbox Alignments:** Utilized uniform product cards (`h-full` layout) with minimum title heights (`min-h-[44px]`) to align the pricing and action rows horizontally.
- **Dynamic Tag Badges:** Built logic to auto-generate badges based on product specs (e.g., `Premium` for high-end items, `Best Value` for budget options).
- **Responsive Custom Dropdowns:** Removed native browser styling (`appearance-none`) on sort-selectors and layered an absolute-positioned `ChevronDown` vector to maintain cross-browser visual fidelity.

### 5. Custom Vector Logo Design Integration
- Built custom geometric SVG files for the brand logo (`logo.svg` for light theme, `logo-white.svg` for dark footers) and a square monogram Favicon (`favicon.svg`).
- Resolves resolution pixelation issues on Retina displays, maintaining sharp vector graphics at any viewport scale.

---

## 🧩 Complex Problem Solving (Case Studies)

### 📌 Problem 1: Typing in registration form triggered auto-redirects
* **Symptom:** In early builds, typing a single character into any register form input immediately triggered a navigation event back to `/login`.
* **Root Cause:** A boolean state tracking form submission was incorrectly evaluated on change, causing the redirect hook to fire prematurely.
* **Solution:** Introduced a strict `isSubmitted` state in the Redux register action. The redirect logic only evaluates upon a `SUCCESS` payload dispatch after complete validation.

### 📌 Problem 2: JavaScript float precision in pricing
* **Symptom:** Summing up large numbers of USD prices occasionally produced weird decimal points (like `$1199.9900000003`).
* **Root Cause:** Standard IEEE 754 float arithmetic in JS cannot represent decimal fractions precisely.
* **Solution:** Integrated `currency.js` as the single source of truth for financial transformations, wrapping all addition and formatting operations.

### 📌 Problem 3: Support chat auto-reply synchronization
* **Symptom:** Chat messages sent by users sat empty without response, making the support interface look dead.
* **Root Cause:** Static front-ends lack interactive server socket connections.
* **Solution:** Programmed an asynchronous mock operator inside `PopupChat.jsx`. Upon message dispatch, it triggers a `setTimeout` (1.5s delay) to dispatch simulated support responses, rendering them correctly on the left side of the chat interface with custom support avatars.

### 📌 Problem 4: Scroll retention at the bottom of the page when changing routes
* **Symptom:** In a Single Page Application (SPA), when clicking on a product from the bottom of the Homepage, the details page loads, but the browser scroll remains at the bottom rather than starting at the top.
* **Root Cause:** Standard client-side routing replaces components without re-loading the document, meaning the browser's scroll height position is preserved from the previous page view.
* **Solution:** Integrated React Router v6's native `<ScrollRestoration />` component directly inside `RootLayout` (`Root.jsx`). This handles automatic scroll resets on navigate while preserving scroll memory on history back/forward operations.

---

## 📈 Search Engine Optimization (SEO) & Performance
- **Semantic Structure:** Leveraged strict HTML5 elements (`<header>`, `<main>`, `<footer>`, `<section>`).
- **Heading Hierarchy:** Strictly enforces a single `<h1>` per page with correctly sequenced subheadings (`<h2>`, `<h3>`).
- **Asset Optimization:** Replaced localized raw graphics with compressed next-gen images served from reliable CDNs.
- **Bundle Analysis:** The application builds cleanly into a highly optimized client bundle (~388 KB JS chunk) within 3.58 seconds.
