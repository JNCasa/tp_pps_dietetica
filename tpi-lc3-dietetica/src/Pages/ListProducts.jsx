import { useEffect, useState } from 'react';
import { updateProducts, getProducts } from '../Db/json.jsx';
import './PagesCSS/ListProduct.css';


const ListProducts = () => {

  const [productList, setProductList] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [mens, setMens] = useState("");

  useEffect(() => {
    setProductList(getProducts());
  }, []);

  const handleChangePrice = (productId, newPrice) => {
    if (newPrice === '' || /^[0-9]*\.?[0-9]+$/.test(newPrice)) {
      setProductList(prevList =>
        prevList.map(product =>
          product.id === productId ? { ...product, price: newPrice } : product
        )
      );
      setIsChanged(true)
    } else {
      setIsChanged(false);
    }


  };

  const onSaveChanges = () => {
    updateProducts(productList);
    isChanged && setMens("Cambios guardados exitosamente");
  };

  return (
    <div>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <input
                  type="number"
                  value={product.price}
                  onChange={e => handleChangePrice(product.id, e.target.value)}
                />
              </td>
              <td>{product.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onSaveChanges} className='button-save'>Guardar cambios</button>
      {mens && <p className='mens-save'>{mens}</p>}
    </div>
  );
}
export default ListProducts
