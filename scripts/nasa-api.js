const apiKey = "H7WjVAgOAg6kMvRpiqPFNrbn9CzANr500b9o6BSJ";

const buttonSpace = document.getElementById("buttons");
for (let line = 0; line < 6; line++) {
  var paragraph = document.createElement("p");
  for (let i = 0; i < 5; i++) {
    let button = document.createElement("button");
    let day = `2023-09-${(i + 1) * (line + 1)}`;
    button.textContent = day;
    button.addEventListener("click", () => nasaApi(day));
    paragraph.appendChild(button);
  }
  buttonSpace.appendChild(paragraph);
}

const nasaApi = (date) => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  const image = document.querySelector("img");
  image.src = "";
  const textField = document.getElementById("text");
  textField.textContent = "Loading...";

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json();
    })
    .then((jsonResp) => {
      image.src = jsonResp.url;
      textField.textContent = jsonResp.explanation;
    })
    .catch((error) => {
      textField.textContent = error.message;
    });
};
