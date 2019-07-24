const express = require('express');
const router = express.Router();

const Admin = require('../models/admin-model');

// string concatonate '/'
router.get('/get', function (req, res) {
    Admin.prototype
        .get()
        .then(admins => {
            res.send(admins);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    Admin.prototype
        .create(req.body)
        .then(admins => {
            res.send(admins);
        })
        .catch(err => { 
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    Admin.prototype
        .getById(req.body.id)
        .then(admins => {
            res.send(admins);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/updateById', function (req, res) {
    Admin.prototype
        .updateById(req.body.id)
        .then(admins => {
            res.send(admins);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post('/removeById', function (req, res) {
    Admin.prototype
        .removeById(req.body.id)
        .then(admins => {
            res.send(admins);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;