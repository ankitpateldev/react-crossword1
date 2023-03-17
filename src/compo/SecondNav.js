import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar bg="warning" expand="md"  expanded={expanded}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <NavDropdown title="Categories" id="Secondnav" className="mr-auto">
            <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Toys & Games</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Stationery</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Gifts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Magazines</NavDropdown.Item>
          </NavDropdown>

          <Nav   style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }} className="ml-auto justify-content-center" onClick={() => setExpanded(false)} activeKey="">
            <Nav.Link href="#home">Books</Nav.Link>
            <Nav.Link href="#features">Toys</Nav.Link>
            <Nav.Link href="#pricing">Stationery</Nav.Link>
            <Nav.Link href="#about">Gifts & Accessories</Nav.Link>
            <Nav.Link href="#contact">Magazines</Nav.Link>
            <Nav.Link href="#contact">The Write Place</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
