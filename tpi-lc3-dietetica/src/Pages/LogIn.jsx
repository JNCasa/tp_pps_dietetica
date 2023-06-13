import './Form.css';

const LogIn = () => {
   
    return (
    
    <>
      <div className="form-container">
        <h2>Iniciá sesión</h2>
        <form>
          <div className="form-elements">
            <label for="email">Email</label>
            <input type= "text" name= "username"></input>
            <label for="password">Contraseña</label>
            <input type= "password" name= "password"/>
          </div>
          <button type="submit">Iniciar sesión</button>
          <p>¿No tenes cuenta aún? <a href='/CreateAccount' className='link-form'>Crear cuenta</a></p>
        </form>
      </div>
      
      
    </>
  )
}

export default LogIn
