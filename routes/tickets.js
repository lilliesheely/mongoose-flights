var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets'); 



router.get('/:id/new', ticketsCtrl.new);

//

module.exports = router;  