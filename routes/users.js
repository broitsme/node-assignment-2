var express = require('express');
var app = express.Router();
var userData = require('../data/users-data');
var userPosts = userData.userPosts;
var userInfo = userData.userInfo;

//post method for posting posts
app.post('/postText/:postText', (req, res, next) => {
  let username = requsername;
  let postText = req.query.postText;
  let pid = userPosts[userPosts.length - 1].pid + 1;
  userPosts.push({'pid': pid,'username': username, 'postText': postText });
  res.end();
});

//get method for getting texts
app.get('/getPosts', (req, res, next) => {
  let username = req.username;
  let requiredPosts = userPosts.filter((userPost) => { return userPost.username == username });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(requiredPosts).end();
});

//get method for user details
app.get('/getUserInfo',  (req, res, next) => {
  let username = req.username;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).end(JSON.stringify(userInfo.filter((userInfo) => { return userInfo.username == username })[0]));
});

module.exports = app;