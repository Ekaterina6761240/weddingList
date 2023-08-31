import { useAppSelector } from '../features/redux/hooks';
import OneGuestCard from './OneGuestCard';
import type { OneGuest } from '../Types/GuestType';

export default function GuestList(): JSX.Element {
  const guest = useAppSelector((state) => state.guests.data);
  console.log(guest);

  return (
    <div>
      {guest.map((el) => (
        <OneGuestCard key={el.id} guest={el} />
      ))}
    </div>
  );
}
