import './Form.css';
import { useForm } from '../Hooks/useForm';
import firebaseApp from '../Firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../Context/ThemeContext';
import { useState } from 'react';

const auth = getAuth(firebaseApp);

const initialForm = { email: "", password: ""}

const LogIn = () => {
  const navigate = useNavigate();

  const validationsForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

      if (!form.email.trim()){
        errors.email = 'Debe ingresar su email'
      }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El email es incorrecto"
      }

      if (!form.password.trim()){
        errors.password = 'Contraseña inválida'
      }
    return errors;
  }

  const{form, errors, handleChange} = useForm(initialForm, validationsForm);
  
  const [err , setErr] = useState();

  async function submitHandler(e){
    e.preventDefault()
    try{
      const login = await signInWithEmailAndPassword(auth,form.email, form.password);
      if(login){
        navigate("/");
      }
    } catch (err){
      if(err.code === 'auth/user-not-found'){
          setErr('Usted no se encuntra registrado. Debe crearse una cuenta.')
      }
      if(err.code === 'auth/wrong-password'){
        setErr('La contraseña ingresada es incorrecta. Vuelve a ingresrla.')
    }
    }
    
  }

  const {theme} = useThemeContext();
    return (
    <>
      <div className="form-container" style={{ backgroundColor: theme.backgroundContainer, color: theme.textColor }}>
        <h2>Iniciá sesión</h2>
        <form onSubmit={submitHandler}>
          <div className="form-elements">
            <label id="email">Email</label>
            <input type= "email" name= "email" value={form.email} onChange={handleChange} required></input>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <label id="password">Contraseña</label>
            <input type= "password" name= "password" value={form.password} onChange={handleChange} required/>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" >Iniciar sesión</button>
          {err && <p className='error-message'>{err}</p>}
          <p>¿No tenes cuenta aún? <a href='/CreateAccount' className='link-form'>Crear cuenta</a></p>
        </form>
      </div>
      
    </>
  )
}

export default LogIn
