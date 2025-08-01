/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
//var qr = require('qr-image');

inquirer
  .prompt([
    /* Pass your questions in here */
    { message:"Type your URL",
        name:"URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const s=answers.URL;
    var qr_svg = qr.image(s);
qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

fs.writeFile('url.txt',s, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });