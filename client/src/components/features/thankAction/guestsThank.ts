import { createAsyncThunk } from '@reduxjs/toolkit';
import getGuests from '../../services/apiGuestServices';
import type { OneGuest } from '../../Types/GuestType';

export const getGuestThank = createAsyncThunk<OneGuest[]>('guest/getGuests', async () =>
  getGuests()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

// export const gGuestThank = createAsyncThunk<OneGuest[]>('guest/getguests', async () =>)
//   getGuests()
//     .then((res) => res)
//     .catch((err) => PromiseRejectionEvent.regect(err)),
// );
