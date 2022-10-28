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
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        userAdapter.addOne(state, action.payload);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        // should change status of user to failed and set error message to be used on registration page
        // currently just prints payload to console
        console.log(action.payload);
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        userAdapter.addOne(state, action.payload);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        // should change status of user to failed and set error message to be used on registration page
        // currently just prints payload to console
        console.log(action.payload);
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
  // if user does not exist we should get a rejected promise
  const res = await handleUserLogin(user);
  console.log(res.data);
  return res.data;
});

// logout should not require a thunk since we dont need any asynchronous actions. simply remove the user from state

export const { selectAll: selectAllUsers } = userAdapter.getSelectors(
  (state) => state.users
);
export const getUsersStatus = (state) => state.users.status;

export default userSlice.reducer;
