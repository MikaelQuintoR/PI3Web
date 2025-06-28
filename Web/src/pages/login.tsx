import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findUser } from '../services/UserService'
import logo from '../assets/logo.png';

// Logica
export default function Login() {
  const [dni, setDni] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!dni || !username) {
      setErrorMessage('Por favor completa todos los campos.');
      return;
    }

    try {
      const user = await findUser(dni, username);
      if (!user) {
        navigate('/register');
        return;
      }

      localStorage.setItem('user', JSON.stringify(user));
      navigate('/mainPage');
    } 
    
    catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage('Hubo un error. Intenta nuevamente.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };


  // CSS
  const styles = {
  background: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(270deg, #004aad, #66a3ff, #004aad)',
    backgroundSize: '400% 400%',
    animation: 'gradientMove 12s ease infinite alternate',
  },

  box: {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    width: '320px',
    textAlign: 'center' as const,
    fontFamily: 'Inter, system-ui, sans-serif',
  },

  input: {
    width: '100%',
    height: '36px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center' as const,
    color: '#333',
    fontSize: '0.95rem',
  },

  button: {
    marginTop: '1.5rem',
    width: '100%',
    backgroundColor: '#004aad',
    color: 'white',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'background-color 0.25s',
  },

  buttonHover: {
    backgroundColor: '#003580',
  },

  label: {
    color: '#333',
    fontWeight: 500,
  },

  logo: {
    display: 'block',
    margin: '0 auto 1rem',
    width: '180px',
    height: 'auto',
    borderRadius: '12px',
  },

  title: {
    color: '#333',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },

  registerContainer: {
    marginTop: '1rem',
    textAlign: 'center' as const,
  },

  registerText: {
    display: 'inline-block',
    marginRight: '0.5rem',
    color: '#555',
    fontSize: '0.85rem',
  },

  registerLink: {
    color: '#004aad',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 500,
  },

  errorMessage: {
    color: '#cc0000',
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
};

return (
    <div style={styles.background}>
      <div style={styles.box}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Login:</h2>
          <img src={logo} alt="logo" style={styles.logo} />

          <div>
            <label style={styles.label}>DNI:</label><br />
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="12345678"
              required
              style={styles.input}
            />
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label style={styles.label}>Username:</label><br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              required
              style={styles.input}
            />
          </div>

          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>

        <div style={styles.registerContainer}>
          <span style={styles.registerText}>¿Aún no estás registrado?</span>
          <span
            style={styles.registerLink}
            onClick={handleRegisterRedirect}
          >
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
}