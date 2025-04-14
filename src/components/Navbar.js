import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleDarkMode }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">IDEAL CAFE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className="border border-2 border-purple rounded px-3 py-1 me-2 fw-medium text-white">Home</Nav.Link>
                    <Nav.Link as={Link} to="/menu" className="border border-2 border-purple rounded px-3 py-1 me-2 fw-medium text-white">Menu</Nav.Link>
                    <Nav.Link as={Link} to="/offers" className="border border-2 border-purple rounded px-3 py-1 me-2 fw-medium text-white">Offers</Nav.Link>
                    <Nav.Link as={Link} to="/locations" className="border border-2 border-purple rounded px-3 py-1 me-2 fw-medium text-white">Locations</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="border border-2 border-purple rounded px-3 py-1 me-2 fw-medium text-white">Contact Us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="text" placeholder="Search" className="me-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Button onClick={toggleDarkMode} className="ms-2" variant="outline-light">
                    Dark Mode
                </Button>
            </Navbar.Collapse>
            <Nav.Link as={Link} to="/signup" className="border border-2 border-primary rounded px-3 py-1 me-2 fw-medium text-white">
                Sign Up
            </Nav.Link>
        </Navbar>
    );
};

export default NavBar;
