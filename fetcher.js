const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

if (process.argv.length < 4) {
  console.log('not enoough parameters!')
};

request('http://www.nextgoalagency.com', (error, response, body) => {
  if (!response || response.statusCode !== 200) {//there is no response or code does not give you all great
  console.log('Oops! Error:', error); // Print the error if one occurred
  return; //kicks you out otherwise skip
  } 

  fs.writeFile(path, body, error => {
    if (error) {
     console.log('Oops! there was an error dowloading, try again. Error:' + error);
    }
  console.log(`Downloaded and saved in ${path}. Size: ${body.length} bytes`);
    });
  });



//---OR USING STATS
// fs.access(fileName, () => {
//   fs.writeFile(fileNAme, body, () => {
//     const stats = fs.statsSync (fileName).size;
//     console.log(`Download and saved ${stats} bytes to ${fileName}`)
//   })
// })



