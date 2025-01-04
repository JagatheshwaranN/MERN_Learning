const express = require("express");
const route = express.Router();
const path = require("path");
const employeeController = require("../../controller/employee-controller");
const { ro } = require("date-fns/locale");

// The below code is replaced with MVC pattern
// data = {}
// data.employees = require('../../model/employees.json')

// route.route('/')
// .get((req, res) => {
//     res.json(data.employees)
// })
// .post((req, res) => {
//     res.json({
//         "firstname": req.body.firstname,
//         "lasttname": req.body.lastname,
//     })
// })
// .put((req, res) => {
//     res.json({
//         "firstname": req.body.firstname,
//         "lasttname": req.body.lastname,
//     })
// })
// .delete((req, res) => {
//     res.json({
//         "id": req.body.id
//     })
// })
// route.route('/:id')
// .get((req, res) => {
//     res.json({"id": req.params.id});
// })

route
  .route("/")
  .get(employeeController.getAllEmployees)
  .post(employeeController.createNewEmployee);

route
  .route("/:id")
  .get(employeeController.getEmployee)
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

module.exports = route;
