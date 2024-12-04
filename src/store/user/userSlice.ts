import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the state
interface User {
  id: number;
  email: string;
  password: string;
  name?: string; // Optional name for signup
}

interface AuthState {
  users: User[]; // Array to store all users
  currentUser: User | null; // Current logged-in user
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  users: [{ id: 1, email: "test@email.com", password: "Paswrd@1" }], // Start with an empty array
  currentUser: null, // No user is logged in initially
  isAuthenticated: false,
  error: null,
};

const mockSignupAPI = async (user: User, users: User[]) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (users.some((u) => u.email === user.email)) {
        reject(new Error("Email already exists"));
      } else {
        const newUser = { ...user, id: Math.floor(Math.random() * 10000) }; // Generate a unique ID
        resolve(newUser);
      }
    }, 1000);
  });
};

export const signupUser = createAsyncThunk<
  User,
  User,
  { state: { auth: AuthState } }
>("auth/signupUser", async (user, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    // Call the mock API with the current user and existing users
    const newUser = await mockSignupAPI(user, state.auth.users);
    return newUser;
  } catch (error: any) {
    // Reject with an error message if signup fails
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users.push(action.payload); // Add new user to users array
        state.currentUser = action.payload; // Log in the new user
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
