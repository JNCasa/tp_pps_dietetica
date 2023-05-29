import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import FrequentQuestions from './FrequentQuestions';
import MyAccount from './MyAccount';
import Store from './Store';
import Cart from './Cart';

const Pages = () => {
  return (
    <section className='pages-section'>
        <Routes>
          <Route path="/" exact element={<Store/>} />
          <Route path="/Store" exact element={<Store/>} />
          <Route path="/MyAccount" exact element={<MyAccount/>} />
          <Route path="/AboutUs" exact element={<AboutUs/>} />
          <Route path="/FrequentQuestions" exact element={<FrequentQuestions/>} />
          <Route path="/Cart" exact element={<Cart/>} />  
        </Routes>
    </section>
  )
}

export default Pages;
