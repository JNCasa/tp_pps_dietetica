import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../../assets/logos/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';



function Header() {
  return (
    <header>
        <Navbar bg="" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to="/Store">
                <img src={logo} alt='Logo de la empresa' className='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to="/Store">Tienda</Nav.Link>
                <Nav.Link as={Link} to="/MyAccount">Mi cuenta</Nav.Link>
                <NavDropdown title="Nosotros" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/AboutUs">Quiénes somos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/FrequentQuestions">
                Preguntas frecuentes
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Cart">
                    <FaShoppingCart /> Carrito
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  );
}

export default Header;