const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const FolderSchema = new Schema({
//     type: Array,
//     _id: Schema.Types.ObjectId,
//     name: String
// });

const ClientSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    address: String,
    data: {
        type: Array,
        default: []
    }
        // folder: [FolderSchema]
        // folder: {
        // name: String,
        // files: 
        //     {
        //         file: String
        //     }
        // }
        
        
    ,
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model("Client", ClientSchema);