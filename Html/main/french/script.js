// click animation
document.addEventListener("click", function (e) {
  // Limit to 20 circles at a time
  if (document.querySelectorAll('.click-circle').length > 20) return;

  const circle = document.createElement("div");
  circle.className = "click-circle";
  document.body.appendChild(circle);

  const size = 12;
  circle.style.left = `${e.clientX - size / 2}px`;
  circle.style.top = `${e.clientY - size / 2}px`;

  setTimeout(() => circle.remove(), 600);
});

// click start button
document.addEventListener("DOMContentLoaded", () => {
  const start_button = document.getElementById("start_button");
  start_button.addEventListener('click', StartExercise);
});
const Exercise_box = document.querySelector(".selection_menu");

function StartExercise() {
  Exercise_box.style.opacity = "1";
  Exercise_box.style.pointerEvents = "all";
}
// random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Attach click event to all elements with class 'exercise'
document.querySelectorAll('.exercise').forEach(element => {
  element.addEventListener('click', () => {
    LoadAnimation()
  });
});

//Create elements for sliding animation
let modifier = 0.500;
function createElement() {
  const box = document.createElement("div");
  box.style.bottom = `${getRandomInt(-100, 650)}px`
  box.style.height = `${getRandomInt(15 * modifier, 125 * modifier)}px`
  box.style.width = `${getRandomInt(30 * modifier, 400 * modifier)}px`
  box.className = "animation_box";
  document.body.appendChild(box);
  setTimeout(() => { box.remove() }, 1500);
  modifier += 0.05;
}
//Manage sliding animation
let counter = 0;
let animationInterval = 25.000;
function LoadAnimation() {
  if (counter < 175) {
    createElement()
    counter++
    setTimeout(() => {
      LoadAnimation()
      animationInterval -= 0.125
    }, animationInterval)
  } else { Forwarding() }
}

function Forwarding() {
  document.querySelector('.selection_menu').style.display = 'none';
  document.querySelector('.button').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.body.style.background = "white";
  counter = 0;
  modifier = 1.00;
}