const path = require('path');
const fs = require('fs');

const storageDir = path.join(process.cwd(), 'storage');
if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir);
}

async function saveStreamToFile(stream, filename) {
    const filePath = path.join(storageDir, filename);
    const writeStream = fs.createWriteStream(filePath);
    const url = `/files/${filename}`;
    await new Promise((resolve, reject) => {
        stream.pipe(writeStream);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
    return { filePath, url };
}

module.exports = { saveStreamToFile };


