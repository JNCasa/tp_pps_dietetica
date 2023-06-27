
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import "./Store.css";
import React, { useState, useEffect } from 'react';
import products from './json.jsx';
import Card from './Card.jsx';
import backgroundImage from './images/card.png';


const Store = () => {
  const { user } = useContext(UserContext);

 const [productList, setProductList] = useState([]);
   const [quantities, setQuantities] = useState({});

  useEffect(() => {
     setProductList(products);
   }, []);

   const handleQuantityChange = (id, quantity) => {
     setQuantities(prevQuantities => ({ ...prevQuantities, [id]: quantity }));
 }

   let total = 0;
   productList.forEach(product => {
    total += (quantities[product.id] || 0) * product.price;
  
   });

  return (
    <div>
      {user === null ? (
        <h1>Tienda</h1>
      ) : (
        <h1>Bienvenido a la tienda, {user.name}</h1>
/********************************************************** */
)}

  
     <div className="container">

      <div className="row">
        <div className="col-8">
         <div className="d-flex flex-wrap justify-content-center">
       <h1 className='text-success'>Productos</h1>
  </div>

       <div className="d-flex flex-wrap justify-content-center" style={{ overflowY: "scroll", height: "500px" , backgroundImage:`url(${backgroundImage})`, backgroundSize: "cover", }}>
            {productList.map(product => (
              
              <div key={product.id} className="m-2">
               <Card id={product.id} title={product.title} description={product.description} weight={product.weight} price={product.price} image={product.image} onQuantityChange={handleQuantityChange} />
             
             </div>
           
          ))}
          </div>
        </div>
        
        <div className="col-4" style={{ overflowY: "scroll", maxHeight: "80vh" }}>
       
        <div className="d-flex flex-wrap justify-content-center">
           <h3 className='text-success'>Carrito</h3>
         </div>
        
          {productList.filter(product => quantities[product.id] > 0).map(product => (
            <p key={product.id}>{product.description}: {quantities[product.id]} x {product.price} AR$ = {quantities[product.id] * product.price} AR$</p>
          ))}
        <hr/>
        <p>Total: {total} AR$</p>
         <hr/>
         <button type="button" class="btn btn-warning">Comprar</button>
         </div>
     </div>

      
     </div>
    </div>
  );
};

export default Store;
