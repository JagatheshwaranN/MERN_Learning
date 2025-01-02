const express = require('express');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500;

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
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));