import React, { useState } from 'react';
import './UserForm.css'; // Import your CSS file

const UserForm = () => {
  const [caseId, setCaseId] = useState('');
  const [textInput, setTextInput] = useState('');
  const [status, setStatus] = useState('');

  const handleSeeStatus = () => {
    // Simulate fetching the status (you can replace this with actual API call)
    if (caseId === 'exampleCaseID') {
      setStatus('Case is in progress');
    } else {
      setStatus('Case not found');
    }
  };

  return (
    <div className="user-form-container">
      <form className="user-form">
        <h2>User Form</h2>
        <div className="form-group">
          <label>Case ID</label>
          <input
            type="text"
            placeholder="Case ID"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Text Input</label>
          <textarea
            placeholder="Enter your text here"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <button onClick={handleSeeStatus}>See Status</button>
        {status && <p>Status: {status}</p>}
      </form>
    </div>
  );
};

export default UserForm;
