
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import "./PagesCSS/Store.css";
import React, { useState, useEffect } from 'react';
import { getProducts } from '../Db/json.jsx';
import Card from '../Components/Storecomp/Card.jsx';
import backgroundImage from '../assets/images/card.png';


const Store = () => {
  const { user } = useContext(UserContext);

  const [productList, setProductList] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
     setProductList(getProducts());
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
      {user !== null ? (
        <h3>Bienvenido a la tienda, {user.name}</h3>
      ) : null}

  
     <div className="container">

      <div className="row">
        <div className="col-12">
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
        
   

      
     </div>
     {/**************modal*********************** */}



<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{zIndex:5000}}>
      <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
            <div className="d-flex flex-wrap justify-content-center">
                  <h3 className='text-success'>Carrito</h3>
                </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {/*Cart boby */}
              <div className="col-12" style={{ overflowY: "scroll", maxHeight: "80vh" }}>
              
              
              
                {productList.filter(product => quantities[product.id] > 0).map(product => (
                  <p key={product.id}>{product.description}: {quantities[product.id]} x {product.price} AR$ = {quantities[product.id] * product.price} AR$</p>
                ))}
              
              
                </div>
            </div>
              {/* */}
              <div class="modal-footer">
   
    {total === 0 ? (
        <p>  <h2>Hora de Comprar!</h2></p>
    ) : (
        <div id="result">
            <hr/>
      <p>Total: {total} AR$</p>
      <hr/>
        
              <button type="button" className="btn btn-warning">Comprar</button>
        </div>
    )}
</div>


          </div>
        
        </div>
     
     </div>
</div>
{/*************************************** */}
 </div>
  );
};

export default Store;
