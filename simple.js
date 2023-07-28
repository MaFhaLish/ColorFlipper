let colors = [
  "#8A8EFD",
  "green",
  "red",
  "rgba(133,122,200)",
  "#571A67",
  "#E0D6C9",
];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let titile = document.querySelector(".title");

function getRundomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.onclick = function () {
  // Get Random Number Between 0 and 3
  let randomNumber = getRundomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  titile.style.color = colors[randomNumber];
};
