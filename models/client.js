const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: String,
    email: {
        type: String,
        index: true,
        unique: true,
        trim: true
    },
    idCode: {
        type: Number,
        index: true,
        unique: true,
        trim: true
    },
    isCompany: Boolean,
    phone: Number,
    company: String,
    address: String,
    data: {
        type: Array,
        default: [],
        subdata: {
            type: Array,
            default: []
        }
    },
    lawyerid: Schema.Types.ObjectId
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model("Client", ClientSchema);
