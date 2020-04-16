var express = require('express');
var app = express.Router();
var userData = require('../data/users-data');
var userPosts = userData.userPosts;
var userInfo = userData.userInfo;
bodyParser = require('body-parser').json();

//post method for posting posts
app.post('/addPost', (req, res, next) => {
  let username = req.username;
  let post = req.body.postText;
  userData.addPost(post,username);
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