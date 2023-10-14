const NodeRSA = require('node-rsa');
const readline= require("readline")

// Create an RSA key pair (public and private keys)
const key = new NodeRSA({ b: 512 }); // You can adjust the key size as needed

// The text you want to encrypt
const r1 = readline.createInterface({
input : process.stdin, output : process.stdout
})

r1.question("enter link to encrypt\n",(ans)=>{
    
    // Encrypt the text with the public key
    const encrypted = key.encrypt(ans, 'base64');
    
    console.log('Encrypted Text:', encrypted);
console.log("\n after decryption ... \n")
    console.log(key.decrypt(encrypted,"utf8"))

})

// Function to convert a file to Base64 encoding
function fileToBase64(file, callback) {
    const reader = new FileReader();
  
    reader.onload = function () {
      const base64String = reader.result.split(',')[1];
      callback(base64String);
    };
  
    reader.onerror = function (error) {
      console.error('Error reading the file:', error);
      callback(null);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file');
      callback(null);
    }
  }
  
//   // Usage example
//   const inputFile = document.getElementById('fileInput'); // Replace 'fileInput' with your input element's ID
//   inputFile.addEventListener('change', function () {
//     const selectedFile = inputFile.files[0];
//     fileToBase64(selectedFile, function (base64String) {
//       if (base64String) {
//         console.log('Base64 encoding of the file:', base64String);
//     }
// });
//   });