// JudgeForm.js
import React, { useState } from 'react';
import './JudgeForm.css'; // Import your CSS file

import axios from 'axios';

const url = "http://192.168.80.216:3000/getAll";

function redirectToUrl(url) {
  window.location.href = url;
}

function createIPFSLink(cid) {
  const baseURL = "https://";
  const subdomain = cid + ".ipfs.w3s.link";
  return baseURL + subdomain;
}


const JudgeForm = () => {
  const [caseId, setCaseId] = useState('');
  const [approval, setApproval] = useState('');

  const handleJudgeAction = (e) => {
e.preventDefault()
console.log(approval)


if (approval=="approve"){

  
  axios.post("http://192.168.80.216:3000/approval", {
    "status" : "approved!" , "case_id" : caseId
   }, {
     headers: {
       'Content-Type': 'application/json',
       // You can add other headers if needed
     }
   })
   .then((resp) => {
     alert(resp.data); // Use resp.data to access the response data
   })
   .catch((error) => {
     console.error('Request failed', error);
   });


}else if (approval=="reject"){

  axios.post("http://192.168.80.216:3000/approval", {
    "status" : "reject", "case_id" : caseId
   }, {
     headers: {
       'Content-Type': 'application/json',
       // You can add other headers if needed
     }
   })
   .then((resp) => {
     alert(resp.data); // Use resp.data to access the response data
   })
   .catch((error) => {
     console.error('Request failed', error);
   });

}else if(approval=="fetchdata"){


  // Handle judge action logic here (e.g., send the decision to the server)
  axios.get(url)
  .then((response) => {
    // Handle the successful response here
    console.log("GET request successful:", response.data);
    let iplink = createIPFSLink(response.data["cid"])
    redirectToUrl(iplink)
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error("GET request failed:", error);
  });

}

    
  };

  return (
    <div className="judge-form-container">
      <form className="judge-form">
        <h2>Judge Page</h2>
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
          <label>Approval</label>
          <select value={approval} onChange={(e) => setApproval(e.target.value)}>
            <option value="">Select approval status</option>
            <option value="approve">Approve</option>
            <option value="reject">Reject</option>
            <option value="fetchdata">Fetch-Data</option>
          </select>
        </div>
        <button onClick={handleJudgeAction}>Submit Decision</button>
      </form>
    </div>
  );
};

export default JudgeForm;
