var express = require('express');
var app = express.Router();

/* GET home page. */
var auth_middleware = require('./../middleware/auth_middleware');

app.get('/', function (req, res, next) {
    req.cookies.is_loggedin ? res.status(302).redirect(`/user.html`).end() : res.status(302).redirect(`/login.html`).end();
});
module.exports = app;
