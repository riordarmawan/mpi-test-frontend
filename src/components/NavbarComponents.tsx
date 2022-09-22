import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponents = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">MPI-Test</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
