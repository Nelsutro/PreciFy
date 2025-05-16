import '../styles/login.css';

const PaginaInicio = () => {
    return (
      <div style={loginPageContainerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Login</h1>
  
          <form>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Correo:
              </label>
              <input
                type="email"
                id="email"
                placeholder="xxxxxxxx@xxxxx.xxx"
                style={inputStyle}
              />
              <p style={errorStyle}></p>
            </div>
  
            <div style={formGroupStyle}>
              <label htmlFor="password" style={labelStyle}>
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Escribe tu contraseña"
                style={inputStyle}
              />
              <p style={errorStyle}></p>
            </div>
  
            <div style={buttonContainerStyle}>
              <button type="button" style={buttonStyle}>
                Iniciar Sesión
              </button>
            </div>
          </form>
  
          <p style={signupTextStyle}>
            No tienes una cuenta registrada? <a href="/register" style={signupLinkStyle}>Registro Usuario Nuevo</a>
          </p>
        </div>
      </div>
    );
  }
