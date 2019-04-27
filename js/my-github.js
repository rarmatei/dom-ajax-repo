// Write code here to communicate with Github
// var button = document.querySelector(".nav-link js-scroll-trigger");
// button.addEventListener("click", function() {

// })
// button.textContent = ""
var myUrl = "https://api.github.com/users/mohamedlafiteh/repos";
// fetch(myUrl)
// .then(function(response){
// response.json()
// })
// .then(function(results){
// results.forEach(function(name,id){
//   var x = document.getElementById("repos-count");
//   x.innerText = id.size;

// })
// })
// var theListOfRepos = document.getElementById("repos-list");
// fetch(myUrl)
//   .then(result => result.json())
//   .then(function(repoList) {
//     var element = document.getElementById("repos-count");
//     element.innerText = repoList.length;
//     repoList.forEach(repo => {
//       var newItem = document.createElement("li");
//       newItem.innerText = repo.name;
//       theListOfRepos.appendChild(newItem);
//       var newElement = document.createElement("a");
//       newElement.href = repo.html_url;
//       newElement.text = repo.html_url;
//       theListOfRepos.appendChild(newElement);
//     });
//   });
var theListOfRepos = document.getElementById("repos-list");
fetch(myUrl)
  .then(result => result.json())
  .then(function(repoList) {
    var element = document.getElementById("repos-count");
    element.innerText = repoList.length;
    repoList.forEach(repo => {
      var newItem = document.createElement("li");
      newItem.innerText = repo.name;
      theListOfRepos.appendChild(newItem);
      var newElement = document.createElement("a");
      newElement.href = repo.html_url;
      newElement.text = repo.html_url;
      theListOfRepos.appendChild(newElement);
    });
  });

var element = document.getElementById("githubsearch");
element.addEventListener("keyup", function(event) {
  const value = event.target.value;
  fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls").then(
    function(result) {
      result.json().then(function(repoResult) {
        repoResult.forEach(function(results) {
          if (results.user.login === value) {
            console.log(results);
            var prList = document.getElementById("pull-requests-list");
            var newitem = document.createElement("li");
            var links = document.createElement("a");
            links.href = results.html_url;
            links.text = results.user.login;
            newitem.appendChild(links);
            prList.appendChild(newitem);
          }
        });
      });
    }
  );
});

fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls")
.then(function (response){
   return response.json()
})
.then(function (data){
   data.forEach(function (result){
     if (data)
   })
})