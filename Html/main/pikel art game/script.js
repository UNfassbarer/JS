const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const menu_actions = {
  NewGame: (el) => { console.log(el.id) },
  LoadGame: (el) => { console.log(el.id) },
  SaveGame: (el) => { console.log(el.id) },
  Settings: (el) => { console.log(el.id) },
  Exit: (el) => { console.log(el.id) }
}
let counter = 0;
function ButtonClick(el) {
  counter === 0 ? menu_actions[el.id](el) : null;
  counter < 30 ? LoadAnimation(el) : counter = 0;
}

function LoadAnimation(el) {
  const particle = document.createElement('div');
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
  particle.style.left = `${el.offsetLeft + el.offsetWidth / 2 - size / 2 + getRandomInt(-el.offsetWidth / 2, el.offsetWidth / 2)}px`;
  particle.style.top = `${el.offsetTop + el.offsetHeight / 2 - size / 2 + getRandomInt(-el.offsetHeight / 2, el.offsetHeight / 2)}px`;
  particle.style.animation = `particle ${getRandomInt(0.75, 2)}s forwards`;
  particle.className = 'particle';
  document.body.appendChild(particle);
  setTimeout(() => { counter++, ButtonClick(el) }, 0);
  setTimeout(() => { particle.remove() }, 2000);
}

let MenuOpen = false;
const Menu = document.getElementById("Menu_Container");
Menu.addEventListener("mouseenter", OpenMenu)
function OpenMenu() {
  if (!MenuOpen) {
    Menu.style.height = "500px";
    Menu.style.width = "300px";
    ToggleHiddenMenu();
    MenuOpen = true;
  }
}
function CloseMenu() {
  Menu.style.height = "90px";
  Menu.style.width = "90px";
  ToggleHiddenMenu();
  MenuOpen = false;
}

function ToggleHiddenMenu() {
  Menu.querySelectorAll("div").forEach(div => {
    div.classList.toggle("hiddenContent")
  })
}
