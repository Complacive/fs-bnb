const express = require('express');
const router = express.Router();

const Property = require('../models/listing-model');

// string concatonate '/'
router.get('/get', function (req, res) {
    Property.prototype
        .get()
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    Property.prototype
        .create(req.body)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    Property.prototype
        .getById(req.body.id)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/updateById', function (req, res) {
    Property.prototype
        .updateById(req.body.id)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeById', function (req, res) {
    Property.prototype
        .removeById(req.body.id)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;
