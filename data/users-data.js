let usersAuthData = [
    {username: 'deepak', password: 'puffcorn'},
    {username: 'debuttam', password: 'htmlcss' },
    { username:'rahul',password:'justWork'}
];
let userInfo = [
    {username: 'deepak', name: 'Deepak arora', hometown: 'ajmer', likes: 'java' },
    {username: 'debuttam', name: 'Debuttam Banergee', hometown: 'kolkata', likes: 'dancing' },
    { username:'rahul', name: 'Rahul Bhatia', hometown: 'kotdwar', likes: 'himself' }
];
let userPosts = [
    {pid:0,username: 'deepak', postText: 'hello1' },
    {pid:1,username: 'deepak', postText: 'hello11' },
    {pid:2,username: 'debuttam', postText: 'hello2' },
    {pid:3,username: 'debuttam', postText: 'hello21' },
    { pid: 4, username: 'rahul', postText: 'hello4' },
    {pid:4,username:'rahul', postText: 'hello2' },
    {pid:4,username:'rahul', postText: 'hello4' },
    {pid:4,username:'rahul', postText: 'hello4afdac' },

];
function getUserDetails(username){
    let userInfoArr = userInfo.filter((user) => {return user.username === username});
    if (userInfoArr.length == 1) {
        return userInfoArr[0];
    }
    return undefined;
}

module.exports = { userInfo, usersAuthData, userPosts, getUserDetails };