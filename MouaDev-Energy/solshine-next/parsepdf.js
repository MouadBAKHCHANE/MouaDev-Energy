const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync(process.argv[2]);

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync(process.argv[3], data.text);
    console.log("PDF text extracted successfully.");
}).catch(err => {
    console.error("Error extracting PDF:", err);
});
