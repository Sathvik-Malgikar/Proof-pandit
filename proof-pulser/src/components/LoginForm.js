import React, { useState } from 'react';

import {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
//   const [fingerprint, setFingerprint] = useState('')
  
//   useEffect(() => {
//     clientJs = new ClientJS()
//   }, []) // initiate on the first load

//   setFingerprint(clientJs.getFingerprint)
//   console.log(fingerprint)
const navigate = useNavigate();
const handleClick = (pagePath) => navigate(pagePath);




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
if (email=="judge"){
  handleClick("/JudgeForm")
}else if (email=="police" ||email=="forensics" ||email=="CBI" ){
  handleClick("/EvidenceSubmitForm")

}else{
  handleClick("/UserForm")
}

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