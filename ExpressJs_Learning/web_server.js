const express = require('express');
const app = express();
const path = require('path');
// const logEvents = require('./middleware/log_events')
const {logger} = require('./middleware/log_events');
const errorHandler = require('./middleware/error_handler');
const cors = require('cors');

const PORT = process.env.PORT || 3500;

// Code for custom middleware
// app.use((req, res, next) => {
//     logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
//     console.log(`${req.method} ${req.path}`);
//     next();
// })

// Simplified LogEvents Code
app.use(logger);

// Code to filter Cross Origin Resource Sharing [!origin - Is used to handle undefined]
const whiteList = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500']
const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

// Code to allow Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Code snippet of builtin middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')));

// Code to handle the route as middleware
app.use('/subdir', require('./route/subdir'));

// app.get('/', (req, res) => {
//     res.send('Hi! Welcome to ExpressJS learning program');
// })

// Regex for root with or without index.html file
// app.get('^|$/index.html', (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// })

// Regex for root with or without index file with / without extension
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new-page.html"));
})

// Code to handle the redirect
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, "new-page.html");
})

// Code to handle the route
app.get('/hello(.html)?', (req, res, next)=> {
    console.log('Tried loading the hello.html file')
    next()
}, (req, res) => {
    res.send('Hi!, Welcome to Hello World of ExpressJs');
})

// Code to handle chaining of requests
const one = (req, res, next ) => {
    console.log('One');
    next();
}

const two = (req, res, next ) => {
    console.log('Two');
    next();
}

const three = (req, res) => {
    console.log('Three');
    res.send('Finished!')
}

app.get('/chain(.html)?', [one, two, three])

// Code to handle the path which doesn't exists
// app.get('/*', (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// })

// Code to handle the path which doesn't exists in different formats
app.all('*', (req, res) => {
    const extension = path.extname(req.url);
    res.status(404);
    const acceptType = req.accepts(['html', 'json', 'text']);
    if (extension.includes('html')) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (extension.includes('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));