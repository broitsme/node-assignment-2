async function login() {
    let username = document.getElementsByName('cred')[0].value;
    let password = document.getElementsByName('cred')[1].value;
    let loginApiUrl = `http://${location.hostname}:${location.port}/login?username=${username}&password=${password}`;
    await fetch(loginApiUrl);
    let locationUrl = `http://${location.hostname}:${location.port}/user.html`;
    location.replace(locationUrl);
    
} 
async function logout() {
    let logoutApiUrl = `http://${location.hostname}:${location.port}/logout`;
    await fetch(logoutApiUrl, {method: 'POST'});
}