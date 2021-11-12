import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">BHAGYAJKUMAR</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default NavBar
