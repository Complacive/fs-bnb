const express = require('express');
const router = express.Router();

const Provider = require('../models/provider-model');
const uploadService = require('../services/upload-service')
const userService = require('../services/user-service')

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

router.post("/image/:userId", (req, res) => {
    uploadService
        .upload(req, res)
        .then(() => {
            const userId = req.params.userId;
            const url = "http://localhost:3000/uploads/" + req.file.filename;

            userService
                .setImageUrl(userId, url)
                .then(user => {
                    res.json({
                        user
                    });
                })
                .catch(err => {
                    res.status(400).json({
                        msg: err
                    });
                });
        })
        .catch(err => {
            res.status(400).json({
                msg: err
            });
        });
});


module.exports = router;