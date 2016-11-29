//node module for simpler http requests
var request = require('request');



module.exports.homePage = function(req, res) {
        
    var requestOptions = {
          url : 'http://localhost:3001/api/v1/employees',
          method : "GET",
          json : {},
          //query string - helpful depending on type of API request to add query parameters like "?id=123" notation in urls
          qs : {}
        };
        
  request( requestOptions, function(err, response, body) {
      var results = [];
      if (response.statusCode === 200 && body.length) {
        results = (body instanceof Array) ? body : [];        
      }
      
      res.render('index', {
            title: 'Home Page',
            results: results
        });
      
    }
  );
    
   
};