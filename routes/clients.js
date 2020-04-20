const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require("../middleware");
const {
    clientIndex,
    clientNew,
    clientCreate,
    clientShow,
    clientEdit,
    clientUpdate,
    clientDelete,

    clientAddFolder,
    clientAddData
} = require("../controllers/clients");

/* GET clients index /clients */
router.get('/', asyncErrorHandler(clientIndex));

/* GET clients new index /clients/new */
router.get('/new', clientNew);

/* POST clients create /clients */
router.post('/', asyncErrorHandler(clientCreate));

/* GET clients show /clients/:id */
router.get('/:id', asyncErrorHandler(clientShow));

/* GET clients edit /clients/:id/edit */
router.get('/:id/edit', asyncErrorHandler(clientEdit));

/* PUT clients update /clients/:id */
router.put('/:id', asyncErrorHandler(clientUpdate));

/* DELETE clients delete /clients/:id */
router.delete('/:id', asyncErrorHandler(clientDelete));


/* GET clients add data page /clients/:id/adddata */
router.get('/:id/adddata', asyncErrorHandler(clientAddData));

/* UPDATE clients add folder /clients/:id */
router.put('/:id', asyncErrorHandler(clientAddFolder));

module.exports = router;
