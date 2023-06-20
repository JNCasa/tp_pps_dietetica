import './Form.css';
import { useForm } from '../Hooks/useForm';


const initialForm = { email: "", password: ""}

const LogIn = () => {
  
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

  const{form, errors, handleChange, handleSubmit} = useForm(initialForm, validationsForm);
   
    return (
    <>
      
      <div className="form-container">
        <h2>Iniciá sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-elements">
            <label id="email">Email</label>
            <input type= "email" name= "email" value={form.email} onChange={handleChange} required></input>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <label id="password">Contraseña</label>
            <input type= "password" name= "password" value={form.password} onChange={handleChange} required/>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" >Iniciar sesión</button>
          <p>¿No tenes cuenta aún? <a href='/CreateAccount' className='link-form'>Crear cuenta</a></p>
        </form>
      </div>
      
    </>
  )
}

export default LogIn
