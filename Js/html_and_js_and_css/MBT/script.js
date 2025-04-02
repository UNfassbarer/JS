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
        showContentDiv(`${event.target.id}`+"_content")
    });
});
