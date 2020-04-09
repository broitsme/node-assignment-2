var express = require('express');
var createError = require('http-errors');
var app = express.Router();
var userData = require('../data/users-data');
var userPosts = userData.userPosts;
let isAuthenticated = true;

//post for logout
app.post('/logout', function (req, res, next) {
  res.cookie.set('is_loggedin',{maxAge: 0 });
  res.cookie.set('auth_token',{maxAge: 0 });
  res.status(205).end();
});

//post for posting text 
app.post('/postText/:uid', (req, res,next) => {
  if (!isAuthenticated) {
    next(createError(401));
    return;
  }
  let uid = req.params.uid;
  let postText = req.query.postText;
  let pid = userPosts[userPosts.length - 1].pid + 1;
  userPosts.push({'pid': pid,'uid': uid, 'postText': postText });
  res.end();
});

//get for getting texts
app.get('/getPosts/:uid', (req, res, next) => {
  if (!isAuthenticated) {
    next(createError(401));
    return;
  }
  let uid = req.params.uid;
  res.status(200).end(JSON.stringify(userPosts.filter((userPost) => { return userPost.uid == uid })));
});

module.exports = app;