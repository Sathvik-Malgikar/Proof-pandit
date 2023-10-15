const express = require('express')
const os = require('os')
const {download} = require("./ipfshandler")
const { exit } = require('process')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

const { Gateway } = require('@hyperledger/fabric-gateway');

// Create a new instance of the Gateway class
// const gateway = new Gateway();

const init= async ()=>{
// Create a new instance of the Gateway class
const gateway = new Gateway();

// Connect to the Fabric network using the connection profile
await gateway.connect('connection.json');

// Get a network instance for the channel
const network = await gateway.getNetwork('mychannel');

// Get a smart contract instance
const contract = await network.getContract('mycontract');  
}

const invoke = async ()=>{
  
// Submit a transaction
await contract.invokeTransaction('myfunction', ['arg1', 'arg2']);

// Evaluate a transaction
const result = await contract.evaluateTransaction('myfunction', ['arg1', 'arg2']);

// Disconnect from the Fabric network
await gateway.disconnect();
}

 

app.use(bodyParser.json()); // Parse JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data in the request body



const netint = os.networkInterfaces()
if(!netint["Wi-Fi"])
{
    console.log("Wi-Fi is not connected,exiting..");
    exit(1)
}
const ip = netint["Wi-Fi"].slice(-1)[0].address

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let cid=null
let status="not approved"
let statuses={}


app.post('/getStatus', (req, res) => {

    res.setHeader("Content-Type","application/json")
    let tempcase = req.body["case_id"]
    res.send({"status" : statuses[tempcase]})

  })

app.get('/getALL', (req, res) => {
    res.setHeader("Content-Type","application/json")
    res.send({"cid" : cid})
    console.log(statuses)
  })
  
  app.post('/approval', (req, res) => {
    const submittedData = req.body; // Access the data from the request body
  
    console.log('Submitted Data:', submittedData); // Print the data to the server console
    let casetemp = submittedData["case_id"]
    statuses[casetemp] = submittedData["status"]
    res.send('status set in bknd');
  });


app.post('/evidenceSubmit', (req, res) => {
    const submittedData = req.body; // Access the data from the request body
  
    console.log('Submitted Data:', submittedData); // Print the data to the server console
    cid= submittedData["cid"]
    res.send('evidenceSubmit');
  });

  app.get('/getFromBC', (req, res) => {
  
  })

app.listen(port,ip)
console.log(` server up and running, listening at http://${ip}:${port}/`);





