import './PagesCSS/Form.css';
import { useForm } from '../Hooks/useForm';
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../Context/ThemeContext';
import UseApiBackend from '../Hooks/useApiBackend';


const initialForm = { email: "", password: ""}

const LogIn = () => {
  
  const navigate = useNavigate();
  const { data, error, loading, fetchData } = UseApiBackend();
  const {form, errors, handleChange} = useForm(initialForm, validationsForm);
  const {theme} = useThemeContext();

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
  

  async function submitHandler(e){
    e.preventDefault()
    const data = {
      email: form.email,
      password: form.password
    };
    await fetchData('https://localhost:7184/api/Users', 'POST', {
      'Content-Type': 'application/json',
    }, JSON.stringify(data));
    if (!error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      // errores de registro o de contraseña incorrecta
      //'Usted no se encuntra registrado. Debe crearse una cuenta.'
      //'La contraseña ingresada es incorrecta. Vuelve a ingresrla.'
    }
  };

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
          {error && <p className='error-message'>{error}</p>}
          {loading && <div>Iniciando sesión</div>}
          <p>¿No tenes cuenta aún? <a href='/CreateAccount' className='link-form'>Crear cuenta</a></p>
        </form>
      </div>
      
    </>
  )
}

export default LogIn
