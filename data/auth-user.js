let userData = require('./users-data');
let usersAuthData = userData.usersAuthData;
function authUser(username, password) {
    let userArr = usersAuthData.filter((user) => { return user.username === username && user.password === password });
    if (userArr.length === 1) {
        return true;
    }
    return false;
}
module.exports =  authUser ;