var mongoose = require('mongoose');

var employeeDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    startDate: String,
    jobTitle: String,
    salary: String
});


var EmployeeData = mongoose.model('EmployeeData', employeeDataSchema);

module.exports = EmployeeData;