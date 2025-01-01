const fs = require('fs');

// Create Directory
if(!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if(err) throw err;
        console.log('Directory Created');
    })
}

// Remove Directory
if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if(err) throw err;
        console.log('Directory Removed');
    })
}

// Its a default function available with Node to capture the runtime errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});