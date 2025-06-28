import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../services/UserService'
import logo from '../assets/logo.png';

//Logica
export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      dni,
      email,
      age,
      username,
      password: 'defaultPassword',
    };

    try {
      const nuevoUsuario = await UserService.createUser(userData);
      console.log('Usuario creado:', nuevoUsuario);
      navigate('/mainPage');
    } 
    
    catch (error) {
      console.error('Error al registrar usuario:', error);
      setErrorMessage('Hubo un error al registrar. Intenta nuevamente.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/');
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
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15)',
      width: '640px',
      textAlign: 'center' as React.CSSProperties['textAlign'],
    },

    input: {
      width: '100%',
      height: '30px',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      textAlign: 'center' as React.CSSProperties['textAlign'],
      color: '#333',
    },

    inputRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      marginTop: '1rem',
      width: '100%',
      flexWrap: 'wrap' as React.CSSProperties['flexWrap'],
    },
    
    inputHalf: {
      width: '100%',
      height: '35px',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      textAlign: 'center' as React.CSSProperties['textAlign'],
      color: 'black',
      marginBottom: '1rem',
    },

    button: {
      marginTop: '1.5rem',
      width: '100%',
      backgroundColor: '#004aad',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
    },

    label: {
      color: '#333',
      display: 'block',
      marginBottom: '0.2rem',
      fontSize: '1rem',
      textAlign: 'center' as const,
    },

    logo: {
    display: 'block',
    margin: '0 auto 1rem',
    width: '180px',
    height: 'auto',
    borderRadius: '12px',
  },

    title: {
      color: 'black',
      marginBottom: '1rem',
    fontWeight: 'bold',
    },

    loginContainer: {
      marginTop: '1rem',
      textAlign: 'center' as const,
    },

    loginText: {
      fontSize: '0.875rem',
      color: 'black',
    },

    loginLink: {
      fontSize: '0.875rem',
      color: '#3f6cfd',
      textDecoration: 'underline',
      cursor: 'pointer',
    },

    errorMessage: {
      color: 'red',
      marginTop: '1rem',
    },

    redirectButton: {
      position: 'absolute' as React.CSSProperties['position'],
      top: '20px',
      right: '20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },

    registerContainer: {
      marginTop: '1rem',
      textAlign: 'center' as const,
    },

    registerText: {
      display: 'inline-block',
      marginRight: '0.5rem',
      color: 'black',
      fontSize: '0.87rem'
    },

    registerLink: {
      color: '#3f6cfd',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: '0.87rem'
    },
  };

return (
  <div style={styles.background}>
    <div style={styles.box}>
      <form onSubmit={handleSubmit}>
        <h2 style={styles.title}>Register:</h2>
        <img src={logo} alt="logo" style={styles.logo} />

        {/* Inputs en dos columnas */}
        <div style={styles.inputRow}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>FirstName:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Jane"
              required
              style={styles.inputHalf}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Lastname:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Doe"
              required
              style={styles.inputHalf}
            />
          </div>
        </div>

        <div style={styles.inputRow}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane.doe@example.com"
              required
              style={styles.inputHalf}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>DNI:</label>
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="12345678"
              required
              style={styles.inputHalf}
            />
          </div>
        </div>

        <div style={styles.inputRow}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="TheJaneDoe"
              required
              style={styles.inputHalf}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="20"
              required
              style={styles.inputHalf}
            />
          </div>
        </div>

        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <button type="submit" style={styles.button}>
          Registrarse
        </button>
      </form>
      <div style={styles.registerContainer}>
        <span style={styles.registerText}>¿Ya estas registrado?</span>
        <span
          style={styles.registerLink}
          onClick={handleRegisterRedirect}
        >
          Login 
        </span>
      </div>
    </div>
  </div>
);
}