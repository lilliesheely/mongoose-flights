const mongoose = require('mongoose'); 
// option shortcut variable
const Schema =mongoose.Schema; 

const flightSchema = new Schema ({
    airline: String, 
    airport: {
        type: String, 
        default: 'DEN'
    }, 
    flightNo: {
        type: Number,
        min: 10, 
        max: 9999
    }, 
    departs: Date 
});




module.exports = mongoose.model('Flight', flightSchema);