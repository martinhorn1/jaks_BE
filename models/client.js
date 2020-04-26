const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    address: String,
    data: {
        type: Array,
        default: [],
        subdata: {
            type: Array,
            default: []
        }
    }
        
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model("Client", ClientSchema);