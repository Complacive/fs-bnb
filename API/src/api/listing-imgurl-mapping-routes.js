const express = require('express');
const router = express.Router();

const listingUrl = require('../models/listing-imgurl-mapping-model');

// string concatonate '/'
router.get('/get', function (req, res) {
    listingUrl.prototype
        .get()
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/getImage', function (req, res) {
    listingUrl.prototype
        .getImage(req.body.listingImgId)
        .then(images => {
            res.send(images);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    listingUrl.prototype
        .create(req.body)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    listingUrl.prototype
        .getById(req.body.id)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/updateById', function (req, res) {
    listingUrl.prototype
        .updateById(req.body.id)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeByListingId', function (req, res) {
    listingUrl.prototype
        .removeByListingId(req.body.listingImgId)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});


router.post('/removeByListingId', function (req, res) {
    listingUrl.prototype
        .removeById(req.body.id)
        .then(listings => {
            res.send(listings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;