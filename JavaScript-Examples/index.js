// How to call API to get data from Backend using fetch to receive JS type

var postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
  .then((response) => {
    // return a promise
    return response.json(); // JSON.parse -> receive JS type
  })
  .then((posts) => {
    var htmls = posts.map((post) => {
      // use map to list out titles and bodies of element in the API
      return `<li>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </li>`;
    });

    var htmlItems = htmls.join(""); // join the items in the returned array above by a space

    var htmlCode = document.getElementById("content-block");
    htmlCode.innerHTML = htmlItems;
    console.log(htmlCode)
  })
  .catch((error) => {
    alert("ERROR!!!");
  });
