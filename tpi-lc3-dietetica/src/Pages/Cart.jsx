import logo from '../assets/logos/logo.png';
import '../Pages/PagesCSS/Cart.css'

const Cart = () => {
  return (
    <div>
        <a href="/Store">
                <img src={logo} alt='Logo de la empresa' className='logo'/>
            </a>
      <h3>Resumen pedido</h3>
    </div>
  )
}

export default Cart
