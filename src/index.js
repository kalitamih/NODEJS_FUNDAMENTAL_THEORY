import csv from 'csvtojson';
import fs from 'fs';

const csvFilePath = './csv/task1-2.csv';
const textFilePath = './result/task1-2.txt';

const readStream = fs.createReadStream(csvFilePath);

const writeStream = fs.createWriteStream(textFilePath);

const errorHandler = (err) => { console.log(err); }

readStream.on('error', errorHandler);
writeStream.on('error', errorHandler);
csv().on('error', errorHandler);

readStream.pipe(csv()).pipe(writeStream);