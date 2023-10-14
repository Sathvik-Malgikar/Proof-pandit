import React, { useRef, useState } from 'react';
import './UserForm.css'; // Import your CSS file
import axios from  "axios"
const UserForm = () => {
  const [caseId, setCaseId] = useState('');
  const [textInput, setTextInput] = useState('');
  const [status, setStatus] = useState('');

  const handleSeeStatus = (e) => {
    
    e.preventDefault()
    // Simulate fetching the status (you can replace this with actual API call)
    if (caseId === 'exampleCaseID') {
      setStatus('Case is in progress');
    } else {
      setStatus('Case not found');
    }

    axios.post("http://192.168.80.216:3000/getStatus", {
       "case_id" : caseId
     }, {
       headers: {
         'Content-Type': 'application/json',
         // You can add other headers if needed
       }
     })
     .then((resp) => {
       console.log(resp.data); 
       let st = resp.data["status"]

       setTextInput(st)

     })
     .catch((error) => {
       console.error('Request failed', error);
     });


 
  };
const tbox = useRef(null)

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
            readOnly
            placeholder="status"
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
