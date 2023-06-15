function getProjects() {
  const urlGitHub = "https://api.github.com/users/JoaoFranca23/repos";

  var loadingg = document.querySelector("#loading");

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      loadingg.style.display = "none";
      showProjects(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

function showProjects(data) {
  var listElement = document.querySelector(".projectList");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.href = data[i]["clone_url"];
    a.target = "_blank";

    let linkText = document.createTextNode(data[i]["name"]);
    a.appendChild(linkText);
    div.appendChild(a);
    listElement.appendChild(div);
  }
}

getProjects();
