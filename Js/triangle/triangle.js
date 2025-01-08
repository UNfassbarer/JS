// let zeilenan_zahl = 6;
// let zeilen_zähler = 1;
// while (zeilen_zähler<=zeilenan_zahl) {
// document.write(`Zeile: ${zeilen_zähler}<br>`)
// zeilen_zähler++
// }
let symbol = prompt("Please insert symbol for tree:")
let lines = prompt("Please insert size of the tree:\r[lines]")
let zeichen = "*";
let zeichen_zähler = 0;
let space = "&nbsp;&nbsp;";
let space_anzahl= lines;
while (zeichen_zähler<lines) {
    space_anzahl--
    let space_zähler = space_anzahl;
        while(space_zähler>0) {
            space_zähler--
            document.write(space)
        }
    document.write(`${symbol}<br>`)
    symbol += symbol+symbol
    zeichen_zähler++
}