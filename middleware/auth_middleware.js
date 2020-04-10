var crypto = require('crypto');
var userData = require('../data/users-data');
var usersAuthData = userData.usersAuthData;
module.exports = function (req, res, next) {
  const cookies = req.cookies;
  if (cookies.auth_token) {
    //decrypt the auth_token.
    decrypted = decrypt(cookies.auth_token);
    //making JSON object from decrypted string, cred are encrypted as  { "password": password, "username": username }
    authCred = JSON.parse(decrypted);
    //checking if usename exists
    usersAuthData.filter((user) => {
      if (user.username == authCred.username && user.password == authCred.password) {
    /*show algo save the token and match it*/
        req.username = authCred.username;
      }
    });
    //if username exists, exicute next function, else throw error
    req.username ? next() : next(createError(401));
  }
}
 
function decrypt(auth_token){
  let decipher = crypto.createDecipher('aes192', 'secret123');
  let decrypted = decipher.update(auth_token, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}