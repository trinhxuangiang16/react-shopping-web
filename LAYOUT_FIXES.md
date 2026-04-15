# Layout Fixes - ShopPage & Sidebar

## 🔧 Issues Fixed

### Before (Sai bố cục)

- `.wrap-shop` chứa sidebar (13%) + content (57%) = không hợp lý
- Search input + sort dropdown bị `space-between` → kéo xa nhau quá
- Sidebar & content không align đúng
- Pagination (`float: right`) conflict với flex layout
- Product grid width không consistent

### After (Sai bố cục fix)

#### 1. **ShopPage.css** - Layout Structure

```css
/* Main container */
.wrap-shop {
  display: flex;
  width: 100%;
  max-width: 100%;
  margin-top: 2rem;
}

/* Sidebar 20% width */
.wrap-shop > .side-shop {
  width: 20%;
}

/* Content 75% width */
.wrap-shop > .wrap-all-product {
  width: 75%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Search + Sort aligned to RIGHT */
.list-shop {
  display: flex;
  justify-content: flex-end; /* Changed from space-between */
  gap: 2rem; /* Consistent gap */
  align-items: center;
  width: 100%;
}

/* Input styling */
.input-shop {
  width: 300px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-shop:focus {
  outline: none;
  border-color: #f8b807;
  box-shadow: 0 0 0 3px rgba(248, 184, 7, 0.1);
}

/* Product grid - full width */
.wrap-produst-list {
  width: 100%;
  margin-top: 3rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
}

/* Pagination centered */
.whole-pan {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
```

#### 2. **SideBar.css** - Updated Width

```css
.side-shop {
  width: 20%; /* Changed from 13% */
  padding-top: 1.5625rem;
  padding-right: 2rem;
  border-right: 1px solid #e0e0e0; /* Added separator */
}
```

## 📐 Layout Proportions

**Before:**

- Sidebar: 13%
- Content: 57%
- Total: 70% (không phải 100%)
- Layout rối vì flex-direction không rõ

**After:**

- Viewport: 100%
- `.wrap-shop`: flex container
  - Sidebar: 20%
  - Content: 75%
  - Total: 95% (balanced)
- Components aligned properly in flex

## ✨ Key Improvements

✅ **Search + Sort Alignment**

- From: `justify-content: space-between` (kéo ra 2 đầu)
- To: `justify-content: flex-end` (aligned right)
- Gap: 2rem (consistent spacing)

✅ **Sidebar Styling**

- Width: 20% (wider, better visible)
- Border-right: Light gray separator
- Padding-right: 2rem (breathing room)

✅ **Product Grid**

- Grid template: minmax(220px, 1fr) (responsive)
- Gap: 2rem (consistent spacing)
- Width: 100% (full content area)

✅ **Pagination**

- From: `float: right` (conflict with flex)
- To: `display: flex; justify-content: center` (flex layout)
- Full width: 100%

✅ **Content Container**

- Display: flex
- Flex-direction: column
- Flex: 1 (flexible)
- Padding: 2rem (breathing room)

## 📱 Responsive Behavior

- Desktop (> 768px): Sidebar 20% + Content 75%
- Mobile (≤ 768px): Stack vertically (media query handles)

## 🎯 Visual Hierarchy

1. Page title (70% centered)
2. Sidebar (20%) + Content (75%) → flex row
3. Search/Sort aligned right
4. Product grid (responsive columns)
5. Pagination centered

---

**Updated Date**: April 15, 2026
**Status**: ✅ Layout Fixed
