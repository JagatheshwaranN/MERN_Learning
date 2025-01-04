const express = require("express");
const route = express.Router();
const path = require("path");

// Regex for root with or without index file with / without extension
route.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

route.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

// Code to handle the redirect
route.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});

module.exports = route;
