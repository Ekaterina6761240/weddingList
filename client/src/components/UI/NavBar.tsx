import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import '../../index.css';

export default function NavBar(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Navbar
        bg="light"
        data-bs-theme="light"
        style={{
          width: '433px',
          borderRadius: '10px',
          padding: '20px 19px 20px 19px',
          height: '60px',
        }}
      >
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#time">Тайминг</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#people">Гости</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#table">Столы</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#todo">Дела</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
