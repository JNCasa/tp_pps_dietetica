import { BsWhatsapp } from "react-icons/bs";
import './WhatsappComp.css';
import { useLocation } from 'react-router-dom';

const WhatsappComp = () => {
  
    var num_what = '5493415820638';
    var mensaje = encodeURIComponent('Hola, tengo una consulta desde el sitio de Abasto Diet');
    const location = useLocation();

    const showWhatsAppButton = () => {
      return location.pathname !== '/Cart';
    };

    return (
      <>
      {showWhatsAppButton() && (
      <div className="whatsapp-button">
          <a
            href={`https://wa.me/${num_what}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <BsWhatsapp className="what-icon"/>
            </i>
          </a>
      </div>
      )}
    </>
  )
}

export default WhatsappComp
