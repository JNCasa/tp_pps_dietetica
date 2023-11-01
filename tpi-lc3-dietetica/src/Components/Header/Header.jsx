import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../../assets/logos/logo.png';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon , faSun } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '../../Context/ThemeContext';
import { useContext} from 'react';
import UserContext from '../../Context/UserContext';
import { InputGroup } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { useLocation } from 'react-router-dom';



const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })};

function Header() {

    const location = useLocation();
    const showComponent = () => {
      return location.pathname !== '/Cart';
    };

    const {toggleTheme, theme} = useThemeContext();

    const { user } = useContext(UserContext);
    

    var navigate = useNavigate();


    const handleEndSession = async () => {
        try {
            const response = await fetch('https://localhost:7184/api/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //token
                },
            });

            if (response.ok) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };


  return (
    <>
      {showComponent() && (
    <header>
        <Navbar bg="" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to="/Store">
                <img src={logo} alt='Logo de la empresa' className='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className='justify-content-between' id="navbarScroll">
            <Nav
                className="ms-2 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {
                    user !== null && user.rol === 'admin' && (
                        <>
                            <Nav.Link as={Link} to="/ListProducts" onClick={handleClick}>Administrador</Nav.Link>
                        </>
                    ) 
                }
            </Nav>

            {/* Search Form */}
            <Form className="d-flex search-form">
                <InputGroup>
                <InputGroup.Text>
                    <BsSearch/>
                </InputGroup.Text>
                <Form.Control
                    
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                </InputGroup>
                
                
            </Form>



            <div className='opt-right-container d-flex flex-row align-items-center'>
            {/* Mi cuenta */}
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
                            <NavDropdown.Item as={Link} onClick={handleEndSession} to="/" >Cerrar sesión</NavDropdown.Item>
                        </>
                    )
                }
                </NavDropdown>
                {/* modal*/}
                {/* Chart */}
                <Nav.Link  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <FaShoppingCart /> Carrito
                </Nav.Link>
            
            {/* Theme button */}
            <Button onClick={toggleTheme} className='icon-moon-sun' style={{ backgroundColor: theme.backgroundFooter}}>  <FontAwesomeIcon icon={theme.icon === 'faSun' ? faSun : faMoon} /> </Button>
            </div>

            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div className='menu-bar'>
                <a className='linkBarMenu bebida' href=''>BEBIDAS</a>
                <a className='linkBarMenu te' href=''>TÉ</a>
                <a className='linkBarMenu cafe' href=''>CAFÉ</a>
                <a className='linkBarMenu harina' href=''>HARINAS</a>
                <a className='linkBarMenu granola' href=''>GRANOLAS</a>
                <a className='linkBarMenu azucar' href=''>AZÚCAR</a>
        </div>
    </header>
    )}
    </>
  );
}

export default Header;


