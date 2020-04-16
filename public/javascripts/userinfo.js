(function getUserInfo() {
    let userInfoApiUrl = `http://${location.hostname}:${location.port}/api/getUserInfo`;
    fetch(userInfoApiUrl).then((response) => {
        return response.json();
      })
      .then((data) => {
            let nameTextElement = document.createElement('h5');
            nameTextElement.innerHTML = data.name;
            let nameNode = document.getElementsByClassName('name');
            nameNode[0].appendChild(nameTextElement);
      });
    insertPosts();
})();

function insertPosts() {
    let userPostsApiUrl = `http://${location.hostname}:${location.port}/api/getPosts`;
    fetch(userPostsApiUrl).then((response) => {
        return response.json();
    }).then((data) => {
        insertInList(data);
        });
};

function insertInList(data) {
    let listPostNode = document.getElementsByClassName('posts')[0].querySelectorAll('*')[0];
    listPostNode.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let liElement = document.createElement('div');

        liElement.setAttribute('class', 'border-0 border-primary rounded');
        liElement.setAttribute('style', 'margin: 5px; padding: 5px; background-color:black;')
        let dateElement = document.createElement('h7');
        dateElement.innerHTML = data[i].date;
        dateElement.setAttribute('style', ' color: grey; float: right; ');
        let postElement = document.createElement('h5');
        postElement.setAttribute('style', 'color:white;');
        postElement.textContent = data[i].postText;
        liElement.appendChild(postElement);
        liElement.appendChild(dateElement);
        listPostNode.prepend(liElement);
    }
}

async function postText() {
    if (!document.getElementById('posterText').value) {
        alert('please write something in the box!');
        return;
    }
    let postTextObj = { 'postText': document.getElementById('posterText').value };
    document.getElementById('posterText').value = '';
    let postTextApiUrl = `http://${location.hostname}:${location.port}/api/addPost`;
    await fetch(postTextApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(postTextObj)
    });
    insertPosts();
}
