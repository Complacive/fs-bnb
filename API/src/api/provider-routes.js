const express = require('express');
const router = express.Router();

const Provider = require('../models/provider-model');

// string concatonate '/'
router.get('/get', function (req, res) {
    Provider.prototype
        .get()
        .then(providers => {
            res.send(providers);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    Provider.prototype
        .create(req.body)
        .then(providers => {
            res.send(providers);
        })
        .catch(err => { 
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    Provider.prototype
        .getById(req.body.id)
        .then(providers => {
            res.send(providers);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/updateById', function (req, res) {
    Provider.prototype
        .updateById(req.body.id)
        .then(providers => {
            res.send(providers);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeById', function (req, res) {
    Provider.prototype
        .removeById(req.body.id)
        .then(providers => {
            res.send(providers);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;