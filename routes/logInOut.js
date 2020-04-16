var express = require('express');
var crypto = require('crypto');
const auth_user = require('../data/auth-user');
const userData = require('../data/users-data');  
var app = express.Router();

//post method for logout
app.post('/logout', function (req, res, next) {
    res.clearCookie('is_loggedin');
    res.clearCookie('auth_token');
    res.status(205).end();
  });
  
//get for authentication
app.post('/login', function (req, res, next) {
    let cred = req.body;
    if (!cred.username || !cred.password) { 
      //checks if both username and password are present.
        res.status(400).end();
    }
    let creadPresent = auth_user(cred.username, cred.password);
    if (creadPresent) {
        //make token
        //ecrypt username and password and use it as token.
        encrypted = encrypt(cred.username, cred.password);
        //put cookies
        res.cookie('is_loggedin', 'yes', { httpOnly: true, maxAge: 600000 });
        res.cookie('auth_token', encrypted, { httpOnly: true, maxAge: 600000 });
        //send status. 
         res.status(200).end();
    }
    else {
        //if creadentials not present
        res.status(401).end();
    }
});
function encrypt(username, password) { 
    let cipher = crypto.createCipher('aes192', 'secret123');
    creadJSONString = { "password": password, "username": username };
    // cred encrypted as  { "password": password, "username": username }
    let encrypted = cipher.update(JSON.stringify(creadJSONString), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

module.exports = app;
