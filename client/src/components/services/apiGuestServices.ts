import type { OneGuest } from '../Types/GuestType';

import apiInstance from './apiConfig';

const getGuests = (): Promise<OneGuest[]> =>
  apiInstance
    .get<OneGuest[]>('api/guest')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export default getGuests;
