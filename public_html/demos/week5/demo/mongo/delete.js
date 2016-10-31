/* 
 * note: you need the callback to execute
 */


var Review = require('../models/review');

var id = req.params.id;

Review.remove({ _id: id }, function(err) {
            if (!err) {
                /* Document Deleted */
            }
            else {
                /* Document NOT Deleted */
            }
});