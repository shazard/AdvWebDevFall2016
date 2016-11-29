var mongoose = require('mongoose');
/*
          firstName
          lastName
          department
          startDate
          jobTitle
          salary
*/

var employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    department: {type: String, required: true},
    startDate: {type: String, required: true},
    jobTitle: {type: String, required: true},
    salary: {type: String, required: true}
});

/* This model will also create the collection in the Loc8r database when used */
var Employee = mongoose.model('Employee', employeeSchema);
