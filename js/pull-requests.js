//requirment 4
// var api = "https://api.github.com/repos/rarmatei/js-exercises/pulls";

// fetch(api).then(function(result) {
//   result.json().then(function(repoResult) {
//     repoResult.forEach(function(results) {
//       var prList = document.getElementById("pull-requests-list");
//       var newitem = document.createElement("li");
//       var links = document.createElement("a");
//       links.href = results.html_url;
//       links.text = results.user.login;
//       newitem.appendChild(links);
//       prList.appendChild(newitem);
//     });
//   });
// });

// requirment 5
var api = "https://api.github.com/repos/rarmatei/js-exercises/pulls";
// fetch(api)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     data.forEach(function(x) {
//       return data.user.login === "mohamedlafiteh";
//     });
//   })
//   .then(data => console.log(data));

// fetch(api).then(function(result) {
//   result.json().then(function(repoResult) {
//     repoResult.forEach(function(results) {
//       if (results.user.login === "mohamedlafiteh") {
//         var prList = document.getElementById("pull-requests-list");
//         var newitem = document.createElement("li");
//         var links = document.createElement("a");
//         links.href = results.html_url;
//         links.text = results.user.login;
//         newitem.appendChild(links);
//         prList.appendChild(newitem);
//       }
//     });
//   });
// });

var element = document.getElementById("newsearch");
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
