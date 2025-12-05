const fs = require('fs');
const path = require('path');

const resolve = path.dirname(__dirname);
console.log(resolve);

const filePath = path.join(__dirname,'test.txt');

const writefile = fs.writeFileSync(filePath , "This is the backend development","utf-8");

console.log(writefile);