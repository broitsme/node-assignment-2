var express = require('express');
var crypto = require('crypto');
const auth_user = require('../data/auth-user');
var app = express.Router();

//get for authentication
app.get('/login', function (req, res, next) {
    let cred = req.query;
    if (!cred.username || !cred.password) { 
      //checks if both username and password are present.
        res.status(400).end();
    }
    let creadPresent = auth_user(cred.username, cred.password);
    if (creadPresent) {
        //make token
        //ecrypt username and password and use it as token.
        let cipher = crypto.createCipher('aes192', 'secret123');
        creadJSONString = { "password": cred.password, "username": cred.username };
        let encrypted = cipher.update(JSON.stringify(creadJSONString), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        //put cookies
        res.cookie('is_loggedin', 'yes', { httpOnly: true, maxAge: 60000 });
        res.cookie('auth_token', encrypted, { httpOnly: true, maxAge: 60000 });
        //send status and end req. 
        res.status(200).end();
    }
    else {
        //if creadentials not present
        next(createError(401));
    }
});
  

  
module.exports = app;
