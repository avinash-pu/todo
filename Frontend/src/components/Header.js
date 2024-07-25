import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Header.css';

function Header({employee}) {
    return (
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-custom">Employee Management</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/add-employee" className="nav-link-custom">Add Employee</Nav.Link>
{        employee.length?   <Nav.Link href="/update-employee" className="nav-link-custom">Update Employee</Nav.Link>:null
}          </Nav>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;
