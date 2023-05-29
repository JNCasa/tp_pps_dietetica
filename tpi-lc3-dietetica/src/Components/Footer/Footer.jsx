import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <h2>Ayuda</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/AboutUs">Quiénes somos</Link>
                    </li>
                    <li>
                        <Link to="/FrequentQuestions">Preguntas Frecuentes</Link>
                    </li>
                </ul>
            </div>
          </Col>
          <Col>
            <h2>Contactanos</h2>
            <p>Pellegrini XXXX, Rosario, Santa Fe.</p>
            <p>Whatsapp +549341xxxxxxx</p>
            <p>Lunes a Sábados de 9hs a 13hs y de 16hs a 20 hs.</p>
          </Col>
          <Col>
            <h2>Seguinos</h2>
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;