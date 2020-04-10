var express = require('express');
var createError = require('http-errors');
var app = express.Router();
var userData = require('../data/users-data');
var userPosts = userData.userPosts;
var usersAuthData = userData.usersAuthData;
app.post('/postText/:uid', isAuthorized, (req, res, next) => {
  let uid = req.params.uid;
  let postText = req.query.postText;
  let pid = userPosts[userPosts.length - 1].pid + 1;
  userPosts.push({'pid': pid,'uid': uid, 'postText': postText });
  res.end();
});

//get for getting texts
app.get('/getPosts/:uid', isAuthorized, (req, res, next) => { next(); }, (req, res, next) => {
  let uid = req.params.uid;
  res.status(200).end(JSON.stringify(userPosts.filter((userPost) => { return userPost.uid == uid })));
});

//post for logout
app.post('/logout', function (req, res, next) {
  res.cookie.set('is_loggedin',{maxAge: 0 });
  res.cookie.set('auth_token',{maxAge: 0 });
  res.status(205).end();
});

function isAuthorized(req, res, next) {
  let uid = req.params.uid;
  let authCred = req.authCred;
  let isCredPresent = false;
  for (let i = 0; i < usersAuthData.length; i++){
    if (usersAuthData[i].username == authCred.username && usersAuthData[i].password == authCred.password && usersAuthData[i].uid == uid) { 
      console.log(usersAuthData[i].username + " " + usersAuthData[i].password + usersAuthData[i].uid);
      isCredPresent = true;
    }
  }
  if (isCredPresent) {
    next();
  }
  else {
    next(createError(401));
  }
}
module.exports = app;