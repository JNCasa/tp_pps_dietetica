
let products = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'Té Ahumado Agos',
    image: 'im1.png',
    price: 10.00,
    weight: '600 grs.',
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Malta Orgánica J.JUNCO',
    image: 'im2.png',
    price: 20.00,
    weight: '1 Kg',
  },
  {
    id: 3,
    title: 'Producto 3',
    description: 'Café José Velez',
    image: 'im3.png',
    price: 30,
    weight: '500 grs.',
  },
  {
    id: 4,
    title: 'Producto 4',
    description: 'Jugo orgánico La Trigresa',
    image: 'im4.png',
    price: 40,
    weight: '1 lts.',
  },
  {
    id: 5,
    title: 'Producto 5',
    description: 'Miel Orgámica el riojano',
    image: 'im5.png',
    price: 50,
    weight: '500 cc',
  },
  {
    id: 6,
    title: 'Producto 6',
    description: 'H. de Coco Jorge Drexler',
    image: 'im6.png',
    price: 60,
    weight: '2 Kg',
  },
  {
    id: 7,
    title: 'Producto 7',
    description: 'Té verde Elegante',
    image: 'im7.png',
    price: 80,
    weight: '420 gr',
  },
  {
    id: 8,
    title: 'Producto 8',
    description: 'Granola  Mirtha',
    image: 'im8.png',
    price: 90,
    weight: '101 gr'
  },
  {
    id: 9,
    title : "Producto 9",
    description : "Azúcar Moreno Guille",
    image : 'im9.png',
    price : 100,
    weight : "1 kg"
   },
   {
     id :10,
     title : "Producto10",
     description : "Miel Millei",
     image : 'im10.png',
     price : 100,
     weight : "800 cc"
   }
]

export const getProducts =() => {
  const productos = JSON.parse(localStorage.getItem('products'));
  if(!productos){
    localStorage.setItem('products', JSON.stringify(products));
  }
  return productos;
}




export const updateProducts = ( productList ) => {
  localStorage.setItem('products', JSON.stringify(productList));
}

export default products
