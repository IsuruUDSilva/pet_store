import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the state
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

// Mock API for signup
const mockSignupAPI = async (name: string, email: string, password: string) => {
  // Mocking a successful signup response
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com") {
        reject(new Error("Email already exists"));
      } else {
        resolve({ id: "1", name, email });
      }
    }, 1000);
  });
};

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (
    {
      name,
      email,
      password,
    }: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const user = await mockSignupAPI(name, email, password);
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
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
