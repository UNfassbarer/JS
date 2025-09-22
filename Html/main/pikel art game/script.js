// Utility functions
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Universal event handler function
const handleEvent = (element, action, event, callback) => {element[`${action}EventListener`](event, callback)};

// Menu button actions
const menu_actions = {
  NewGame: (el) => { console.log(el.id) },
  LoadGame: (el) => { console.log(el.id) },
  SaveGame: (el) => { console.log(el.id) },
  Settings: (el) => { console.log(el.id) },
  Exit: (el) => { console.log(el.id), CloseMenu() }
}

// Button actions & Particle creation
let counter = 0;
function ButtonClick(el) { //Every Click creates particles
  counter === 0 ? menu_actions[el.id](el) : null; // Call button action only once
  counter < 30 ? LoadAnimation(el) : counter = 0; // Limit particle count & Load Animation
}

// Manage Particle Animation on button click
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

// Menu
const symbols = document.getElementById("Menu_Loading_Animation");
handleEvent(Menu, "add", "mouseenter", OpenMenu)

// Resize animation for spining circles
function resizeMenuAnimation(modifier, border) {
  symbols.querySelectorAll("canvas").forEach(canvas => {
    canvas.style.cssText = `
        height: ${canvas.offsetHeight + modifier}px;
        width: ${canvas.offsetWidth + modifier}px;
        border-top: ${border}px solid hsl(${Math.random() * 90 + 180}, 70%, 60%);`;
    modifier += modifier;
  });
}

// Toggle hidden menu content
const ToggleHiddenMenu = ()  => Menu.querySelectorAll("div").forEach(div => {div.classList.toggle("hiddenContent")});

// Open and close menu
let MenuOpen = false;
let clos_menu = "90px"
const Menu = document.getElementById("Menu_Container");

// Open Menu
function OpenMenu() {
  if (!MenuOpen) {
    Menu.style.cssText = "height: 500px; width: 300px;";
    resizeMenuAnimation(4, 4);
    ToggleHiddenMenu();
    symbols.style.animation = "resize 20s infinite";
    MenuOpen = true;
  }
}
// Close menu on exit click
function CloseMenu() {
  handleEvent(Menu, "remove", "mouseenter", OpenMenu)
  setTimeout(() => { handleEvent(Menu, "add", "mouseenter", OpenMenu) }, 1500);
  setTimeout(() => {
    Menu.style.cssText = `height: ${clos_menu}; width: ${clos_menu};`;
    ToggleHiddenMenu();
    resizeMenuAnimation(-50, 2);
  }, 500);
  symbols.style.animation = "shrink 0.75s forwards";
  MenuOpen = false;
}