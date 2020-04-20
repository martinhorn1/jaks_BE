const Client = require("../models/client");

module.exports = {
    // Clients Index Page
    async clientIndex(req, res, next) {
        let clients = await Client.find({});
        res.render("clients/index", { clients });
    },
    // Clients New Page
    clientNew(req, res, next) {
        res.render("clients/new");
    },
    // Clients Create
    async clientCreate(req, res, next) {
        let client = await Client.create(req.body.client);
        res.redirect(`/clients/${client.id}`);
    },
    // Clients Show Page
    async clientShow(req, res, next) {
        let client = await Client.findById(req.params.id);
        res.render("clients/show", { client });
    },
    // Clients Edit Page
    async clientEdit(req, res, next) {
        let client = await Client.findById(req.params.id);
        res.render("clients/edit", { client });
    },
    // Clients Update
    async clientUpdate(req, res, next) {
        let client = await Client.findByIdAndUpdate(req.params.id, req.body.client);
        res.redirect(`/clients/${client.id}`);
    },
    // Clients Delete
    async clientDelete(req, res, next) {
        let client = await Client.findByIdAndRemove(req.params.id);
        res.redirect("/clients");
    },


    // Clients Add Data Page
    async clientAddData(req, res, next) {
        let client = await Client.findById(req.params.id);
        res.render("clients/adddata", { client });
    },
    // Clients Create Data
    async clientAddFolder(req, res, next) {
        let client = await Client.data.push({ data: req.body.client });
        res.send(`/clients/${client.id}`);
    },
}