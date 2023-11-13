
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router, json } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import UserContext from './Context/UserContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import PagesRoutes from './PagesRoutes';
import UseApiBackend from './Hooks/useApiBackend';
import { jwtDecode } from 'jwt-decode';

function App() {

  const [user, setUser] = useState(null);
  const { data, error, loading, fetchData } = UseApiBackend();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt !== null && typeof jwt !== 'undefined'
    ) {
      const jwt2 = JSON.parse(jwt);//transforma el json
      const jwt_decoded = jwtDecode(jwt2);
      //YA TENEMOS LOS DATOS DEL USUARIO
      setUser({ name: jwt_decoded.unique_name, rol: jwt_decoded.role })
    }

  }, []);


  return (

    <>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeContextProvider>
          <Router>
            <Header />
            <PagesRoutes />
            <Footer />
          </Router>
        </ThemeContextProvider>
      </UserContext.Provider>
    </>

  )
}

export default App
