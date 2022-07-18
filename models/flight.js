const mongoose = require('mongoose'); 
// option shortcut variable
const Schema =mongoose.Schema; 

const destinationSchema = new Schema ({
    airport: String, 
    arrival: Date
}, {
    timestamps: true
})

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
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});




module.exports = mongoose.model('Flight', flightSchema);

