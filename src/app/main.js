console.log("Hello, DevOps!"); 

const fs = require('fs');
const logStream = fs.createWriteStream('logs/app-logs.log', { flags: 'a' });
logStream.write("App started at " + new Date() + "\n");
