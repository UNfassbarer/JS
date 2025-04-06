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
        div.classList.add('hidden');
    });
    document.getElementById(divId).classList.remove('hidden');
}
document.querySelectorAll('.submenu_special').forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        showContentDiv(`${event.target.id}` + "_content")
    });
});
let tention, force, area;

const claculate = (input) => {
    tention = parseFloat(document.getElementById("tention").value);
    force = parseFloat(document.getElementById("force").value);
    area = parseFloat(document.getElementById("area").value);
    switch (input) {
        case "tention":
            if (!isNaN(tention) && !isNaN(force)) {
                try {
                              document.getElementById("area").value = force / tention;
                } catch (error) {
                    console.log("division with 0 !!!")
                }
      
            } else if (!isNaN(tention) && !isNaN(area)) {
                document.getElementById("force").value = area * tention;
            } else if (isNaN(tention)) {
                console.log("error")
            }
            break;
        case "area":
            if (!isNaN(area) && !isNaN(tention)) {
                document.getElementById("force").value = area * tention
            } else if (!isNaN(area) && !isNaN(force)) {
                try {
                              document.getElementById("tention").value = force / area;
                } catch (error) {
                    console.log("division with 0 !!!")  
                }
      
            } else if (isNaN(area)) {
                console.log("error")
            }
            break;
        case "force":
            if (!isNaN(force) && !isNaN(tention)) {
                try {
                          document.getElementById("area").value = force / tention;
                } catch (error) {
                    console.log("division with 0 !!!")
                }
          
            } else if (!isNaN(force) && !isNaN(area)) {
                document.getElementById("tention").value = force * area;
            } else if (isNaN(force)) {
                console.log("error")
            }
            break;
    }
}
document.getElementById("tention").addEventListener("change", () => claculate("tention"));
document.getElementById("force").addEventListener("change", () => claculate("force"));
document.getElementById("area").addEventListener("change", () => claculate("area"));

document.getElementById("tention").addEventListener("input", () => claculate("tention"));
document.getElementById("force").addEventListener("input", () => claculate("force"));
document.getElementById("area").addEventListener("input", () => claculate("area"));