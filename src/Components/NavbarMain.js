import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarMain() {
  return (
    <Navbar bg="light"  expand="lg">
      <Container>
        <Navbar.Brand href="/">Alumnos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

