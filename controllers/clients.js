const Client = require("../models/client");
const User = require('../models/User');
const Data = require("../models/data");
const mongoose = require("mongoose");

module.exports = {
    // Clients Index Page
    async clientIndex(req, res, next) {
        const user = User;
        const { _id } = user;
        // let clients = await User.find({});
        let clients2 = await Client.find({});
        res.send(clients2);
    },
    // Clients Create
    async clientCreate(req, res, next) {
        const user = req.user._id;
        const { _id } = user;
        let client = new Client(req.body);
        let lawyer = await User.findByIdAndUpdate({ _id }, { $push: { clients: client, lawyer: _id } });
        client.save();
        lawyer.save();
        res.send({client, _id});
    },
    // Clients Show Page
    async clientShow(req, res, next) {
        let client = await Client.findById(req.params.id);
        res.send(client);
    },
    // Clients Edit Page
    async clientEdit(req, res, next) {
        let client = await Client.findById(req.params.id);
        res.send(client);
    },
    // Clients Update
    async clientUpdate(req, res, next) {
        let client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        await client.save();
        res.send(client);
    },
    // Clients Delete
    async clientDelete(req, res, next) {
        let client = await Client.findByIdAndRemove(req.params.id);
        res.send("Deleted client");
    },

    // Clients Create Data
    async dataCreate(req, res, next) {
        let client = await Client.findById(req.params.id);
        let data = await new Data(req.body);
        client.data.push(data);
        client.save();
        res.send(client);
    },
}
