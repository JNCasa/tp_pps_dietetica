
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages/Pages';
import Footer from './Components/Footer/Footer';

function App() {
  

  return (
    <>
      <Router>
      <Header/>

      <Pages/>
      <Footer/>
      </Router>
      
    </>
  )
}

export default App
