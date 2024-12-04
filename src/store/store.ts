import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./user/userSlice"; // Your auth reducer
import cartReducer from "./shopingCart/shopingCartSlice";

// Redux-persist configuration
const persistConfig = {
  key: "auth", // Key for localStorage
  storage, // Use localStorage
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore these actions
      },
    }),
});

export const persistor = persistStore(store); // Export persistor for use in <PersistGate>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
