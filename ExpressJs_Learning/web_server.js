const express = require("express");
const app = express();
const path = require("path");
// const logEvents = require('./middleware/log_events')
const { logger } = require("./middleware/log_events");
const errorHandler = require("./middleware/error_handler");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const PORT = process.env.PORT || 3500;

// Code for custom middleware of LogEvents
// app.use((req, res, next) => {
//     logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
//     console.log(`${req.method} ${req.path}`);
//     next();
// })

// Simplified LogEvents Code
app.use(logger);

// Code to allow Cross Origin Resource Sharing with options
app.use(cors(corsOptions));

// Code snippet of builtin middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/subdir", express.static(path.join(__dirname, "./public")));

// Code to handle the route as middleware for root
app.use("/", require("./route/root"));

// Code to handle the route as middleware for subdir
app.use("/subdir", require("./route/subdir"));

app.use("/employees", require("./route/api/employees"));

// app.get('/', (req, res) => {
//     res.send('Hi! Welcome to ExpressJS learning program');
// })

// Regex for root with or without index.html file
// app.get('^|$/index.html', (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// })

// Code to handle the route
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("Tried loading the hello.html file");
    next();
  },
  (req, res) => {
    res.send("Hi!, Welcome to Hello World of ExpressJs");
  }
);

// Code to handle chaining of requests
const one = (req, res, next) => {
  console.log("One");
  next();
};

const two = (req, res, next) => {
  console.log("Two");
  next();
};

const three = (req, res) => {
  console.log("Three");
  res.send("Finished!");
};

app.get("/chain(.html)?", [one, two, three]);

// Code to handle the path which doesn't exists
// app.get('/*', (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// })

// Code to handle the path which doesn't exists in different formats
app.all("*", (req, res) => {
  const extension = path.extname(req.url);
  res.status(404);
  const acceptType = req.accepts(["html", "json", "text"]);
  if (extension.includes("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (extension.includes("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
