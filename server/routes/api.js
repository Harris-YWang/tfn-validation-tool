var express = require('express');
var router = express.Router();

var tfnController = require('../controllers/tfn');

router.get('/', function(req, res, next) {
	res.send('Welcome to TFN APIs');
});

router.post('/tfn', tfnController.validate);

module.exports = router;
