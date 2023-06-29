
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import firebaseApp from "./Firebase/firebase.config";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import UserContext from './Context/UserContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
  

function App() {

  const [user, setUser] = useState(null);

  async function getUserData(uid) {
    const docRef = doc(firestore, `users/${uid}`);
    const docu = await getDoc(docRef);
    const userData = docu.data();
    return userData;
  }

  async function setUserWithFirebaseAndData(uid) {
    const userData = await getUserData(uid);
    setUser(userData);
  }

  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      if (!user) {
        await setUserWithFirebaseAndData(firebaseUser.uid);
      }
    } else {
      setUser(null);
    }
  });

  return (
    
    <>
     <UserContext.Provider value={{ user, setUser }}>
      <ThemeContextProvider>
        <Router>
          <Header/>
          <Pages/>
          <Footer/>
        </Router>
        </ThemeContextProvider>
      </UserContext.Provider>
    </>
   
  )
}

export default App
