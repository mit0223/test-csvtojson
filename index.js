const csvFilePath='test.csv'
const jsonFilePath='test.json'
const csv=require('csvtojson')
const fs=require('fs')

const readStream=fs.createReadStream(csvFilePath);
const writeStream=fs.createWriteStream(jsonFilePath);
readStream.pipe(csv()).pipe(writeStream);