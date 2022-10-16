//const sm = require('spritesmith')
const fs = require('fs')
const path = require('path')

const BASE_URL = 'src/assets/tokens/'

function getFilesFrom(dir, fileTypes) {
    let filesToReturn = {};
    let key = ''

    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        for (const i in files) {
            const curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
                filesToReturn[key].push(curFile.replace(dir, ''));
            } else if (fs.statSync(curFile).isDirectory()) {
                key = `./${curFile}`.replace(dir, '')
                filesToReturn[key] = []
                walkDir(curFile);
            }
        }
    }

    walkDir(dir);
    return filesToReturn;
}

console.log('*** Welcome to the SPRITE MASTER ***')
const files = getFilesFrom(`./${BASE_URL}`, ['.jpg', '.png'])
const keys = Object.keys(files)
const Spritesmith = require('spritesmith')

for (const folder of keys) {
    console.log('Creating sprite for: ', folder)
    Spritesmith.run({
        src: files[folder],
        padding: 2
    }, function handleResult(err, result) {
        if (err) throw err

        const outImg = `src/assets/images/${folder}.png`
        const outCss = `src/assets/generated/${folder}.css`

        fs.writeFileSync(`${__dirname}/../${outImg}`, result.image)
        console.log('SPRITE image done: ', outImg)

        const css = [
            `.token.${folder} { background-image: url('../images/${folder}.png'); background-size: ${result.properties.width}px ${result.properties.height}px }`
        ]
        let lines = Object.keys(result.coordinates)
        for (const line of lines) {
            const coord = result.coordinates[line]
            const token = line
                .replace(BASE_URL, '')
                .replace('.jpg', '')
                .split('/')
            css.push(`.token.${token[1]} { background-position-x: -${coord.x}px; background-position-y: -${coord.y}px; }`)
        }

        fs.writeFileSync(`${__dirname}/../${outCss}`, css.join('\r'))
        console.log('SPRITE css done: ', outCss)
    })
}




