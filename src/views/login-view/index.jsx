import React, { useState } from 'react';
import Login from '../../components/form-login';
import Register from '../../components/form-register';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  registerText: {
    fontSize: 12,
    color: 'grey'
  }
};

export default function HomeView() {
  const [registerStatus, setRegisterStatus] = useState(true);

  const handleRegisterStatus = () => {
    setRegisterStatus(prev => !prev);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        oneplay{' '}
        <span role="img" aria-label="Ну привет">
          🎧
        </span>
      </h1>
      {registerStatus ? <Register /> :  <Login />}
      <p style={styles.registerText}>{registerStatus ? 'Уже зерестрирован?' : 'Еще не зарестрирован?'}</p>
      <button onClick={handleRegisterStatus}>
        {registerStatus ? 'Войти в свой аккаунт!' : 'Зарегистрироваться!'}
      </button>
    </div>
  );
}
