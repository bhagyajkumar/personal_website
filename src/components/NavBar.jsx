import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'


function NavBar() {
    return (
        <Navbar className="navbar-fixed-top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">BHAGYAJKUMAR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/projects" >Projects</NavLink>
                        <NavLink className="nav-link" to="/skills">Skills</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
