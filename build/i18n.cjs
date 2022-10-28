const lib = require('./lib.cjs')

const INPUT_URL = 'src/i18n/'
const OUTPUT_URL = 'src/locales/'

console.log('*** Welcome to the I18N yaml 2 json parser ***')
lib.convertYaml2Json(INPUT_URL, OUTPUT_URL)