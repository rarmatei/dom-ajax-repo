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
var theListOfRepos = document.getElementById("repos-list");
fetch(myUrl).then(result => result
  .json())
.then(repoList => repoList
  .forEach(repo => {
  
    
   var newItem = document.createElement ("li");
   newItem.innerText = repo.full_name;
   theListOfRepos.appendChild(newItem);

  } ));
