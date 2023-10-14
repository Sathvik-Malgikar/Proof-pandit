"use strict";

const { Web3Storage } = require('web3.storage')


const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJBRDE3RDcxY2FhYzM1OTQzMTlBRDAyOGNiMEFkRDQ3QTM4ODMwNEEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTcyNzU0MzAyMzMsIm5hbWUiOiJzYXRodmlrSnVkZ2UifQ.qqnVuyI5BZWzll5u9k8HptSdU75waf2rCD5VaBCKLBc";
// Construct with token and endpoint
const client = new Web3Storage({ token: API_TOKEN })


 const download = async (rootCid)=>{
    // Get info on the Filecoin deals that the CID is stored in
    const info = await client.status(rootCid) // Promise<Status | undefined>
    
    // Fetch and verify files from web3.storage
    const res = await client.get(rootCid) // Promise<Web3Response | null>
    const files = await res.files() // Promise<Web3File[]>
    
    for (const file of files) {
      console.log(`${file.cid} ${file.name} ${file.size}`)
    }

    return files

}

module.exports = {download}