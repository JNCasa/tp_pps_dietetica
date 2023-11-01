
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
// import firebaseApp from "./Firebase/firebase.config";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import UserContext from './Context/UserContext';
import { ThemeContextProvider } from './Context/ThemeContext';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import PagesRoutes from './PagesRoutes';

// const auth = getAuth(firebaseApp);
// const firestore = getFirestore(firebaseApp);
  

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
          // agregar parámetros de autenticación si es necesario para la autorización API
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        // errores de la solicitud
        setUser(null);
      }
    };

    fetchUserData();
  }, []);


  // async function getUserData(uid) {
  //   const docRef = doc(firestore, `users/${uid}`);
  //   const docu = await getDoc(docRef);
  //   const userData = docu.data();
  //   return userData;
  // }

  // async function setUserWithFirebaseAndData(uid) {
  //   const userData = await getUserData(uid);
  //   setUser(userData);
  // }

  // onAuthStateChanged(auth, async (firebaseUser) => {
  //   if (firebaseUser) {
  //     if (!user) { 
  //       await setUserWithFirebaseAndData(firebaseUser.uid);
  //     }
  //   } else {
  //     setUser(null);
  //   }
  // });

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
