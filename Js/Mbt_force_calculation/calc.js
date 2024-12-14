let kraft_anzahl = prompt("Bitte Anzahl der wirkenden Kräfte eingeben");
let kraft = prompt("Bitte jede kraft, mit `,` getrennt eingaben").split(",");
let kraft_winkel = prompt("Bitte Winkel der einzelnen kräfte, durch `,` getrennt eingeben").split(",");
let kraft_zähler = 0;
let sin_a,cos_a,F_x,F_y;

while(kraft_zähler < kraft_anzahl){
kraft_zähler++
document.write(" <br> Kraft: " + kraft_zähler + "<br>")
SIN_A()
COS_A()
KRAFT_Y()
KRAFT_X()
}
// document.write(Math.cos(kraft_winkel[0]) + "<br>");
// document.write(kraft_winkel + " = "+ typeof(kraft_winkel) +  "<br>");
// document.write(kraft_winkel.split(",") + " = " + typeof(kraft_winkel) +  "<br>");
// document.write(kraft_winkel[0]+ " " + kraft_winkel[1]+ " " + kraft_winkel[2]+ " " + kraft_winkel[3]+ " <br> ");
// document.write([...kraft_winkel] + " " + typeof([...kraft_winkel]));

function SIN_A() {
     sin_a = document.write("sin: " + Math.round(Math.sin(kraft_winkel[kraft_zähler -1] * (Math.PI / 180))*100)/100 + " Nr." + kraft_zähler + "<br>")
} 
function COS_A() {
     cos_a = document.write("cos: " + Math.round(Math.cos(kraft_winkel[kraft_zähler -1] * (Math.PI / 180))*100)/100 + " Nr." + kraft_zähler + "<br>")
}
function KRAFT_Y() {
    F_y = document.write("F_y: " + SIN_A()*kraft[kraft_zähler -1] + "<br>")
}
function KRAFT_X() {
F_x = document.write("F_x: " + COS_A()*kraft[kraft_zähler -1] + "<br>")
}

/*
document.write(Math.sin(30 * (Math.PI / 180)) + "<br>");
document.write(Math.sin(60 * (Math.PI / 180)) + "<br>");
document.write(Math.sin(90 * (Math.PI / 180)) + "<br>");
document.write(Math.sin(120 *(Math.PI / 180)) + "<br>");
*/