import React from 'react';
import AuthForm from './components/AuthForm';
import EvidenceSubmitForm from './components/EvidenceSubmitForm'; // Import your EvidenceSubmitForm component
import JudgeForm from './components/JudgeForm';
import UserForm from './components/UserForm';
import './App.css'; // Import your CSS file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"
function App() {
  return (
    <div className="App">
      <div className="background-rectangles">
        <div className="rectangle rectangle1"></div>
        <div className="rectangle rectangle2"></div>
        <div className="rectangle rectangle3"></div>
      </div>
      <div className="background-balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>
        <div className="ball ball5"></div>
        <div className="ball ball7"></div>
        <div className="ball ball6"></div>
      </div>
      <header className="App-header">
        <p>
          Proof-Pulse.com
        </p>
      </header>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AuthForm />} />
          <Route path="EvidenceSubmitForm" element={<EvidenceSubmitForm />} />
          <Route path="JudgeForm" element={<JudgeForm />} />
          <Route path="UserForm" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>

     
    </div>
  );
}

export default App;