// click animation
document.addEventListener("click", function (e) {
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
  Exercise_box.style.visibility = "visible";
}
// random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Sliding animation

function LoadAnimation() {
    const box = document.createElement("div");

    box.style.bottom = `${getRandomInt(0,1000)}px`
     box.style.height =  `${getRandomInt(15,75)}px`
    box.className = "animation_box";
    document.body.appendChild(box);
  }

// Attach click event to all elements with class 'exercise'
document.querySelectorAll('.exercise').forEach(element => {
  element.addEventListener('click', () => {
    LoadAnimation();
  });
});