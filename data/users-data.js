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

currentDate = new Date().toDateString();
let userPosts = [
    { pid: 0, username: 'deepak', postText: 'puff, puff, corn',date:currentDate },
    { pid: 1, username: 'deepak', postText: '#lifeispuff',date:currentDate},
    { pid: 2, username: 'debuttam', postText: 'stuff',date:currentDate },
    { pid: 3, username: 'debuttam', postText: 'lifeisstuff  ',date:currentDate },
    { pid: 4, username: 'rahul', postText: 'hello4',date:currentDate },
    { pid: 5, username: 'rahul', postText: 'hello2',date:currentDate },
    { pid: 6, username: 'rahul', postText: 'hello4',date:currentDate },
    { pid: 7, username: 'rahul', postText: 'hello4afdac',date:currentDate },
];
function getUserDetails(username){
    let userInfoArr = userInfo.filter((user) => {return user.username === username});
    if (userInfoArr.length == 1) {
        return userInfoArr[0];
    }
    return undefined;
}

function addPost(post,username) {
    let pid = userPosts.length;
    currentDate = new Date().toDateString();
    userPosts.push({ 'pid': pid, 'username': username, 'postText': post,'date': currentDate});
}

module.exports = { userInfo, usersAuthData, userPosts, getUserDetails,addPost };