const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    phone: String,
    clients: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    calendar: {
        type: Schema.Types.ObjectId,
        ref: "Calendar"
    },
    settings: {
        type: Schema.Types.ObjectId,
        ref: "Settings"
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);