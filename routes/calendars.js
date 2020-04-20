const express = require('express');
const router = express.Router();

/* GET calendar index /calendar */
router.get('/', (req, res, next) => {
    res.send('INDEX /calendar');
});

/* GET calendar new index /calendar/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /calendar/new');
});

/* POST calendar create /calendar */
router.post('/', (req, res, next) => {
    res.send('CREATE /calendar');
});

/* GET calendar show /calendar/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /calendar/:id');
});

/* GET calendar edit /calendar/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /calendar/:id/edit');
});

/* PUT calendar update /calendar/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /calendar/:id');
});

/* DELETE calendar delete /calendar/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /calendar/:id');
});

module.exports = router;
