var express = require('express');
var router = express.Router();

const ERC1400 = require('./ERC1400/controller.js')
const USERS = require('./usercontroller.js')
router.use('/erc1400',ERC1400);
router.use('/users',USERS)

module.exports = router;


