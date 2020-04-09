module.exports = function(req, res, next){
    const cookies = req.cookies;
  if (cookies.auth_token) {
      //need to work here.
      next();
    } else {
      res.send(401);
    }
  }
  