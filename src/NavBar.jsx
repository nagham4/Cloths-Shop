
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';



import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white border-bottom py-3 navb container-nav">
      <Container fluid className="d-flex justify-content-between align-items-center m-1 px-5">
        
        <div className="d-flex align-items-center gap-4">

          <Navbar.Toggle aria-controls="main-navbar-collapse" className="ms-2 border-0" />    
          <Navbar.Brand href="#" className="fs-1 logoo">SHOP.CO</Navbar.Brand>
        </div>
          <Navbar.Collapse id="main-navbar-collapse" className="d-lg-flex justify-content-center">
          <Nav className="align-items-center gap-3">
            <NavDropdown title="Shop" id="shop-dropdown" className="text-black aa">
              <NavDropdown.Item href="#" className="text-black aa">Men</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-black aa">Women</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-black aa">On Sale</Nav.Link>
            <Nav.Link href="#" className="text-black aa">New Arrivals</Nav.Link>
            <Nav.Link href="#" className="text-black aa">Brands</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="position-relative search-bar flex-grow-1 h-25" >
        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y text-secondary toggle"></i>
        <Form.Control
        type="search"
        placeholder="Search for products..."
        className="rounded-pill ps-5 fs-5 "
        />
        </div>
        <div className="d-flex align-items-center gap-1 icons">
          <button className="btn">
            <i className="bi bi-cart"></i>
          </button>
          <button className="btn">
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
