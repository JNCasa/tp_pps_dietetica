import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../../assets/logos/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../../Firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon , faSun } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../Context/ThemeContext';
import { useContext} from 'react';
import UserContext from '../../Context/UserContext';


const auth = getAuth(firebaseApp)

const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })};

function Header() {

    
    const {toggleTheme, theme} = useThemeContext();

    const { user } = useContext(UserContext);

    const handleEndSession = () => {
        signOut(auth);
      };

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
                <Nav.Link as={Link} to="/Store" onClick={handleClick}>Tienda</Nav.Link>
                <NavDropdown title="Mi cuenta" id="navbarScrollingDropdown">
                {
                    user === null ? (
                        <>
                            <NavDropdown.Item as={Link} to="/LogIn" onClick={handleClick}>Iniciar sesión</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/CreateAccount" onClick={handleClick}>Crear cuenta</NavDropdown.Item>
                        </>
                    ) : (
                        <>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} onClick={handleEndSession}  >Cerrar sesión</NavDropdown.Item>
                        </>
                    )
                }
                </NavDropdown>
                <NavDropdown title="Nosotros" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/AboutUs" onClick={handleClick}>Quiénes somos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/FrequentQuestions" onClick={handleClick}>
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
            <Button onClick={toggleTheme} className='icon-moon-sun' style={{ backgroundColor: theme.backgroundFooter}}>  <FontAwesomeIcon icon={theme.icon === 'faSun' ? faSun : faMoon} /> </Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  );
}

export default Header;