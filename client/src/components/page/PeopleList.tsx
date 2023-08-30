import React from 'react';
import { Button, Card } from 'react-bootstrap';
import GuestList from '../UI/GuestList';

export default function PeopleList(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <GuestList />
    </div>
  );
}
