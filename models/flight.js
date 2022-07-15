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
//         default: function() {
//         return timestamps //timestamp + 1 year
//         // let date = new Date("2014-10-29"); 
// // date.setFullYear(date.getFullYear() + 1);
//     }
    });
// }, { 
//     timestamps: true
//     create
// }); 
module.exports = mongoose.model('Flight', flightSchema);