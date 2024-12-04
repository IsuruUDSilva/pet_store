import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for CartItem and CartState
interface CartItem {
  id: number; // Unique identifier for the item
  name: string; // Item name
  price: number; // Price per item
  quantity: number; // Quantity of the item in the cart
}

interface CartState {
  items: CartItem[]; // Array of items in the cart
}

const initialState: CartState = {
  items: [], // Start with an empty cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart or increase its quantity if it already exists
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Increase quantity
      } else {
        state.items.push(action.payload); // Add new item to cart
      }
    },

    // Increase the quantity of a specific item in the cart
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease the quantity of a specific item in the cart
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },

    // Delete an item from the cart
    deleteItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = []; // Reset the cart to an empty array
    },
  },
});

// Export actions for dispatching
export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

// Export the reducer to use in the store
export default cartSlice.reducer;
