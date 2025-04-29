const el1 = document.getElementById('show_calculator');
const el2 = document.getElementById('calculator');

el1.addEventListener('mouseenter', () => {
    el2.style.display = 'block';
});
function ClearAll() {
    el2.style.display = 'none';
    New_Pin ? Pin_note() : false;
    Clear_Calc();
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
const noteContent = document.querySelector('.note_content')
const h1 = document.querySelector('.h1')
const note_button = document.querySelector('.B_notes')

infoBox.addEventListener('mouseenter', () => {
    notes.style.top = '230px';
});
infoBox.addEventListener('mouseleave', () => {
    notes.style.top = '80px';
});

document.getElementById("right").addEventListener("mouseenter", () => {
    notes.style.right = "330px";
    infoBox.style.right = "330px";
});

document.getElementById("right").addEventListener("mouseleave", () => {
    notes.style.right = "120px";
    infoBox.style.right = "120px";
});

noteContent.addEventListener('input', () => { AutoResize() })

function AutoResize() {
    if (noteContent.scrollHeight >= 60) {
        notes.style.height = noteContent.scrollHeight + 100 + "px";
    }
}

let zoom_after_note = false;
let New_Pin = false;

notes.addEventListener("mouseenter", () => {
    New_Pin = true;
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
    New_Pin = false;
    pinCounter++
    PinLogic(pinCounter)
    zoom_after_note = true;
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
    newDiv.className = 'submenu_special_right Pin_div';
    newDiv.innerHTML = `<a href="#">Pin ${Pins}</a> <button class="Pin_Buttons" id="Button_Pin_${Pins}">C</button>`;
    document.getElementById('add_pins').appendChild(newDiv);
    const newContentDiv = document.createElement('div');
    newContentDiv.id = 'Pin_Content_' + Pins;
    newContentDiv.style.display = "none";
    newContentDiv.innerHTML = document.getElementById("Note_Content").innerHTML;
    newDiv.appendChild(newContentDiv);
    newDiv.addEventListener("mouseover", () => {
        document.getElementById("Note_Content").innerHTML = newContentDiv.innerHTML;
        notes.dispatchEvent(new Event("mouseenter"));
        AutoResize();
    });
    document.getElementById("Note_Content").innerHTML = "type something here...";
}
function Clear_Calc() {
    document.getElementById("tention").value = ""
    document.getElementById("area").value = ""
    document.getElementById("force").value = ""
}

function Reset() {
    pinCounter = 0;
}
function Clear() {
    Reset();
    document.getElementById("add_pins").innerHTML = "";
}

function Clear_Reset_Hover(input, B_id) {
    const Button = document.getElementById(`${B_id.id}`);
    Button.classList.add("clicked");
    setTimeout(() => {
        Button.classList.remove("clicked");
        input();
    }, 333);
}

document.getElementById('add_pins').addEventListener('click', event => {
    if (event.target.classList.contains('Pin_Buttons')) {
        event.target.parentElement.remove();
    }
});

function showCalculator() {
    document.querySelectorAll('.TentionCalc').forEach(div => {
        div.classList.add('hidden_calc');
    });
    document.getElementById("calculator").classList.remove('hidden_calc');
}

["tention", "force", "area"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => calculate(id));
    document.getElementById(id).addEventListener("change", () => calculate(id));
});

// document.querySelectorAll(".Calculation_Menu").forEach(menuItem => {
//     menuItem.addEventListener("mouseenter", () => {
//       document.querySelectorAll(".Calculations").forEach(item => {
//         item.style.display = "block";
//       });
//     });
//   });

function calculate(id) {
    const ids = ["tention", "force", "area"];

    let Tention = parseFloat(document.getElementById("tention").value);
    let force = parseFloat(document.getElementById("force").value);
    let area = parseFloat(document.getElementById("area").value);

    const Calc_Tention = () => { document.getElementById("tention").value = force / area; }
    const Calc_Force = () => { document.getElementById("force").value = area * Tention; }
    const Calc_Area = () => { document.getElementById("area").value = force / Tention; }

    const IsEmpty = (id)=>{ document.getElementById(id).innerHTML === ""}

    switch (true) {
        case id === ids[0]: // Spannung
        isNaN(Tention) && !IsEmpty(id) ? console.log("fehler!"):false
            !isNaN(area) ? Calc_Force() : Calc_Area();
            break;
        case id === ids[1]: // Kraft
        isNaN(force) && !IsEmpty(id) ? console.log("fehler!"):false
            !isNaN(area) ? Calc_Tention() : Calc_Area();
            break;
        case id === ids[2]: // Fläche
        isNaN(area) && !IsEmpty(id) ? console.log("fehler!"):false
            !isNaN(Tention) ? Calc_Force() : Calc_Tention();
            break;
    }
}

["tantion", "force", "area"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => Berechnung(id));
    document.getElementById(id).addEventListener("change", () => Berechnung(id));
});