const lib = require('./lib.cjs')
const fs = require('fs');
const path = require('path');

const INPUT_URL = 'src/tokens/yaml/'
const OUTPUT_URL = 'src/assets/data/'

console.log('*** Welcome to the TOKENS yaml 2 json parser ***')

const dirPath = path.join(__dirname, `../${OUTPUT_URL}`);

// Check if the directory exists
if (!fs.existsSync(dirPath)) {
    // Directory doesn't exist, create it
    fs.mkdirSync(dirPath, {recursive: true});
    console.log('Directory created:', dirPath);
} else {
    console.log('Directory already exists:', dirPath)
}

lib.convertYaml2Json(INPUT_URL, OUTPUT_URL)
