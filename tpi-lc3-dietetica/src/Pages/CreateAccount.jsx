import './PagesCSS/Form.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../Context/ThemeContext';
import UseApiBackend from '../Hooks/useApiBackend';

const initialForm = { name: "", lastName: "", phone:"", email: "", password: "", confirmPassword: ""}

const CreateAccount = () => {

  const navigate = useNavigate();

  const { data, error, loading, fetchData } = UseApiBackend();

  const validationsForm = (form) => {
    let errors = {};

    let regexName = /^[A-Z]+$/i;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = "^[0-9]+$";
    let regexPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

      if (!regexName.test(form.name.trim())){
        errors.name = "Ingrese un nombre correcto"
      }

      if (!regexName.test(form.lastName.trim())){
        errors.lastName = "Ingrese un apellido correcto"
      }

      if (!form.email.trim()){
        errors.email = 'Debe ingresar su email'
      }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El email es incorrecto"
      }

      if (form.phone.match(regexPhone)==null){
        errors.phone = "Teléfono incorrecto"
      }

      if (!regexPassword.test(form.password.trim())){
        errors.password = 'La contraseña debe tener al menos una letra minúscula, una mayúscula, un número, un carácter especial y mínimo 8 dígitos'
      }

      if (form.confirmPassword != form.password) {
        errors.confirmPassword = 'Ambas contraseñas deben ser iguales'
      }

    return errors;
  }

  const [form , setForm] = useState(initialForm);
  const [errors , setErrors] = useState({});
  const [success , setSuccess] = useState(false);
  const [err , setErr] = useState("");
  
  async function registerUser( data ){
    try {

      await fetchData('https://localhost:7184/api/Users', 'POST', {
        'Content-Type': 'application/json',
      }, JSON.stringify(data));

      if (response.ok) {
        setSuccess(true);
        setErr("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        // Errores  
      }

    }catch (error){
      
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
};

  function submitHandler(e){
    e.preventDefault();
    handleChange(e);   
    const errors = validationsForm(form);
    setErrors(errors)

    const data = {
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      password: form.password,
      rol: 'user'
    }
    if(Object.keys(errors).length === 0) {   
      registerUser( data );
      
    }
  }
  
  const {theme} = useThemeContext();
  
  return (
    <div className="form-container" style={{ backgroundColor: theme.backgroundContainer, color: theme.textColor }}>
      {loading && <div>Cargando...</div>}
      <h2>Crear cuenta</h2>
        <form onSubmit={submitHandler}>
            <div className= "form-elements">
            <label id="name">Nombre</label>
            <input type= "text" name= "name" value={form.name} onChange={handleChange} required></input>
            {errors.name && <p className="error-message">{errors.name}</p>}
            <label id="lastName">Apellido</label>
            <input type= "text" name= "lastName" value={form.lastName} onChange={handleChange} required></input>
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            <label id="email">Email</label>
            <input type= "text" name= "email" value={form.email} onChange={handleChange}  required></input>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <label id="phone">Teléfono</label>
            <input type= "number" name= "phone" value={form.phone} onChange={handleChange} required></input>
            {errors.phone && <p className="error-message">{errors.phone}</p>}
            <label id="password">Contraseña</label>
            <input type= "password" name= "password" value={form.password} onChange={handleChange}  required/>
            {errors.password && <p className="error-message">{errors.password}</p>}
            <label id="confirmPassword">Confirmar contraseña</label>
            <input type= "password" name= "confirmPassword" value={form.confirmPassword} onChange={handleChange} required/>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            <button type="submit">Crear cuenta</button>
            {success && <p className='success-message'>Usuario creado con éxito</p>}
            {err && <p className='error-message'>{err}</p>}
            <p>¿Ya tenes una cuenta? <a href='/LogIn' className='link-form'>Iniciar sesión</a></p>
        </form>
    </div>
  )
  
}

export default CreateAccount
