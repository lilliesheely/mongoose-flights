var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets'); 



router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.delete('/flights/:id/tickets/delete', ticketsCtrl.delete);

module.exports = router;  