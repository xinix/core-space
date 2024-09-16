const lib = require('./lib.cjs')

const INPUT_URL = 'src/tokens/yaml/'
const OUTPUT_URL = 'src/assets/data/'

console.log('*** Welcome to the TOKENS yaml 2 json parser ***')
lib.convertYaml2Json(INPUT_URL, OUTPUT_URL)
