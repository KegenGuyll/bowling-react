import { createSlice } from '@reduxjs/toolkit';

type UserData = {
  uid: string;
  email: string;
  displayName: string;
  icon: string;
};

let initialState: UserData = {
  uid: '',
  email: '',
  displayName: '',
  icon: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      const { uid, email, displayName, icon } = action.payload;
      state.email = email;
      state.uid = uid;
      state.displayName = displayName;
      state.icon = icon;
    },
    clearUserData(state, action) {
      state.email = '';
      state.uid = '';
      state.displayName = '';
      state.icon = '';
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
