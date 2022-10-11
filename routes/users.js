var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.sendText);

module.exports = router;
