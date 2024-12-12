let kraft_anzahl = prompt("Bitte Anzahl der wirkenden Kräfte eingeben");
let kraft_zähler = 0;
while(kraft_zähler < kraft_anzahl){
kraft_zähler++
document.write("Kraft: " + kraft_zähler + "<br>")
}
let kraft_eingabe = prompt("Bitte jede kraft, mit `,` getrennt eingaben");
let kraft_winkel_eingabe = prompt("Bitte Winkelder einzelnen kräfte, durch `,` getrennt eingeben");


document.write(Math.cos(kraft_winkel_eingabe[0]) + "<br>");
document.write(kraft_winkel_eingabe + " "+ typeof(kraft_winkel_eingabe) +  "<br>");
document.write(kraft_winkel_eingabe.split(",") + " " + typeof(kraft_winkel_eingabe.split(",")) +  "<br>");
document.write([...kraft_winkel_eingabe] + " " + typeof([...kraft_winkel_eingabe]));