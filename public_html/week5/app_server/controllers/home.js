/* GET 'home info' page */


var EmployeeData = require('../models/review');;

module.exports.home = function(req, res){
    
    /*
    firstName: String,
    lastName: String,
    department: String,
    startDate: String,
    jobTitle: String,
    salary: String
     */
    
    var msg = '';
    function successCB(){
         res.render('index', { 
            title: 'Add',
            message : 'Saved'
        });        
    }
    if (req.method === 'POST') {
        console.log(req.body);
        
        EmployeeData.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          department: req.body.department,
          startDate: req.body.startDate,
          jobTitle: req.body.jobTitle,
          salary: req.body.salary
        },function (err) {           
           // saved!
           successCB();
        });
              
    } else {
         res.render('index', { 
            title: 'Home',
            message : msg
        });
    }   
    
 
};

module.exports.view = function(req, res){
    
     var id = req.params.id,
         removed = '';
 
    function finish() {     
       EmployeeData
       //no parameters finds all
       .find()
       .exec(function(err, results){

               res.render('view', { 
                   title: 'View',
                   results : results,
                   removed : removed
               });
       });
    }
    
     if ( id ) {
         //make promise
         var removePromise = new Promise(
            function (resolve, reject) { 
                
                EmployeeData.remove({ _id: id }, function (err) {
                   if (!err) {
                        resolve(' has been removed'); // success
                    } else {
                        reject(' has not been removed'); // failure
                    }
               });                
                
            });
         
            //resolve promise
             removePromise.then(function(result) {
                 removed = id + result;
                 finish(); 
             }, function(result) {
                 removed = id + result;
                 finish();  
             });
           
                
     } else {
      finish();
    }
     
     
    
};



module.exports.update = function(req, res){
    //params object contains the parameters specified in the post request (/routes/index.js)
    var id = req.params.id;
    var msg = '';
    if (req.method === 'POST') {
        
    /*
    firstName: String,
    lastName: String,
    department: String,
    startDate: String,
    jobTitle: String,
    salary: String
     */
         
         id = req.body._id;
         var query = { '_id': req.body._id };
         var update = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          department: req.body.department,
          startDate: req.body.startDate,
          jobTitle: req.body.jobTitle,
          salary: req.body.salary
        };
        var options = {};
        var callback = function(){
            msg = "Updated";
        };
        EmployeeData.update(query, update, options, callback);
        msg = 'data has been updated';
     }
    
    
    EmployeeData
    .findOne({ '_id': id })
    .exec(function(err, results){
    
         if ( results ) {
            res.render('update', { 
                title: 'Update',
                message: msg,
                results : results
            });
        } else {
             res.render('notfound', { 
                message: 'Sorry ID not found'
            });
        }
           
    });
};


