var crypto = require('crypto');
var userData = require('../data/users-data');
var usersAuthData = userData.usersAuthData;
module.exports = function (req, res, next) {
  const cookies = req.cookies;
  if (cookies.auth_token) {
    //need to work here.
    let decipher = crypto.createDecipher('aes192', 'secret123');
    let decrypted = decipher.update(cookies.auth_token, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    req.authCred = JSON.parse(decrypted);
    console.log(req.params+" "+req.url);
    next();
  }
}
 