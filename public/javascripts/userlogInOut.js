async function login() {
    let username = document.getElementsByName('cred')[0].value;
    let password = document.getElementsByName('cred')[1].value;
    let cred = {
        'username': username,
        'password': password
    };
    let loginApiUrl = `http://${location.hostname}:${location.port}/login`;
    await fetch(loginApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(cred)
    }
    );
    let locationUrl = `http://${location.hostname}:${location.port}/user.html`;
     location.replace(locationUrl);
} 
async function logout() {
    let logoutApiUrl = `http://${location.hostname}:${location.port}/logout`;
    await fetch(logoutApiUrl, { method: 'POST' });
    let locationUrl = `http://${location.hostname}:${location.port}`;
    location.replace(locationUrl);
}