let usersAuthData = [
    {uid:1, username: 'depak', password: 'puffcorn'},
    {uid:2, username: 'debuttam', password: 'htmlcss' },
    {uid:3, username:'rahul',password:'justWork'}
];
let userInfo = [
    { uid: 1, name: 'depak arora', hometown: 'ajmer', likes: 'java' },
    { uid: 2, name: 'debuttam banergee', hometown: 'kolkata', likes: 'dancing' },
    { uid: 3, name: 'rahul bhatia', hometown: 'kotdwar', likes: 'himself' }
];
let userPosts = [
    {pid:0, uid: 1, postText: 'hello1' },
    {pid:1, uid: 1, postText: 'hello11' },
    {pid:2, uid: 2, postText: 'hello2' },
    {pid:3, uid: 2, postText: 'hello21' },
    {pid:4, uid: 4, postText: 'hello4' },
];
module.exports = { userInfo, usersAuthData, userPosts };