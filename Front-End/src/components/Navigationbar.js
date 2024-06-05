import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import "../style/Navbarnya.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
// import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="font-nav sticky-top" style={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={require('../assets/image/Logo.png')} alt="Logo" style={{ width: '70px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: '#143A52' }}>Home</Nav.Link>
            <Nav.Link href="/dashboard" style={{ color: '#143A52' }}>Dashboard</Nav.Link>
            <NavDropdown title="Edukasi" id="basic-nav-dropdown" style={{ color: '#143A52' }}>
              <NavDropdown.Item href="/edukasi">Edukasi</NavDropdown.Item>
              <NavDropdown.Item href="#magazine">Magazine</NavDropdown.Item>
              <NavDropdown.Item href="#funfact">Fun Fact</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/komunitas" style={{ color: '#143A52' }}>Komunitas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar