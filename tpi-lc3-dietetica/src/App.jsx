
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import UserContext from './Context/UserContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import PagesRoutes from './PagesRoutes';


function App() {

  const [user, setUser] = useState(null);


  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://localhost:7184/api/Users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // se pueden agregar tokens de autorización...
          },
        });

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
