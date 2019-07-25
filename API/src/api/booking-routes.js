const express = require('express');
const router = express.Router();

const Booking = require('../models/booking-model');

// string concatonate '/'
router.get('/get', function (req, res) {
    Booking.prototype
        .get()
        .then(bookings => {
            res.send(bookings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    Booking.prototype
        .create(req.body)
        .then(bookings => {
            res.send(bookings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    Booking.prototype
        .getById(req.body.id)
        .then(bookings => {
            res.send(bookings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/updateById', function (req, res) {
    Booking.prototype
        .updateById(req.body.id)
        .then(bookings => {
            res.send(bookings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeById', function (req, res) {
    Booking.prototype
        .removeById(req.body.id)
        .then(bookings => {
            res.send(bookings);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;