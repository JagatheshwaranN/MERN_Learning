const fsPromises = require('fs').promises;
const path = require('path');

// The below code is used to avoid the Callback Hell.
const fileOps = async() => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'demo.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'sample.txt'), 'NodeJs is part of MERN stack.');
        console.log('Write Complete');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'sample.txt'), '\n\n ExpressJs is also a part of MERN stack.');
        console.log('Append Complete');
        await fsPromises.rename(path.join(__dirname, 'files', 'sample.txt'), path.join(__dirname, 'files', 'demo2.txt'));
        console.log('Rename Complete');
        await fsPromises.unlink(path.join(__dirname, 'files', 'demo2.txt'));
    }catch(err){
        console.error(err);
    }
}

fileOps()

// // AppendFile is also used to create new file and append the text.
// fs.appendFile(path.join(__dirname, 'files', 'append.txt'), '\n\n ExpressJs is also a part of MERN stack.', (err) => {
//     if(err) throw err;
//     console.log('Append Complete');
// });

// Its a default function available with Node to capture the runtime errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});
