var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');

/* Locations pages */
router.all('/', ctrlHome.home);
router.all('/index', ctrlHome.home);
// :id below means you need to pass an id parameter
// :id? means parameters are optional
router.all('/update/:id', ctrlHome.update);
router.all('/view/:id?', ctrlHome.view);

module.exports = router;
