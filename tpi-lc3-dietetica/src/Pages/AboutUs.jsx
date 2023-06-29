import '../Pages/PagesCSS/AboutUs.css'
import image from '../assets/local/local-diet.png'

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="content">
          <h2>Quiénes somos</h2>
          <h3>Abasto Diet</h3>
          
          <p>
              Somos una empresa familiar que abrimos nuestras puertas en 2022 en el corazón de Rosario. Desde ese entonces ofrecemos una gran variedad de productos.
              Nos motiva la experiencia, la atención y el interés de mejorar cada vez más nuestro servicio hacia el cliente.  
          </p>
          <br></br>
          <h3>Misión</h3>
          <p>
              Conectar a las personas con la vida sana.<br></br>
              Nos encontramos continuamente en que la búsqueda de mejorar la atención, buscando los mejores productos, de la más alta calidad y el mejor precio para ofrecer en nuestro comercio. 
              Es por esto que no ofrecemos productos, lo que ofrecemos en Abasto Diet es un servicio. Hemos creado este espacio para continuar brindándote los mejores productos, acercarte nuestra experiencia, 
              contestar todas tus dudas e intentar hacerte llegar toda la información que necesites. Hoy en día trasladamos toda nuestra experiencia a nuestra web.
          </p>
        </div>
        <div className='image-container'>
          <img src={image} alt='Imagen'></img>
        </div>
      </div>
    </>
  )
}

export default AboutUs
