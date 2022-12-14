import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  handleUserLogin,
  handleUserRegistration,
} from "../../api/services/userApi";

const userAdapter = createEntityAdapter({
  selectId: (user) => user._id,
});

export const userSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {
    removeUsers: userAdapter.removeAll,
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        userAdapter.addOne(state, action.payload);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        userAdapter.addOne(state, action.payload);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const registerUserThunk = createAsyncThunk(
  "users/register",
  async (user) => {
    // if user already exists we should get rejected promise
    const res = await handleUserRegistration(user);
    return res.data;
  }
);

export const loginUserThunk = createAsyncThunk("users/login", async (user) => {
  const res = await handleUserLogin(user);
  return res.data;
});

// logout should not require a thunk since we dont need any asynchronous actions. simply remove the user from state

export const { selectAll: selectAllUsers } = userAdapter.getSelectors(
  (state) => state.users
);
export const getUsersStatus = (state) => state.users.status;

export const { removeUsers, setStatus } = userSlice.actions;
export default userSlice.reducer;
