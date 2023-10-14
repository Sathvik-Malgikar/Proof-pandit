import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-form-container">
      <div className="background-balls"> {/* New container for the balls */}
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>
        <div className="ball ball5"></div>
      </div>
     
      <div className="toggle-button" onClick={toggleForm}>
        <div className={`slider ${isLogin ? 'left' : 'right'}`}></div>
      </div>
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </div>
  );
};

export default AuthForm;
