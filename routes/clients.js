const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require("../middleware");
const {
    clientIndex,
    clientCreate,
    clientShow,
    clientEdit,
    clientUpdate,
    clientDelete,
    dataCreate
} = require("../controllers/clients");

/* GET clients index /clients */
router.get('/', asyncErrorHandler(clientIndex));

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


/* CREATE data /clients/:id */
router.post('/:id', asyncErrorHandler(dataCreate));

module.exports = router;
