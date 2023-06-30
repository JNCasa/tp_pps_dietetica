import {Routes, Route} from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import FrequentQuestions from './Pages/FrequentQuestions';
import LogIn from './Pages/LogIn';
import Store from './Pages/Store';
import CreateAccount from './Pages/CreateAccount';
import ListProducts from './Pages/ListProducts';
import { useThemeContext } from './Context/ThemeContext';


const Pages = () => {
  
  const {theme} = useThemeContext();
  
  return (
    <section className='pages-section' style={{ backgroundColor: theme.background, color: theme.textColor }}>
        <Routes>
          <Route path="/" exact element={<Store/>} />
          <Route path="/Store" exact element={<Store/>} />
          <Route path="/LogIn" exact element={<LogIn/>} />
          <Route path="/CreateAccount" exact element={<CreateAccount/>} />
          <Route path="/AboutUs" exact element={<AboutUs/>} />
          <Route path="/FrequentQuestions" exact element={<FrequentQuestions/>} />
          <Route  path="/ListProducts" exact element={<ListProducts/>} /> 
        </Routes>
    </section>
  )
}

export default Pages;
