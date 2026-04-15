# CSS Guidelines - React Shopping App

## 🎨 Design System

### Typography (Sans-Serif)

```css
/* Font Family - Primary */
font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', sans-serif;

/* Font Sizes */
h1: 2.5rem (40px)
h2: 2rem (32px)
h3: 1.75rem (28px)
h4: 1.5rem (24px)
h5: 1.25rem (20px)
h6: 1rem (16px)
body/p: 1rem (16px)
small: 0.9rem (14px)
```

### Color Palette

```css
/* Primary */
Primary (Gold): #f8b807
Primary Hover: #e0a000

/* Text */
Text Primary: #333
Text Secondary: #555
Text Muted: #bbb

/* Background */
Background Light: #f8f8f8
Background White: #ffffff
Background Dark: #1a1a1a

/* Borders */
Border Light: #ddd
Border Muted: #bbb
```

### Spacing (Base: 0.5rem)

```css
xs: 0.25rem  (4px)
sm: 0.5rem   (8px)
md: 1rem     (16px)
lg: 1.5rem   (24px)
xl: 2rem     (32px)
xxl: 3rem    (48px)
```

### Border Radius

```css
Border Radius: 4px (for inputs, buttons, cards)
```

## 📝 CSS Best Practices

### 1. Reset & Normalize

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 2. Form Elements Styling

```css
input,
textarea,
select {
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #f8b807;
  box-shadow: 0 0 0 3px rgba(248, 184, 7, 0.1);
}
```

### 3. Button Styling

```css
button {
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### 4. Layout - Flexbox (Preferred)

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

### 5. Layout - Grid (For Complex Layouts)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

### 6. Transitions & Animations

```css
/* Consistent Transitions */
transition: all 0.3s ease;
transition: color 0.3s ease;
transition: border-color 0.3s ease;
```

### 7. Shadows

```css
/* Light Shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

/* Medium Shadow */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

/* Heavy Shadow */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

## 🔄 File Structure

### Global Styles

- `src/index.css` - Base typography, resets, utilities

### Component Styles

- `src/component/Layout/NavBar.css` - Navigation Bar
- `src/component/Layout/Footer.css` - Footer
- `src/component/Banner/Banner.css` - Hero Banner
- `src/component/Shop/**/*.css` - Shop Components
- `src/component/Products/**/*.css` - Product Components
- `src/component/Modal/**/*.css` - Modal Components

### Page Styles

- `src/pages/HomePage.css`
- `src/pages/ShopPage.css`
- `src/pages/DetailPage.css`
- `src/pages/CartPage.css`
- `src/pages/CheckoutPage.css`
- `src/pages/LoginPage.css`

## ✅ Update Checklist for Old CSS Files

When updating CSS files, ensure:

- [ ] Use `sans-serif` font throughout
- [ ] Follow font-size standards (h1-h6, p, small)
- [ ] Use color palette (#f8b807, #333, #555, etc.)
- [ ] Apply consistent spacing (sm, md, lg, xl)
- [ ] Use 4px border-radius for inputs/buttons
- [ ] Add proper transitions (0.3s ease)
- [ ] No hardcoded colors - use variables from palette
- [ ] Remove old font-family references (Alumni Sans, Lucida Sans)
- [ ] Remove font-style: italic (unless intentional)
- [ ] Ensure responsive design with flexbox/grid
- [ ] Test layout on mobile (768px breakpoint)

## 🎯 Common CSS Patterns

### Card Component

```css
.card {
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### Badge/Label

```css
.badge {
  display: inline-block;
  background-color: #f8b807;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}
```

### Text Utilities

```css
.text-center {
  text-align: center;
}
.text-muted {
  color: #bbb;
  opacity: 0.8;
}
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile First */
/* Default: Mobile styles */

/* Tablet */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

## 🚀 Performance Tips

1. **Minimize CSS** - Remove unused styles
2. **Use CSS Classes** - Instead of inline styles
3. **Avoid !important** - Use proper specificity
4. **Batch Selectors** - Group similar rules
5. **Mobile First** - Write mobile CSS first, then add breakpoints

## 📝 Examples of Updated Files

### Already Updated

- ✅ `src/index.css` - Global styles with sans-serif
- ✅ `src/component/Layout/NavBar.css` - Optimized
- ✅ `src/component/Layout/Footer.css` - Optimized
- ✅ `src/pages/LoginPage.css` - Optimized

### Need Update (Template)

```css
/* Old Style */
.component {
  font-family: "Alumni Sans", sans-serif; /* Remove */
  margin-top: 100px; /* Use: 6.25rem or margin-top: var(--xxl) */
  color: rgb(105, 104, 104); /* Change to: #696868 */
  font-size: 20px; /* Change to: 1.25rem */
}

/* New Style */
.component {
  font-family: "Segoe UI", sans-serif;
  margin-top: 3rem;
  color: #696868;
  font-size: 1.25rem;
}
```

---

**Last Updated:** April 14, 2025
**Font:** Segoe UI (sans-serif)
**Color Scheme:** Gold (#f8b807) + Dark Gray (#333)
