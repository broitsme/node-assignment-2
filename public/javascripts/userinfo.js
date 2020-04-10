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
})();

(function insertPosts() {
    let userPostsApiUrl = `http://${location.hostname}:${location.port}/api/getPosts`;
    fetch(userPostsApiUrl).then((response) => {
        return response.json();
    }).then((data) => {
        insertInList(data);
        });
})();

function insertInList(data) {
    let listPostNode = document.getElementsByClassName('posts')[0].querySelectorAll('*')[0];
    console.log(listPostNode);
    for (let i = 0; i < data.length; i++) {
        let liElement = document.createElement('l1');
        liElement.setAttribute('class', 'list-group-item');
        liElement.innerHTML = `<h6>${data[i].postText}</h6>`;
        listPostNode.appendChild(liElement);
    }
}