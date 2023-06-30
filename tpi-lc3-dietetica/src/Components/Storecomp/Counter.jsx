import React, { useState } from 'react';

const Counter = (props) => {
  const [contador, setContador] = useState(0);
  
  const handleContadorChange = (newContador) => {
    setContador(newContador);
    props.onQuantityChange(newContador);
  }

  function SumarUno() { handleContadorChange(contador + 1) };

  function RestarUno() {
    if (contador > 0) {
      handleContadorChange(contador - 1)
    };
  }
  
  return (
    <div>
      <hr />
      <h3>Cantidad: {contador}</h3>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-success btn-lg shadow-sm"    onClick={RestarUno} style={{ width:"50px" , textAlign:"center"}}>-</button>
        <button type="button" className="btn btn-success btn-lg shadow-sm"  onClick={SumarUno} style={{width:'50px', textAlign:"center"}}>+</button>
      </div>
      <hr />
    </div>
  );
}

export default Counter
