import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/minaLogo.png';
import './Header.css'


const Header = () => {
    return (
        <Navbar className='py-4 bg-opacity' collapseOnSelect expand="lg" bg="" variant="">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        // width="30"
                        // height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-white">
                        <Nav.Link  as={Link} to="/" className='text-white px-4 fs-6 nav-hover' >HOME</Nav.Link>
                        <Nav.Link  as={Link} to="/services"  className='text-white px-4 fs-6 nav-hover'>SERVICES</Nav.Link>
                        <Nav.Link  as={Link} to="/aboutus"  className='text-white px-4 fs-6 nav-hover'>ABOUT US</Nav.Link>
                        
                        <Nav.Link  as={Link} to="/contactus"  className='text-white px-4 fs-6 nav-hover'>CONTACT US</Nav.Link>
                        <Nav.Link  as={Link} to="/"  className='text-white fs-6 nav-hover' eventKey={2}>
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;