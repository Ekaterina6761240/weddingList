import React from 'react';
import { Card, Form } from 'react-bootstrap';

export default function OneGuestCard(): JSX.Element {
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
