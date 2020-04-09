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
        //dont'create hash , ecrypt it.
        let token = crypto.createHash('sha256').update(cred.username + cred.password).digest('hex');
        //put cookies
        res.cookie('is_loggedin', 'yes', { httpOnly: true, maxAge: 60000 });
        res.cookie('auth_token', token, { httpOnly: true, maxAge: 60000 });
        //send status and end req. 
        res.status(200).end();
    }
    else {
        //if creadentials not present
        next(createError(400));
    }
});
  

  
module.exports = app;
