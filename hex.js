let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let titile = document.querySelector(".title");

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.onclick = function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + hex[randomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  titile.style.color = hexColor;
};
