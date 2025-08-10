# Add to Cart Feature Guide (Zustand)

This guide will help you implement an "Add to Cart" feature using Zustand. We'll start with a simple product card and leave the cart logic for you to implement as an exercise. Each step includes code snippets and explanations.

---

## 1. Create a Product Card Component

**Why:** A product card displays product details and provides a button to add the product to the cart.

**How:** Create a new file `src/features/activity/ProductCard.jsx`.

```jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, margin: 8, borderRadius: 8 }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)} disabled>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
```

**What this does:**
- Renders a product's name and price.
- Shows an "Add to Cart" button (currently disabled, cart logic not implemented).

---

## 2. Display a List of Products

**Why:** To show multiple products and allow users to interact with each.

**How:** Create a new file `src/features/activity/ProductList.jsx`.

```jsx
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.99 },
  { id: 3, name: 'Orange', price: 1.2 },
];

const ProductList = () => {
  // Placeholder for add to cart handler
  const handleAddToCart = (product) => {
    // TODO: Implement add to cart logic
    alert(`Add to cart: ${product.name}`);
  };

  return (
    <div>
      <h2>Shop</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
```

**What this does:**
- Displays a list of sample products using the `ProductCard` component.
- Prepares a handler for adding to cart (not implemented).

---

## 3. Use the Product List in Your App

**Why:** To show the shop UI in your main app.

**How:** In `src/App.jsx`, import and use the `ProductList` component.

```jsx
import ProductList from './features/activity/ProductList';
// ...existing imports...

function App() {
  return (
    <div>
      {/* ...existing app code... */}
      <ProductList />
    </div>
  );
}

export default App;
```

**What this does:**
- Renders the product list in your main app UI.

---

## 4. Implement the Cart Feature

**Why:** To allow users to add products to a cart and view them in the Cart UI.

### Step 1: Add Cart State to Store

In `src/store/activityStore.js`, add cart state and actions:

```js
const useActivityStore = create((set) => ({
  // ...existing state...
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (index) => set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
  // ...existing actions...
}));
```

### Step 2: Connect ProductList to Cart

In `ProductList.jsx`, use the store and pass `addToCart` to `ProductCard`:

```jsx
import useActivityStore from '../../store/activityStore';
// ...existing code...

const addToCart = useActivityStore((state) => state.addToCart);

<ProductCard key={product.id} product={product} onAddToCart={addToCart} />
```

### Step 3: Enable Add to Cart Button

In `ProductCard.jsx`, remove the `disabled` prop from the button:

```jsx
<button onClick={() => onAddToCart(product)}>
  Add to Cart
</button>
```

### Step 4: Render Cart Items

In `App.jsx`, use the store to get the cart and pass it to the `Cart` component:

```jsx
import useActivityStore from './store/activityStore';
// ...existing code...

const cart = useActivityStore((state) => state.cart);

<Cart cart={cart} />
```

---

Now, when you click "Add to Cart", the product will appear in the Cart UI!
