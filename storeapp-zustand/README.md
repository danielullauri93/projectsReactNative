# Shopping Cart Application

This application is a React Native-based shopping cart app that allows users to browse a list of products, add or remove items from their cart, and manage their total item count. The app utilizes the **Zustand** state management library to handle the state of the shopping cart and persist data across sessions using a custom storage setup.

## Features

1. **Product List Display**:
   - A scrollable list of products is displayed, each with an image, title, and price.

2. **Add and Remove Items**:
   - Users can add products to their cart or reduce the quantity of a specific product using `+` and `-` buttons.

3. **Cart State Management**:
   - The cart tracks the total number of items and the quantities of each product.
   - Products with a quantity of `0` are automatically removed from the cart.

4. **Persistent State**:
   - The cart's state is saved locally using a custom storage integration with **MMKV** or **localStorage**, ensuring that the user's selections persist even after closing the app.

## Technologies Used

1. **React Native**:
   - For building the mobile user interface.

2. **Zustand**:
   - Lightweight state management for handling the cart's logic and state.

3. **Zustand Persist Middleware**:
   - Middleware for persisting the cart's state in local storage.

4. **MMKV Storage**:
   - Efficient storage system for persisting data on the device.

5. **Expo**:
   - To streamline the development and testing process.

## Code Breakdown

### Core Components

#### `TabOneScreen`
- Displays the list of products and provides buttons to add or reduce items in the cart.
- Uses a `FlatList` to render product items dynamically from a local JSON file.
- Each product includes an image, title, price, and buttons for modifying the cart.

#### `useCartStore`
- Zustand store for managing the cart's state.
- Includes the following key methods:
  - **`addProduct`**: Adds a product to the cart or increments its quantity if it already exists.
  - **`reduceProduct`**: Reduces the quantity of a product in the cart or removes it entirely if the quantity reaches `0`.
  - **`clearCart`**: Resets the cart, clearing all items and resetting the item count to `0`.

### JSON Data
- The app uses a local JSON file to store product details, including:
  - `id`: Unique identifier for each product.
  - `image`: URL of the product's image.
  - `title`: Product name.
  - `price`: Cost of the product.

### Zustand Store Example
```typescript
export interface CartState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  items: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],
      items: 0,
      addProduct: (product: Product) => { /* Add product logic */ },
      reduceProduct: (product: Product) => { /* Reduce product logic */ },
      clearCart: () => ({ items: 0, products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
```

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo server:
   ```bash
   npm start
   ```
4. Open the app on an emulator or a physical device using the Expo Go app.

## Future Improvements

1. Add a detailed cart view screen showing all products and their quantities.
2. Integrate a checkout process with payment options.
3. Add filters and categories for browsing products.
4. Implement backend integration to fetch product data dynamically.

## Screenshot
![App Screenshot](./assets/images/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-01-22%20at%2015.16.31.png)

