const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket, 
  
};

function newTicket(req, res){
    console.log('new ticket')
    res.render(`tickets/new`, { title: 'Add Ticket', flightId: req.params.id });
}

