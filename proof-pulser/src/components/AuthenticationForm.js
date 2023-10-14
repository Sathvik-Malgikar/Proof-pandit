import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AuthForm.css'; // Import your CSS file


const AuthenticationPage = () => {


   
  return (
    <div className="auth-form-container">
      <h1>Welcome to Proof-Pulse.com</h1>
      <p>Log in or sign up to get started.</p>

      {/* Links to navigate to different components after login */}
      <Link to="C:\Proof-pandit\proof-pulser\src\components\EvidenceSubmitForm.js">Go to Evidence Submit</Link>
      <Link to="C:\Proof-pandit\proof-pulser\src\components\JudgeForm.js">Go to Judge Form</Link>
      <Link to="C:\Proof-pandit\proof-pulser\src\components\UserForm.js">Go to User Form</Link>
    </div>
  );
};

export default AuthenticationPage;
