const el1 = document.getElementById('show_calculator');
const el2 = document.getElementById('calculator');

el1.addEventListener('mouseenter', () => {
    el2.style.display = 'block';
});
function ClearAll() {
    el2.style.display = 'none';
    Pin_note()
    document.querySelectorAll('.content-container').forEach(div => {
        div.classList.add('hidden_content');
    });
}

function showContentDiv(divId) {
    document.querySelectorAll('.content-container').forEach(div => {
        div.classList.add('hidden_content');
    });
    document.getElementById(divId).classList.remove('hidden_content');
}

document.querySelectorAll('.submenu_special_left').forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        showContentDiv(`${event.target.id}` + "_content")
    });
});

const infoBox = document.querySelector('.info-box');
const notes = document.querySelector('.note-box');
const noteContent = document.querySelector('.note-content')
const h1 = document.querySelector('.h1')
const note_button = document.querySelector('.B_notes')

infoBox.addEventListener('mouseenter', () => {
    notes.style.top = '230px';
});
infoBox.addEventListener('mouseleave', () => {
    notes.style.top = '80px';
});

noteContent.addEventListener('input', () => { AutoResize() })

function AutoResize() {
    if (noteContent.scrollHeight >= 60) {
    notes.style.height = noteContent.scrollHeight + 100 + "px";
    }
}

let zoom_after_note = false;

notes.addEventListener("mouseenter", () => {
    if (noteContent.scrollHeight < 60) {
        notes.style.width = "150px";
        notes.style.height = "150px";
    }
    if (zoom_after_note === true) {
        notes.style.width = "150px";
        notes.style.height = noteContent.scrollHeight + 100 + "px";
        zoom_after_note = 0;
    }
    noteContent.style.opacity = "1";
    h1.style.opacity = "0";
    h1.style.transition = "opacity 0.1s ease-in";
    note_button.style.opacity = "1";
});
let pinCounter = 0;
function Pin_note() {
    pinCounter++
    PinLogic(pinCounter)
    zoom_after_note = true;
    // notes.style.width = "150px";
    // notes.style.height = "150px";
    document.getElementById("loding_circle").classList.add("clicked");
    document.getElementById("noteButton").classList.add("clicked");
    setTimeout(() => {
        notes.style.width = "30px";
        notes.style.height = "30px";
        noteContent.style.opacity = "0";
        h1.style.opacity = "1";
        note_button.style.opacity = "0";
        document.getElementById("noteButton").classList.remove("clicked");
        document.getElementById("loding_circle").classList.remove("clicked");
    }, 750);
}
function PinLogic(Pins) {
    const newDiv = document.createElement('div');
    newDiv.id = 'Pin_' + Pins;
    newDiv.className = 'submenu_special_right';
    newDiv.innerHTML = `<a href="#">Pin ${Pins}</a> <button class="Pin_Buttons" id="Button_Pin_${Pins}">C</button>`;
    document.getElementById('add_pins').appendChild(newDiv);
  }
  function Reset_Pin_Counter(){



  }
  
  document.getElementById('add_pins').addEventListener('click', event => {
    if (event.target.classList.contains('Pin_Buttons')) {
        event.target.parentElement.remove();
    }
  });

let tention, force, area;
const calculate = (input) => {
    tention = parseFloat(document.getElementById("tention").value);
    force = parseFloat(document.getElementById("force").value);
    area = parseFloat(document.getElementById("area").value);
    function error() { console.log("Error: Wrong input or empty input") }
    function is_tention_area() { return !isNaN(tention) && !isNaN(area) }
    function is_tention_force() { return !isNaN(tention) && !isNaN(force) }
    function is_area_force() { return !isNaN(force) && !isNaN(area) }
    switch (input) {
        case "tention":
            if (is_tention_area()) {
                document.getElementById("area").value = force / tention;
            } else if (is_tention_force()) {
                document.getElementById("force").value = area * tention;
            } else if (isNaN(tention)) { error() }
            else { console.log("else...") }
            break;
        case "area":
            if (is_tention_area()) {
                document.getElementById("force").value = area * tention
            } else if (is_area_force()) {
                document.getElementById("tention").value = force / area;
            } else if (isNaN(area)) { error() }
            break;
        case "force":
            if (is_tention_force()) {
                document.getElementById("area").value = force / tention;
            } else if (is_area_force()) {
                document.getElementById("tention").value = force * area;
            } else if (isNaN(force)) { error() }
            break;
    }
}

function showCalculator() {
    console.log("test");
    document.querySelectorAll('.TentionCalc').forEach(div => {
        div.classList.add('hidden_calc');
    });
    document.getElementById("calculator").classList.remove('hidden_calc');
}

["tention", "force", "area"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => calculate(id));
    document.getElementById(id).addEventListener("change", () => calculate(id));
});