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
    departs: {
        type: Date, 
        default: function() {
            let date = new Date(); 
            return date.setFullYear(date.getFullYear() + 1);  
        }
    }
}, {
    timestamps: true
});




module.exports = mongoose.model('Flight', flightSchema);

