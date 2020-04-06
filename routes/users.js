var express = require('express');
var router = express.Router();

/* GET users listing. */
const user = {
  name:'rahul',
  place:'hyd',
  org:'epam'
};
router.get('/user', function(req, res, next) {
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify(user));
});
module.exports = router;