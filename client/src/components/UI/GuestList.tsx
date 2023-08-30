import React, { useState } from 'react';
import { Button, Card, Form, ToggleButton } from 'react-bootstrap';

export default function GuestList(): JSX.Element {
  return (
    <Card style={{ width: '1000px' }}>
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '1000px',
          justifyContent: ' space-around',
        }}
      >
        <Form.Check aria-label="option 1" />
        <Card.Title>Фамилия Имя Отчество</Card.Title>
        <Card.Text>Кто такой? </Card.Text>
        <Card.Text>Коммент</Card.Text>
        <Card.Text>Стол</Card.Text>
      </Card.Body>
    </Card>
  );
}
