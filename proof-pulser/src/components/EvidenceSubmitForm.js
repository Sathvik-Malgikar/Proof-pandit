// EvidenceSubmitForm.js
import React, { useState } from 'react';
import './evidencesubmit.css';

import { Web3Storage } from 'web3.storage'
import axios from 'axios';
import axiosInstance from "./axiosinstance"
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJBRDE3RDcxY2FhYzM1OTQzMTlBRDAyOGNiMEFkRDQ3QTM4ODMwNEEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTcyNzU0MzAyMzMsIm5hbWUiOiJzYXRodmlrSnVkZ2UifQ.qqnVuyI5BZWzll5u9k8HptSdU75waf2rCD5VaBCKLBc";
// Construct with token and endpoint
const client = new Web3Storage({ token: API_TOKEN })



const EvidenceSubmitForm = () => {
  const [evidenceId, setEvidenceId] = useState('');
  const [CaseeId, setCaseeId] = useState('');
  const [contentType, setContentType] = useState('');
  const [mediaFile, setMediaFile] = useState(null);

  const handleEvidenceSubmit = async (e) => {
    e.preventDefault()
  
    if (mediaFile==null)
    return alert("select file")
  else
  alert("file not null")



    // Handle evidence submission logic here
    // const fileInput = document.querySelector('input[type="file"]')
    // Pack files into a CAR and send to web3.storage
    // console.log(mediaFile.name)
    const rootCid = await client.put(mediaFile) // Promise<CIDString>
    // console.log("uploaded successfully, cid :", rootCid )
    // alert("Image uploaded with cid :," + rootCid)
console.log("sent ",rootCid)

axios.post("http://192.168.80.216:3000/evidenceSubmit", {
 cid : rootCid
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

    // axiosInstance.post('/evidenceSubmit', {
    //   cid: rootCid
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  };

  return (
    <div className="evidence-submit-form-container">
      <form className="evidence-submit-form"  >
        <h2>Evidence Submission</h2>
        <div className="form-group">
          <label>Evidence ID</label>
          <input
            type="text"
            placeholder="Evidence ID"
            value={evidenceId}
            onChange={(e) => setEvidenceId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Case ID</label>
          <input
            type="text"
            placeholder="Case ID"
            value={CaseeId}
            onChange={(e) => setCaseeId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Content Type</label>
          <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
            <option value="">Select content type</option>
            <option value="image">Image</option>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
            <option value="document">Document</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Upload Media</label>
          <input
            type="file"
            accept="image/*, audio/*, video/*"
            onChange={(e) => setMediaFile(e.target.files )}
          />
        </div>
        <button onClick={handleEvidenceSubmit}>Submit Evidence</button>
      </form>
    </div>
  );
};

export default EvidenceSubmitForm;
