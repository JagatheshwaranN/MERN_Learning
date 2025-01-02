console.log('===========================================')

import os from 'os';
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log('===========================================')

import {add, sub, mul, div} from './math.js';
console.log(add(2, 3));
console.log(sub(5, 3));
console.log(mul(3, 3));
console.log(div(10, 2));
console.log('===========================================')

import { readFile } from 'node:fs';

// Approach 1

// readFile('./files/demo.txt', (err, data) => {
//     if(err) throw err;
//     // console.log(data); - It provides the data in buffer format
//     console.log(data.toString());
// })

// Approach 2
readFile('./files/demo.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data); // Here, Buffer data converted with the use of encoding format
})

// Its a default function available with Node to capture the runtime errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
