const fs = require("fs");
const path = require("path");

const INPUT_URL = 'src/i18n/'
const OUTPUT_URL = 'src/locales/'

function getFilesForm(dir, fileTypes) {
    let filesToReturn = [];

    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        for (const i in files) {
            const curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
                filesToReturn.push(curFile.replace(dir, ''));
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile);
            }
        }
    }

    walkDir(dir);
    return filesToReturn;
}

console.log('*** Welcome to the I18N yaml 2 json parser ***')
const files = getFilesForm(`./${INPUT_URL}`, ['.yaml'])

const yaml = require('yaml')

for (const file of files) {
    const yamlFile = file.split('/')[2]
    const jsonFile = yamlFile.replace('.yaml', '.json')
    console.log(`Creating json file from: ${yamlFile}`)
    const fileData = fs.readFileSync(`${__dirname}/../${file}`, 'utf-8')
    const jsonData = yaml.parse(fileData)

    fs.writeFileSync(`${__dirname}/../${OUTPUT_URL}${jsonFile}`, JSON.stringify(jsonData))
    console.log('JSON file done: ', jsonFile)
}