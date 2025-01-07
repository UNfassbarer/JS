// Hauptcontainer erstellen
const container = document.createElement("div");
container.style.padding = "20px";
container.style.fontFamily = "Arial, sans-serif";
container.style.backgroundColor = "whitesmoke";
container.style.textAlign = "center";
document.body.appendChild(container);

// 1. Überschrift
const heading = document.createElement("h1");
heading.textContent = "Interaktive JavaScript-Demo";
heading.style.color = "darkblue";
container.appendChild(heading);

// 2. Dynamisch Textfarbe und Hintergrundfarbe ändern
const colorChanger = document.createElement("div");
colorChanger.style.margin = "20px 0";

// Farbe ändern
const textElement = document.createElement("p");
textElement.textContent = "Klicke, um meine Farben zu ändern!";
textElement.style.padding = "15px";
textElement.style.backgroundColor = "lightgray";
textElement.style.color = "black";
textElement.style.borderRadius = "8px";
textElement.style.cursor = "pointer";
colorChanger.appendChild(textElement);

textElement.addEventListener("click", () => {
  textElement.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  textElement.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

container.appendChild(colorChanger);

// 3. Eingabe zum Ändern von Farben
const inputSection = document.createElement("div");
inputSection.style.margin = "20px 0";

const inputLabel = document.createElement("label");
inputLabel.textContent = "Gib eine Farbe ein: ";
inputLabel.style.fontWeight = "bold";
inputSection.appendChild(inputLabel);

const colorInput = document.createElement("input");
colorInput.type = "text";
colorInput.placeholder = "z.B. red, #ff0000, rgb(255,0,0)";
colorInput.style.margin = "0 10px";
colorInput.style.padding = "5px";
inputSection.appendChild(colorInput);

const inputBox = document.createElement("div");
inputBox.textContent = "Ich ändere meine Farbe!";
inputBox.style.backgroundColor = "gray";
inputBox.style.color = "white";
inputBox.style.padding = "15px";
inputBox.style.borderRadius = "8px";
inputBox.style.marginTop = "10px";
inputSection.appendChild(inputBox);

colorInput.addEventListener("input", () => {
  inputBox.style.backgroundColor = colorInput.value;
});

container.appendChild(inputSection);

// 4. Animierte Farben
const animationSection = document.createElement("div");
animationSection.style.margin = "20px 0";

const animatedDiv = document.createElement("div");
animatedDiv.textContent = "Ich habe einen Farbverlauf!";
animatedDiv.style.padding = "15px";
animatedDiv.style.color = "white";
animatedDiv.style.fontSize = "16px";
animatedDiv.style.margin = "10px auto";
animatedDiv.style.borderRadius = "8px";
animatedDiv.style.width = "50%";
animatedDiv.style.backgroundColor = "hsl(0, 100%, 50%)";
animationSection.appendChild(animatedDiv);

let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  animatedDiv.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}, 50);

container.appendChild(animationSection);

// 5. Button für Interaktivität
const buttonSection = document.createElement("div");
buttonSection.style.margin = "20px 0";

const button = document.createElement("button");
button.textContent = "Farbe ändern!";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.backgroundColor = "dodgerblue";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";

const buttonBox = document.createElement("div");
buttonBox.textContent = "Ich ändere meine Farbe, wenn du klickst!";
buttonBox.style.padding = "15px";
buttonBox.style.backgroundColor = "lightcoral";
buttonBox.style.color = "white";
buttonBox.style.borderRadius = "8px";
buttonBox.style.marginTop = "10px";

button.addEventListener("click", () => {
  buttonBox.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  buttonBox.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

buttonSection.appendChild(button);
buttonSection.appendChild(buttonBox);

container.appendChild(buttonSection);