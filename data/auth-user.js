let userData = require('./users-data');
let usersAuthData = userData.usersAuthData;
function authUser(username, password) {
    //sends value uid of the user, if credentials are valid else returns undefined.
    let userArr = usersAuthData.filter((user) => { return user.username === username && user.password === password });
    if (userArr.length === 1) {
        return true;
    }
    return false;
}
module.exports =  authUser ;