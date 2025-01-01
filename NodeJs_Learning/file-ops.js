const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'demo.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// The below code snippet is called as Callback Hell.
fs.writeFile(path.join(__dirname, 'files', 'sample.txt'), 'NodeJs is part of MERN stack.', (err) => {
    if(err) throw err;
    console.log('Write Complete');
    fs.appendFile(path.join(__dirname, 'files', 'sample.txt'), '\n\n ExpressJs is also a part of MERN stack.', (err) => {
        if(err) throw err;
        console.log('Append Complete');
        fs.rename(path.join(__dirname, 'files', 'sample.txt'), path.join(__dirname, 'files', 'demo2.txt'), (err) => {
            if(err) throw err;
            console.log('Rename Complete');
        })
    })
});

// AppendFile is also used to create new file and append the text.
fs.appendFile(path.join(__dirname, 'files', 'append.txt'), '\n\n ExpressJs is also a part of MERN stack.', (err) => {
    if(err) throw err;
    console.log('Append Complete');
});

// Its a default function available with Node to capture the runtime errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
