


fetch('https://api.github.com/repos/rarmatei/js-exercises/pulls') //https://github.com/rarmatei/js-exercises/pulls
  .then(function(response){
      return response.json();
  })
  .then(function(pulls){

    var pullsListElt = document.getElementById('pull-requests-list');
    pulls.forEach(pull => {
        var pullElt = document.createElement('li');
        pullElt.appendChild(addLink(pull));
        pullsListElt.appendChild(pullElt);
    });
  });

  function addLink(pull){
      var addLink = document.createElement('a');
      addLink.href = pull.html_url;
      addLink.innerText = pull.title;
      return addLink;
  }
