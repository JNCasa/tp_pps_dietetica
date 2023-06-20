import './Form.css';
import { useForm } from '../Hooks/useForm';


const initialForm = { name: "", lastName: "", phone:"", email: "", password: "", confirmPassword: ""}

const CreateAccount = () => {

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

  const{success, form, errors, handleChange, handleSubmit} = useForm(initialForm, validationsForm);
  
  
  return (
    <div className="form-container">
      <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
            <div className= "form-elements">
            <label id="name">Nombre</label>
            <input type= "text" name= "name" value={form.name} onChange={handleChange} ></input>
            {errors.name && <p className="error-message">{errors.name}</p>}
            <label id="lastName">Apellido</label>
            <input type= "text" name= "lastName" value={form.lastName} onChange={handleChange} required></input>
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            <label id="email">Email</label>
            <input type= "text" name= "email" value={form.email} onChange={handleChange}  required></input>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <label id="phone">Teléfono (opcional)</label>
            <input type= "number" name= "phone" value={form.phone} onChange={handleChange}></input>
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
            <p>¿Ya tenes una cuenta? <a href='/LogIn' className='link-form'>Iniciar sesión</a></p>
        </form>
    </div>
  )
}

export default CreateAccount
