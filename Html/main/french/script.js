// click animation
// document.addEventListener("click", function (e) {
//   // Limit to 20 circles at a time
//   if (document.querySelectorAll('.click-circle').length > 20) return;

//   const circle = document.createElement("div");
//   circle.className = "click-circle";
//   document.body.appendChild(circle);

//   const size = 12;
//   circle.style.left = `${e.clientX - size / 2}px`;
//   circle.style.top = `${e.clientY - size / 2}px`;

//   setTimeout(() => circle.remove(), 600);
// });




// click start button
document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll('.checkbox').forEach(cb => cb.checked = false);
});
const Exercise_box = document.querySelector(".selection_menu");

function StartExercise() {
  Exercise_box.style.opacity = "1";
  Exercise_box.style.visibility = "visible";
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
  modifier += 0.06;
}
//Manage sliding animation
let counter = 0;
let animationInterval = 25.000;
function LoadAnimation() {
  if (counter < 180) {
    createElement()
    counter++
    setTimeout(() => {
      LoadAnimation()
      animationInterval -= 0.125
    }, animationInterval)
  } else if (counter = 140) { Forwarding() }
}
let allowAnimation = false;
function Forwarding() {
  document.querySelector('.selection_menu').style.display = 'none';
  document.getElementById("StartButton").classList.toggle("hiddenContent");
  document.getElementById('footer').style.color = 'black';
  document.getElementById("footer").style.backgroundColor = "rgba(238, 232, 232, 0.9)";
  document.body.style.background = "white";
  document.getElementsByClassName("header")[0].classList.toggle("hiddenContent");
  document.getElementsByClassName("owl_2")[0].classList.toggle("hiddenContent");
  counter = 0;
  modifier = 1.00;
  allowAnimation = true;
  startNewTimeout();
}

// Manage owls moving tufts

function startNewTimeout() {
  let a = getRandomInt(1, 2);
  let b = getRandomInt(1, 2);
  allowAnimation ? toggleDesition(a, b) : null;
  setTimeout(() => { toggleDesition(a, b) }, 1000);
  setTimeout(() => { startNewTimeout() }, getRandomInt(3, 6)*1000);
}

function toggleDesition(a, b) {
  a === 1
    ? toggleTufts(b)
    : toggleIris(b);
}

function toggleTufts(b) {
  b === 1
    ? document.getElementById("tuft_l_id").classList.toggle("tuft_l-animate")
    : document.getElementById("tuft_r_id").classList.toggle("tuft_r-animate");
}

function toggleIris(b) {
  b === 1
    ? document.getElementById("iris_l_id").classList.toggle("iris-animate")
    : document.getElementById("iris_r_id").classList.toggle("iris-animate");
}

//start exercise

function startExercise(exerciseNumber) {
  const exerciseBox = document.querySelector(".exercise_box");
  exerciseBox.classList.toggle("hiddenContent");
  exerciseBox.querySelector('h1').textContent = `Übung ${exerciseNumber}`;
}