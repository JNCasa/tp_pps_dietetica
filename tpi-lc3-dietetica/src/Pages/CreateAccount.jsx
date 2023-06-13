import './Form.css';

const CreateAccount = () => {
  return (
    <div className="form-container">
      <h2>Crear cuenta</h2>
        <form>
            <div className= "form-elements">
            <label for="name">Nombre y apellido</label>
            <input type= "text" name= "name"></input>
            <label for="email">Email</label>
            <input type= "text" name= "username"></input>
            <label for="phone">Teléfono (opcional)</label>
            <input type= "number" name= "telefono"></input>
            <label for="password">Contraseña</label>
            <input type= "password" name= "password"/>
            <label for="password">Confirmar contraseña</label>
            <input type= "password" name= "password"/>
            </div>
            <button type="submit">Crear cuenta</button>
            <p>¿Ya tenes una cuenta? <a href='/LogIn' className='link-form'>Iniciar sesión</a></p>
        </form>
    </div>
  )
}

export default CreateAccount
