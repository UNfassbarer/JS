
// Make Exercise Box visible
function StartExercise() {
  const Exercise_box = document.querySelector(".selection_menu");
  Exercise_box.classList.toggle("hiddenContent");
}

// Random number
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Create elements for sliding animation
let modifier = 0.5;
function createElement() {
  const box = document.createElement("div");
  box.style.bottom = `${getRandomInt(-100, 650)}px`
  box.style.height = `${getRandomInt(15 * modifier, 125 * modifier)}px`
  box.style.width = `${getRandomInt(30 * modifier, 400 * modifier)}px`
  box.className = "animation_box";
  document.body.appendChild(box);
  setTimeout(() => { box.remove() }, 1000);
  modifier += 0.06;
}

//Manage sliding animation
let AniCounter = 0;
let animationInterval = 25.000;
function LoadAnimation(type) {
  if (AniCounter < 130) {
    createElement()
    AniCounter++
    setTimeout(() => {
      LoadAnimation(null)
      animationInterval -= 0.25
    }, animationInterval)
  } else if (AniCounter = 120) { Forwarding() }
}

// Simulate loading of new page
let allowAnimation = false;
function Forwarding() {
  document.querySelector('.selection_menu').style.display = 'none';
  document.getElementById("StartButton").classList.toggle("hiddenContent");
  document.getElementById('footer').style.color = 'black';
  document.getElementById("footer").style.backgroundColor = "rgba(238, 232, 232, 0.9)";
  document.body.style.background = "white";
  document.getElementsByClassName("sidebar")[0].classList.toggle("hiddenContent");
  document.getElementsByClassName("owl_2")[0].classList.toggle("hiddenContent");
  AniCounter = 0;
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
  setTimeout(() => { startNewTimeout() }, getRandomInt(3, 6) * 1000);
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
  const exerciseBox = document.getElementById("exercise_box");
  const QuestionBox = document.getElementById("E1_Questions");
  const Questions = QuestionBox.querySelectorAll(".question");
  // const ToggleBoxes = Questions.querySelectorAll("label");
  fetch('exercises.json')
    .then(response => response.json())
    .then(data => {
      // Load Questions and Instructions
      Questions.forEach((h4, index) => { h4.textContent = data.questions[index].text; });
      // ToggleBoxes.forEach((label, index) => {label.textContent = data.questions[index].label; });
      exerciseBox.querySelector('h4').innerText = data.instructions;

    })
    .catch(error => console.error('Error loading JSON:', error));
  exerciseBox.classList.toggle("hiddenContent");
  exerciseBox.querySelector('h1').textContent = `Übung ${exerciseNumber}`;
}

// Chat GPT integration to change CSS values
function changeCssValue(cssValue, amount) {
  const match = cssValue.match(/^([-+]?[0-9]*\.?[0-9]+)([a-z%]+)$/);
  if (!match) return cssValue;
  let number = parseFloat(match[1]);
  const unit = match[2];
  number -= amount;
  return `${number}${unit}`;
}


// Controll question movement
let Quest_Counter = 0;
let first_question = true;
function NextQuestion(direction) {
  const exerciseBox = document.getElementById("exercise_box");
  const ButtonText = document.getElementById("B_next").querySelector("p");
  const QuestionBox = document.getElementById("E1_Questions");

  if (first_question) {
    first_question = false;
    ButtonText.innerHTML = "Next Question";
    exerciseBox.style.height = "400px";
    QuestionBox.classList.toggle("hiddenContent");
    QuestionBox.style.left = "71%";
  }
  let currentLeft = QuestionBox.style.left || "0%";
  if (direction === 'next') {
    Quest_Counter++;
    QuestionBox.style.left = changeCssValue(currentLeft, 96);
    currentLeft === "-313%" ? ButtonText.innerHTML = "Controll ;)" : null;

    if (Quest_Counter > 5) {
      changeCssValue(currentLeft, -96);
      checkAnswers();
    }
  }

  else {
    if (direction === 'back' && Quest_Counter != 1) {
      Quest_Counter--;
      QuestionBox.style.left = changeCssValue(currentLeft, -96);
    }
  }
}

//Chat GPT integration to check answers
function checkAnswers() {
  let correct = 0;
  const exerciseBox = document.getElementById("exercise_box");
  exerciseBox.classList.toggle("hiddenContent");
  document.querySelectorAll("#E1_Questions > div").forEach((questionDiv) => {
    const selected = questionDiv.querySelector("input[type='radio']:checked");
    if (selected && selected.dataset.correct === "true") {
      correct++;
    }
  });
  setTimeout(() => { ShowResult(correct) }, 1250);
}

// Show result function
function ShowResult(correct) {
  const ResultBox = document.getElementById("Result_Box");
  const result_Num = document.getElementById("result");
  const Cover = document.getElementById("cover");
  ResultBox.classList.toggle("hiddenContent");
  result_Num.textContent = `${correct}/5`;
  result_Num.classList.toggle("hiddenContent");
  Cover.style.width = `${100 - (correct * 20)}%`;
}