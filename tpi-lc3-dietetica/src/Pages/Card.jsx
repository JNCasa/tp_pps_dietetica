import React from "react";
import Counter from "./Counter";
//import { useThemeContext } from '../../Context/ThemeContext';
const Card = (props) => {
  //const {theme} = useThemeContext();
  const handleQuantityChange = (quantity) => {
    props.onQuantityChange(props.id, quantity);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div style={{ overflow: "hidden" }}>
        <img className='card-img-top' src={props.image} alt={props.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Contenido neto: {props.weight}</p>
        <p className="card-text">{props.description}</p>
        <p className="card-text">Precio:{props.price} AR$</p>
        <Counter onQuantityChange={handleQuantityChange} />
      </div>
    </div>
  );
}

export default Card;
