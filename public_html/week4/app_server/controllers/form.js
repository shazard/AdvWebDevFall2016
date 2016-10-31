
function formView(req, res) {
    
     res.render('form', {
         title: 'Form Page',
         message: 'Here is my message'
    });
}

function formPost(req, res) {
    
    if (req.method === 'POST') {
       res.render('results', { 
            title : 'Form Post Page',
            name: req.body.name,
            email: req.body.email,
            comments: req.body.comments
        });       
    } else {
         res.render('results', { 
            title : 'Form Post Page',
            name: 'No Name Found',
            email: 'No Email Found',
            comments: 'No Comments Found'
        });
    }   
}

/* Set the module class to have functions available for other files. */
module.exports.formView = formView;
module.exports.formPost = formPost;

