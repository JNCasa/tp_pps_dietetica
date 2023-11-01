
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import UserContext from './Context/UserContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import PagesRoutes from './PagesRoutes';
import UseApiBackend from './Hooks/useApiBackend';


function App() {

  const [user, setUser] = useState(null);
  const { data, error, loading, fetchData } = UseApiBackend();

  useEffect(() => {
    
        const fetchUserData = async () => {
          try {
            await fetchData('https://localhost:7184/api/Users', 'GET', {
              'Content-Type': 'application/json',
            }, null);

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        // errores
        setUser(null);
      }
    };
  
    fetchUserData();

    }, []);


  return (
    
    <>
     <UserContext.Provider value={{ user, setUser }}>
      <ThemeContextProvider>
        <Router>
          <Header/>
          <PagesRoutes/>
          <Footer/>
        </Router>
        </ThemeContextProvider>
      </UserContext.Provider>
    </>
   
  )
}

export default App
