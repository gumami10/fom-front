import './style.scss';

import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = memo(() => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (!user) {
      alert('Insira o usuário');
      return;
    }

    if (!password) {
      alert('Insira a senha');
      return;
    }

    history.replace('/dashboard');
  }

  return (
    <div className='login'>
      <div className='login__title'>Login</div>

      <div className='login__content'>
        <input type='text' name='user' placeholder='Usuário' value={user} onChange={(e) => setUser(e.target.value)} />
        <input type='text' name='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => submit()}>entrar</button>
      </div>
    </div>
  );
});

export default Login;
