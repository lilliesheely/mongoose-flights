const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket, 
    create
};

function newTicket(req, res){
    console.log('new ticket')
    res.render(`tickets/new`, { title: 'Add Ticket', flightId: req.params.id });
}

function create(req, res){
    console.log('adding ticket')
    const ticket = new Ticket(req.body); 

    res.redirect(`/flights/${req.params.id}`);
}