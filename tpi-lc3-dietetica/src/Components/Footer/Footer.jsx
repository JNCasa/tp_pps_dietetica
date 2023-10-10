import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../Context/ThemeContext';
import logo from '../../assets/logos/logo.png';
import Navbar from 'react-bootstrap/Navbar';

import { useLocation } from 'react-router-dom';


const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })};

const Footer = () => {

  const location = useLocation();

    const showComponent = () => {
      return location.pathname !== '/Cart';
    };
  
  const {theme} = useThemeContext();
  return (
    <>
      {showComponent() && (
    <footer className="footer" style={{ backgroundColor: theme.backgroundFooter, color: theme.textColor }} >
      <Container>
        <Row>
          <Col>
            <Navbar.Brand as={Link} to="/Store" onClick={handleClick}>
                <img src={logo} alt='Logo de la empresa' className='logo'/>
            </Navbar.Brand>
          </Col>
        <Col>
            <h3>Mi Cuenta</h3>
            <div>
                <ul>
                    <li>
                        <Link to="/LogIn" style={{ color: theme.textColor }} onClick={handleClick}>Iniciar Sesión</Link>
                    </li>
                    <li>
                        <Link to="/CreateAccount" style={{ color: theme.textColor }} onClick={handleClick}>Registrarse</Link>
                    </li>
                </ul>
            </div>
          </Col>
          <Col>
            <h3>Ayuda</h3>
            <div>
                <ul>
                    <li>
                        <Link to="/" style={{ color: theme.textColor }} onClick={handleClick}>Ir a Inicio</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs" style={{ color: theme.textColor }} onClick={handleClick}>Quiénes somos</Link>
                    </li>
                    <li>
                        <Link to="/FrequentQuestions" style={{ color: theme.textColor }} onClick={handleClick}>Preguntas Frecuentes</Link>
                    </li>

                </ul>
            </div>
          </Col>
          <Col>
            <h3>Contactanos</h3>
            <p>Pellegrini XXXX, Rosario, Santa Fe.</p>
            <p>Whatsapp +549341xxxxxxx</p>
            <p>Lunes a Sábados de 9hs a 13hs y de 16hs a 20 hs.</p>
          </Col>          
          <Col>
            <h3>Seguinos</h3>
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </Col>
        </Row>
      </Container>
      <p className='last-p'>Copyright Abasto Diet - 2023. Todos los derechos reservados.</p>
    </footer>
    )}
    </>
  );

};

export default Footer;