
var mongoose = require('mongoose');
var Employee = mongoose.model('employeeLab');


function employeesReadAll() {
    
    var promise = new Promise(function (resolve, reject) { 
            Employee
            .find()
            .exec(function(err, results){
                if ( err ) {
                    reject(err);                    
                } else {
                    results = fixEmployeeData(results);
                    resolve(results);
                }
            });           

    });
    
    return promise;
       
    
}

function employeesReadOne(id) {
    
    var promise = new Promise(function (resolve, reject) { 
        
        if ( !id ) {
             reject('employeeid not found'); 
        }
            Employee
            .findById(id)
            .exec(function(err, results){
                if ( err ) {
                    reject(err);                    
                } else {
                    results = fixData(results);
                    resolve(results);
                }
            });           

    });
    
    return promise;
       
    
}

function fixEmployeeData(results) {
    
    var finalData = [];    
    results.forEach(function(doc) {
        finalData.push(fixData(doc));        
    });
    return finalData;
}

function fixData(doc) {
    
    var createdDate = new Date(doc.startDate).toJSON().slice(0,10);    
    return {
        "_id" : doc._id,
        "firstName" : doc.firstName,
        "lastName" : doc.lastName,
        "department" : doc.department,
        "jobTitle" : doc.jobTitle,
        "salary" : doc.salary,
        "startDate" : createdDate.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/, "$2/$3/$1")
    };
    
}



module.exports.employeesReadAll = employeesReadAll;
module.exports.employeesReadOne = employeesReadOne;




