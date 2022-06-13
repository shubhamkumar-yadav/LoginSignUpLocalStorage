import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
const Header = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">User Registration</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>)
};
export { Header };