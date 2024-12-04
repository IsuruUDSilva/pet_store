import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  email: string;
  password: string;
  name?: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  users: [{ id: 1, email: "test@email.com", password: "Paswrd@1" }],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const mockSignupAPI = async (user: User, users: User[]) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (users.some((u) => u.email === user.email)) {
        reject(new Error("Email already exists"));
      } else {
        const newUser = { ...user, id: Math.floor(Math.random() * 10000) };
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
    const newUser = await mockSignupAPI(user, state.auth.users);
    return newUser;
  } catch (error: any) {
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
        state.users.push(action.payload);
        state.currentUser = action.payload;
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
