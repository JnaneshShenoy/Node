const fs = require('fs');
const { Transform } = require('stream');

const readableStream = fs.createReadStream('data.txt', 'utf8');
const writableStream = fs.createWriteStream('outputx.txt', 'utf8');

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedData = chunk.toString().toUpperCase();
        callback(null, transformedData);
    }
});

readableStream.pipe(transformStream).pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Successfully transformed');
});
