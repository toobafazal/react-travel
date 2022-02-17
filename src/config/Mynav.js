import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../images/Ellipse 7.svg';
import logo1 from '../images/Ellipse 11.svg';

const Mynav = () => {
  return (

    <div>
      <Navbar variant="light" expand="lg" className="mt-3">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
            <Image src={logo1} alt="logo" className=' logo' />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#feature" className="mx-2">Destinations</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <Nav.Link href="#guide" className="mx-2">Partners</Nav.Link>
            <Button variant="outline-warning" className="navbtn mx-2">Login</Button>{' '}
            <Button variant="outline-warning" className="mx-3 navbtn">Register</Button>{' '}

          </Nav>

        </Container>
      </Navbar>
    </div>

  )
}

export default Mynav