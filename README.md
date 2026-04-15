# React Shopping Web (Frontend)

Website frontend cho shopping/ecommerce (demo) với flow duyệt sản phẩm, xem chi tiết, giỏ hàng, checkout và đăng nhập admin để test các tính năng.

## Live Demo

- https://react-shopping-web.vercel.app/

## Tech Stack

- **React 18** + **Vite**
- **Routing**: React Router DOM v6 (data router, loader)
- **State Management**: **Redux Toolkit** + React Redux
- **UI**: Bootstrap 5, React-Bootstrap, Reactstrap, Font Awesome
- **Testing libs (installed)**: Testing Library (`@testing-library/react`, `jest-dom`, `user-event`)

## Features / Modules

- **Product browsing**
  - Home / Shop: hiển thị danh sách sản phẩm
  - Filter theo **category**
  - Product Detail theo route `detail/:productId`
- **Cart**
  - Add to cart, update quantity, remove item
  - Tính **total price**
  - Persist cart + total bằng **localStorage**
- **Checkout**
  - Trang checkout (demo flow)
- **Auth (demo)**
  - Login bằng **admin account** để test
  - Register là **fake** (validate form + mock async), không tạo user thật
  - Lưu userCurrent vào localStorage

## Admin account (for testing)

- Email: `admin@boutique.com`
- Password: `admin@123`

> Lưu ý: Auth trong dự án này mang tính demo UI/Redux flow (không kết nối backend thật).

## Run locally

### Requirements

- Node.js 18+ (khuyến nghị)
- npm

### Install & start

```bash
git clone https://github.com/trinhxuangiang16/react-shopping-web.git
cd react-shopping-web
npm install
npm run dev
```

Mặc định Vite sẽ chạy và in ra local URL (thường là):

- http://localhost:5173

## Project notes (highlights)

- Tổ chức state theo Redux slices: `authSlice`, `cartSlice`, `toggleSlice`, `inboxSlice`.
- Xử lý cart + total theo hướng “UI state + localStorage persistence” để demo trải nghiệm người dùng.
