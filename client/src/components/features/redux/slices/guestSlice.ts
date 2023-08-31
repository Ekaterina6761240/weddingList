import { createSlice } from '@reduxjs/toolkit';

import { getGuestThank } from '../../thankAction/guestsThank';

import type { OneGuest } from '../../../Types/GuestType';

export type InitialState = {
  data: OneGuest[];
};

const initialState: InitialState = {
  data: [],
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getGuestThank.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default guestSlice.reducer;
