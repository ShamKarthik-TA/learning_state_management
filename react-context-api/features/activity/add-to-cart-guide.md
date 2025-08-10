# Add to Cart Feature Guide (Context API)

This guide will help you implement an "Add to Cart" feature using React Context API. We'll start with a simple product card and leave the cart logic for you to implement as an exercise. Each step includes code snippets and explanations.

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


## 0. Wrap Your App with ActivityProvider

**Why:** The ActivityProvider must wrap your app at the top level so that the context is available everywhere.

**How:** In `src/main.jsx`, wrap `<App />` with `<ActivityProvider>`:

```jsx
import { ActivityProvider } from './features/activity/ActivityContext';
// ...existing imports...

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </StrictMode>,
)
```

---

## 4. Implement the Cart Feature

**Why:** To allow users to add products to a cart and view them in the Cart UI.

### Step 1: Add Cart State to Context

In `ActivityContext.jsx`, add a `cart` state and functions to add/remove items:

```jsx
const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((prev) => [...prev, product]);
};

const removeFromCart = (index) => {
  setCart((prev) => prev.filter((_, i) => i !== index));
};

// In the provider value:
<ActivityContext.Provider value={{ activities, addActivity, removeActivity, cart, addToCart, removeFromCart }}>
```

### Step 2: Connect ProductList to Cart

In `ProductList.jsx`, use the context and pass `addToCart` to `ProductCard`:

```jsx
import { useActivity } from './ActivityContext';
// ...existing code...

const { addToCart } = useActivity();

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

In `App.jsx`, use the context to get the cart and pass it to the `Cart` component:

```jsx
import { useActivity } from './features/activity/ActivityContext';
// ...existing code...

const { cart } = useActivity();

<Cart cart={cart} />
```

---

Now, when you click "Add to Cart", the product will appear in the Cart UI!
