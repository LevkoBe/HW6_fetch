// reverse string function

let reverse = (str) => str.split("").reverse().join("");

// input event listener

document.getElementById("inputReverse").addEventListener("input", () => {
  setTimeout(outputReverse, 1000);
});

// update out by input

let outputReverse = () => {
  document.getElementById("outputReverse").textContent = reverse(inputReverse.value);
};
