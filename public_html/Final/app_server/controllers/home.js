/* GET 'home info' page */


var ProductData = require('../models/product');;

module.exports.home = function(req, res){
    /*
    product: String,
    description: String,
    price: String
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
        
        ProductData.create({
          product: req.body.product,
          description: req.body.description,
          price: req.body.price
        },function (err) {           
           // saved!
           successCB();
        });
              
    } else {
         res.render('index', { 
            title: 'Add',
            message : msg
        });
    }   
    
 
};

module.exports.view = function(req, res){
    
     var id = req.params.id,
         removed = '';
 
    function finish() {     
       ProductData
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
                
                ProductData.remove({ _id: id }, function (err) {
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
    product: String,
    description: String,
    price: String
    */
         
         id = req.body._id;
         var query = { '_id': req.body._id };
         var update = {
          product: req.body.product,
          description: req.body.description,
          price: req.body.price
        };
        var options = {};
        var callback = function(){
            msg = "Updated";
        };
        ProductData.update(query, update, options, callback);
        msg = 'data has been updated';
     }
    
    
    ProductData
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


