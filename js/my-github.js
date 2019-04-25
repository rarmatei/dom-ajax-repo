// Write code here to communicate with Github


 // Adding event handler code to an onclick event

//  document.querySelector(".list-inline").onclick = function(element){
//     return element.innerHTML = "https://github.com/havvarslan/js-exercises";
//   }	



fetch('https://api.github.com/users/havvarslan/repos')
    .then(function(response) {
        return response.json(); // or response.text()
    })
    .then(function(repos) {
        // console.log("hello", text);
        document.getElementById("repos-count").innerHTML = repos.length;
         
        var reposListElt = document.getElementById('repos-list');

        repos.forEach( repo =>  {
            var repoElt = document.createElement('li');
            // repoElt.innerText = repo.name;
            repoElt.appendChild(addLink(repo));
            reposListElt.appendChild(repoElt);
              
        });

    });

    function addLink(repo) {
        var addLink = document.createElement("a");
        addLink.href = repo.html_url;
        addLink.innerText = repo.name;
        return addLink;
      }







   
