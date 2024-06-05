import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import "../style/NavAdmin.css"
import Image from 'react-bootstrap/Image';

const NavAdmin = () => {
  return (
    <Navbar expand="lg" className="font-nav sticky-top" style={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={require('../assets/image/Logo.png')} alt="Logo" style={{ width: '70px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/listbiotalaut" style={{ color: '#143A52' }}>Biotalaut</Nav.Link>
            <Nav.Link href="/listmajalah" style={{ color: '#143A52' }}>Majalah</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavAdmin