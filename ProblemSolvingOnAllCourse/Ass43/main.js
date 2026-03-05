let tBody = document.querySelector(".result tbody");

fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((fullRes) => fullRes.json())
  .then((res) => {
    for (let i = 0; i < 15; i++) {
      let tr = document.createElement("tr");

      let tdName = document.createElement("td");
      let tdStars = document.createElement("td");
      let tdUrl = document.createElement("td");

      let url = document.createElement("a");
      url.href = res[i]["html_url"];
      url.target = "_blank";

      tdName.append(res[i]["name"]);
      tdStars.append(res[i]["stargazers_count"]);
      url.append(document.createTextNode("Visit"));
      tdUrl.append(url);

      tr.append(tdName, tdStars, tdUrl);
      tBody.append(tr);
    }
  })
  .catch((error) => {
    console.log(error);
  });
