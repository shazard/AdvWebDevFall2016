var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/index', ctrlMain.index);
router.get('/index.html', ctrlMain.index);

module.exports = router;