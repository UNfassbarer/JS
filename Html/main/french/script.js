// Basic  Chat GPT integrated Functions

// Random number
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Load any JSON content
function LoadJsonContent(callback) {
  fetch('exercises.json')
    .then(response => response.json())
    .then(data => { callback(data) }).catch(error => console.error('Error loading JSON:', error));
}

// Change a universal CSS values
function changeCssValue(cssValue, amount) {
  const match = cssValue.match(/^([-+]?[0-9]*\.?[0-9]+)([a-z%]+)$/);
  if (!match) return cssValue;
  let number = parseFloat(match[1]);
  const unit = match[2];
  number -= amount;
  return `${number}${unit}`;
}

// Selfmade functions to toggle page logic

// Global variables
const exerciseBox = document.getElementById("exercise_box");

// Open or close the exercise box
const exerciseBoxVissible = (open) => { exerciseBox.classList.toggle("hiddenContent", !open) };

//Manage sliding animation
let Animation_C = 0;
let AnimationInterval = 14;
function LoadAnimation(type) {
  Animation_C === 0 ? Hide_selection_menu() : null;
  if (Animation_C < 140) {
    createElement()
    Animation_C++
    setTimeout(() => { LoadAnimation(type) }, AnimationInterval)
  } else if (Animation_C === 140) { Forwarding() }
  AnimationInterval -= 0.1;
}

const Hide_selection_menu = () => { document.getElementById('book_menu').classList.toggle("hiddenContent") };

//Create elements for sliding animation
let modifier = 0.5;
function createElement() {
  const box = document.createElement("div");
  box.style.bottom = `${getRandomInt(-100, 650)}px`
  box.style.height = `${getRandomInt(15 * modifier, 125 * modifier)}px`
  box.style.width = `${getRandomInt(30 * modifier, 400 * modifier)}px`
  box.className = "animation_box noInteraction";
  document.body.appendChild(box);
  setTimeout(() => { box.remove() }, 1000);
  modifier += 0.06;
}

// Simulate loading of new page
function Forwarding() {
  document.getElementById("StartButton").classList.toggle("hiddenContent");
  document.getElementById('footer').style.color = 'black';
  document.getElementById("footer").style.backgroundColor = "rgba(238, 232, 232, 0.9)";
  document.body.style.background = "white";
  document.getElementsByClassName("sidebar")[0].classList.toggle("hiddenContent");
  document.getElementsByClassName("owl_2")[0].classList.toggle("hiddenContent");
  Animation_C = 0;
  modifier = 1.0;
  startNewTimeout(true);
}

// Manage owls moving tufts
function startNewTimeout(allowAnimation) {
  const [a, b] = [getRandomInt(1, 2), getRandomInt(1, 2)];
  if (allowAnimation) {
    setTimeout(() => { toggleDesition(a, b) }, 1000)
    setTimeout(() => { startNewTimeout(true) }, getRandomInt(3, 6) * 1000)
  }
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
  resultVisible ? ClearResult() : null;
  const QuestionBox = document.getElementById("E1_Questions");
  const Questions = QuestionBox.querySelectorAll(".question");
  LoadJsonContent(data => {
    Questions.forEach((h4, index) => {
      h4.innerText = data[`E_${exerciseNumber}_questions`][index].text;
    });
    exerciseBox.querySelector('h4').innerText = data.instructions;
  });
  exerciseBoxVissible(true);
  exerciseBox.querySelector('h1').textContent = `Übung ${exerciseNumber}`;
}

// Controll question movement
let Quest_C = 0;
let first_question = true;
function NextQuestion(direction) {
  const ButtonText = document.getElementById("B_next").querySelector("p");
  const QuestionBox = document.getElementById("E1_Questions");

  if (first_question) {
    ButtonText.innerHTML = "Next Question";
    exerciseBox.style.height = "400px";
    QuestionBox.classList.toggle("hiddenContent");
    QuestionBox.style.left = "71%";
    first_question = false;
  }
  let currentLeft = QuestionBox.style.left || "0%";
  if (direction === 'next') {
    Quest_C++;
    QuestionBox.style.left = changeCssValue(currentLeft, 96);
    currentLeft === "-313%" ? ButtonText.innerHTML = "Controll ;)" : null;

    if (Quest_C > 5) {
      changeCssValue(currentLeft, -96);
      checkAnswers();
    }
  } else if (direction === 'back' && Quest_C != 1) {
    Quest_C--;
    QuestionBox.style.left = changeCssValue(currentLeft, -96);
  }
}

//Chat GPT integration to check answers
function checkAnswers() {
  let correct = 0;
  exerciseBoxVissible(false);
  document.querySelectorAll("#E1_Questions > div").forEach((questionDiv) => {
    const selected = questionDiv.querySelector("input[type='radio']:checked");
    if (selected && selected.dataset.correct === "true") {
      correct++;
    }
  });
  setTimeout(() => { ShowResult(correct) }, 1250);
}

// Show result box
let resultVisible = false;
function ShowResult(correct) {
  document.body.style.background = "linear-gradient(90deg, rgba(0, 0, 0, 0.48) 0%, rgba(80, 59, 80, 0.48) 50%)";
  const ResultBox = document.getElementById("Result_Box");
  const result_Num = document.getElementById("result");
  const Cover = document.getElementById("cover");
  ResultBox.classList.toggle("hiddenContent");
  result_Num.textContent = `${correct}/5`;
  result_Num.classList.toggle("hiddenContent");
  Cover.style.width = `${100 - (correct * 20)}%`;
  LoadJsonContent(data => { document.getElementById("message").textContent = data.messages[correct].text });
  resultVisible = true;
}

function ClearResult() {
  document.body.style.backgroundImage = "linear-gradient(rgb(255, 255, 255), rgb(160, 226, 109), rgb(88, 204, 2))";
  document.body.style.backgroundAttachment = "fixed";
  const ResultBox = document.getElementById("Result_Box");
  const result_Num = document.getElementById("result");
  const Cover = document.getElementById("cover");
  ResultBox.classList.toggle("hiddenContent");
  // result_Num.textContent = ``;
  result_Num.classList.toggle("hiddenContent");
  Cover.style.width = `100%`;
  const QuestionBox = document.getElementById("E1_Questions");

      QuestionBox.style.left = "-25%";
}