const leftDiv = document.getElementById("validRequest");
const rightDiv = document.getElementById("nonValidRequest");
const img = document.querySelector("img");
document.getElementById("b1").addEventListener("click", () => {
  fetchGit("LevkoBe", leftDiv);
});
document.getElementById("b2").addEventListener("click", () => {
  fetchGit("BevkoLe", rightDiv);
});

const fetchGit = (username, divToUse) => {
  leftDiv.textContent = "";
  rightDiv.textContent = "";
  img.src = "";
  let url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network is not ok.");
      }
      return response.json();
    })
    .then((jsonResponse) => {
      divToUse.textContent = JSON.stringify(jsonResponse, null, 2);
      img.src = jsonResponse.avatar_url;
    })
    .catch((error) => {
      divToUse.textContent = error.message;
    });
};
