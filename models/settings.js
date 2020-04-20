const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    settings: {
        timemode: String,
        theme: String
    }
});

module.exports = mongoose.model("Settings", SettingsSchema);