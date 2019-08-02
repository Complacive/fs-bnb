const express = require('express');
const router = express.Router();

const User = require('../models/user-model');

// string concatonate '/'
router.get('/get', function (req, res) {
    User.prototype
        .get()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    User.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => { 
            res.status(400).send(err);
        })
});

router.post('/getByEmail', function (req, res) {
    User.prototype
        .getByEmail(req.body.email)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/getById', function (req, res) {
    User.prototype
        .getById(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/updateById', function (req, res) {
    User.prototype
        .updateById(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeById', function (req, res) {
    User.prototype
        .removeById(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

   


module.exports = router