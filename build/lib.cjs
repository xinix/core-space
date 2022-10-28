const fs = require("fs");
const path = require("path");

function getFilesForm(dir, fileTypes) {
    const filesToReturn = [];

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

function convertYaml2Json(inputUrl, outputUrl) {
    const files = getFilesForm(`./${inputUrl}`, ['.yaml'])

    const yaml = require('yaml')

    for (const file of files) {
        const name = file.split('/')
        const yamlFile = name[name.length - 1]
        const jsonFile = yamlFile.replace('.yaml', '.json')
        console.log(`Creating json file from: ${yamlFile}`)
        const fileData = fs.readFileSync(`${__dirname}/../${file}`, 'utf-8')
        const jsonData = yaml.parse(fileData)

        fs.writeFileSync(`${__dirname}/../${outputUrl}${jsonFile}`, JSON.stringify(jsonData))
        console.log('JSON file done: ', jsonFile)
    }

}

module.exports = {convertYaml2Json}