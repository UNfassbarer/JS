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
  particle.style.cssText = `width: ${size}px; height: ${size}px`;
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
    Menu.style.cssText = "height: 500px; width: 300px;";









    // resize menu animation
    let modifier = 50;
    const symbols = document.getElementById("Menu_Loading_Animation");
    symbols.querySelectorAll("canvas").forEach(canvas => {
      canvas.style.cssText = `
        height: ${canvas.offsetHeight + modifier}px;
        width: ${canvas.offsetWidth + modifier}px;
        border-top: 5px solid hsl(${Math.random() * 90 + 180}, 70%, 60%);`;
      modifier += 50;
    });






    ToggleHiddenMenu();
    MenuOpen = true;
  }
}
function CloseMenu() {
  setTimeout(() => {
    let closed = "90px"
    Menu.style.cssText = `height: ${closed}; width: ${closed};`;
    ToggleHiddenMenu();
  }, 200);
  // const symbols = document.getElementById("Menu_Loading_Animation");
  // symbols.style.animation = "shrink 0.75s forwards";
  MenuOpen = false;
}

function ToggleHiddenMenu() {
  Menu.querySelectorAll("div").forEach(div => {
    div.classList.toggle("hiddenContent")
  })
}