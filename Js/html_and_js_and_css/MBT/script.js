// function changeContent(category, div, file) {
//     change_content_2(category)
//     $(`#${category}`).hover(() => loadContent(category, div, file)
//     );
// }
// function loadContent(category, div, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(data, 'text/html');
//             const inhalt = doc.getElementById(category);
//             document.getElementById(div).innerHTML = inhalt.innerHTML;
//         })
// }
// function change_content_2(category) {
//     document.getElementById(category).addEventListener("mouseover", function () {
//         document.getElementById("headline").innerHTML = (`${category}`).toUpperCase();
//     });
// }


// $('.submenu_special').each(function () {
//     changeContent(`${this.id}`, "main_content", "test_1.html")
// });

function showContentDiv(divId) {
    document.querySelectorAll('.content-container').forEach(div => {
        div.classList.add('hidden_content');
    });
    document.getElementById(divId).classList.remove('hidden_content');
}

document.querySelectorAll('.submenu_special').forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        showContentDiv(`${event.target.id}` + "_content")
    });
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
document.getElementById('test_calc').addEventListener('mouseenter', () => {
    console.log('Mouse entered (using mouseenter)');
});


const el1 = document.getElementById('test_calc');
const el2 = document.getElementById('calculator');

el1.addEventListener('mouseenter', () => {
    el2.style.display = 'block';
});

["tention", "force", "area"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => calculate(id));
    document.getElementById(id).addEventListener("change", () => calculate(id));
});