// Write code here to communicate with Github

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

var form = document.querySelector(".my-auto form:nth-child(4)");
var theListOfRepos = document.getElementById("repos-list");
var getUser = document.getElementById("githubsearch");
var myGithutUser = "mohamedlafiteh";
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var value = getUser.value.toLowerCase();
  if (value === "") {
    value = myGithutUser;
  }
  var myUrl = "https://api.github.com/users/" + value + "/repos";

  fetch(myUrl)
    .then(function(result) {
      return result.json();
    })
    .then(function(repoList) {
      var element = document.getElementById("repos-count");
      element.innerText = repoList.length;
      repoList.forEach(repo => {
        console.log(value);
        console.log(repo.owner.login);
        if (value === repo.owner.login.toLowerCase()) {
          var newItem = document.createElement("li");
          newItem.innerText = repo.name;
          theListOfRepos.appendChild(newItem);
          var newElement = document.createElement("a");
          newElement.href = repo.html_url;
          newElement.text = repo.html_url;
          theListOfRepos.appendChild(newElement);
        }
      });
    });
  theListOfRepos.innerText = "";
});
