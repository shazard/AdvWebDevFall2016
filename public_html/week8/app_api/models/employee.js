var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    startDate: {
        type: Date,
        "default": Date.now
    },
    jobTitle: String,
    salary: String
});

/* This model will also create the collection in the Loc8r database when used */
var Employee = mongoose.model('employeeLab', employeeSchema);
