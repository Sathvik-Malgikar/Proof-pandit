import React, { useState } from 'react';

import {  useEffect } from 'react'


const LoginForm = () => {
//   const [fingerprint, setFingerprint] = useState('')
  
//   useEffect(() => {
//     clientJs = new ClientJS()
//   }, []) // initiate on the first load

//   setFingerprint(clientJs.getFingerprint)
//   console.log(fingerprint)


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;