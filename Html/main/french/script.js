// Basic  Chat GPT integrated Functions

// Random number
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Load any JSON content
function LoadJsonContent(callback) {
  fetch('exercises.json')
    .then(response => response.json())
    .then(data => { callback(data) }).catch(error => console.error('Error loading JSON:', error));
}

// Selfmade functions to toggle page logic

// Play a sound
let soundPlaying = false;
function PlaySound(sound,timeout) {
  if (soundPlaying) return;
  sound.currentTime = 0;
  soundPlaying = true;
  setTimeout(() => soundPlaying = false, 1000);
  setTimeout(() => {sound.play()}, timeout);
}
const OchNe = new Audio("https://cdn.pixabay.com/download/audio/2025/01/19/audio_af5c830f07.mp3?filename=button-click-289742.mp3");

// Event listeners for buttons
document.getElementById("StartButton").addEventListener("click", () => {PlaySound(OchNe)});

// Global variables
const ExerciseBox = document.getElementById("exercise_box");
const Sidebar = document.querySelector(".sidebar");
const QuestionBox = document.getElementById("E_Questions");
const ResultBox = document.getElementById("Result_Box");
const Result_Number = document.getElementById("result");
const ResultCover = document.getElementById("result_cover");
const Body = document.body;
let VissibleResult = false;
let correct = 0;
let exerciseNumber = null;

// Open or close the exercise box
const ExerciseBoxVisible = (open) => { ExerciseBox.classList.toggle("hiddenContent", !open) };

// Exercise eventListener (for Exercise 1-4)

Sidebar.querySelectorAll("li").forEach((L, index) => {
  L.addEventListener("click", () => {
    exerciseNumber = index + 1;
    startExercise(exerciseNumber)
  });
});

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
  correct = 0;
  VissibleResult ? ResultVissible(false, null) : null;
  LoadJsonContent(data => {
    const questions = data[`E_${exerciseNumber}`];
    QuestionBox.innerHTML = "";
    questions.forEach((q, i) => {
      const div = document.createElement("div");
      div.className = "question-block transition";
      div.innerHTML = `
        <h4 class="question"><span class="question-text">${q.question}</span></h4>
        ${q.answers.map((a, idx) => `
          <label>
            <input type="radio" name="q${i + 1}" value="${a.text}" />
            <span class="answer-text">${a.text}</span>
          </label>
        `).join("")}
      `;
      QuestionBox.appendChild(div);
    });
    document.getElementById("instructions").innerText = data.instructions;
    ExerciseBoxVisible(true);
  });
}

// Controll question movement
let Quest_C = 1;
let first_question = true;
let currentLeft = -25;

function NextQuestion(direction) {
  const ButtonText = document.getElementById("B_next").querySelector("p");

  if (direction === 'next' && !first_question) {
    currentLeft -= 100;
    Quest_C++;
    QuestionBox.style.left = `${currentLeft}%`;
    Quest_C === 5 ? document.getElementById("NextButton").querySelector("p").textContent = "Controll" : null;
    Quest_C > 5 ? checkAnswers(exerciseNumber) : null;
  } else if (direction === 'back' && Quest_C != 1) {
    Quest_C--;
    currentLeft += 100;
    QuestionBox.style.left = `${currentLeft}%`;
  }
  if (first_question) {
    ButtonText.innerHTML = "Next Question";
    ExerciseBox.style.height = "400px";
    QuestionBox.classList.toggle("hiddenContent");
    first_question = false;
  }
}


//Chat GPT integration to check answers
function checkAnswers(exerciseNumber) {
  // Reset
  Quest_C = 1;
  first_question = true;
  currentLeft = -25;
  QuestionBox.style.left = "-25%";
  QuestionBox.classList.toggle("hiddenContent");
  // Reset end
  ExerciseBoxVisible(false);
  LoadJsonContent(data => {
    const questions = data[`E_${exerciseNumber}`];
    const questionDivs = QuestionBox.querySelectorAll("div");

    questionDivs.forEach((questionDiv, qIndex) => {
      const selected = questionDiv.querySelector("input[type='radio']:checked");
      if (!selected) return;
      const answerText = selected.value;
      const answerObj = questions[qIndex].answers.find(a => a.text === answerText);
      if (answerObj && answerObj.right) correct++;
    });

    document.getElementById("instructions").innerText = data.instructions;
    setTimeout(() => { ResultVissible(true, correct); }, 1250);
  });
}

// Manage result box vissibillity
function ResultVissible(input, correct) {
  if (input) {
    VissibleResult = true;
    Body.style.backgroundImage = "linear-gradient(90deg, rgba(0, 0, 0, 0.48) 0%, rgba(80, 59, 80, 0.48) 50%)";
    ResultBox.classList.toggle("hiddenContent");
    Result_Number.textContent = `${correct}/5`;
    Result_Number.classList.toggle("hiddenContent");
    ResultCover.style.width = `${100 - (correct * 20)}%`;
    LoadJsonContent(data => { document.getElementById("message").textContent = data.messages[correct].text });
  }

  if (!input) {
    VissibleResult = false;
    Body.style.backgroundImage = "none";
    ResultBox.classList.toggle("hiddenContent");
    Result_Number.classList.toggle("hiddenContent");
    ResultCover.style.width = `100%`;
    QuestionBox.style.left = "-25%";
  }
}