const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service')

router.post('/login', (req, res) => {
    //console.log('logging in');
    AuthService.prototype
        .login(req.body)
        .then(user => {
            //console.log(user);
            res.send(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/loginProvider', (req, res) => {
    //console.log('logging in');
    AuthService.prototype
        .loginProvider(req.body)
        .then(provider => {
            //console.log(user);
            res.send(provider);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/loginAdmin', (req, res) => {
    //console.log('logging in');
    AuthService.prototype
        .loginAdmin(req.body)
        .then(provider => {
            //console.log(user);
            res.send(provider);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/register', (req, res) => {
    //console.log('registering user');
    AuthService.prototype
        .register(req.body)
        .then(user => {
            //console.log(req.body);
            res.json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

router.post('/registerProvider', (req, res) => {
    //console.log('registering user');
    AuthService.prototype
        .registerProvider(req.body)
        .then(provider => {
            //console.log(req.body);
            res.json(provider);
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

router.post('/registerAdmin', (req, res) => {
    //console.log('registering user');
    AuthService.prototype
        .registerAdmin(req.body)
        .then(admin => {
            //console.log(req.body);
            res.json(admin);
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

module.exports = router;
