
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages/Pages';

function App() {
  

  return (
    <>
      <Router>
      <Header/>

      <Pages/>
      </Router>
      
    </>
  )
}

export default App
