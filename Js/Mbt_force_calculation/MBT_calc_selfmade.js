let kraft_anzahl = prompt("Bitte Anzahl der wirkenden Kräfte eingeben");
let kraft = prompt("Bitte jede kraft, mit `,` getrennt eingaben").split(",").map(Number);
let kraft_winkel = prompt("Bitte Winkel der einzelnen kräfte, durch `,` getrennt eingeben").split(",").map(Number);
let kraft_zähler = 0;
let F_x,F_y,x_ges = 0,y_ges = 0;
while(kraft_zähler < kraft_anzahl){
kraft_zähler++
document.write(`<h3>Teil-Kraft: ${kraft_zähler} </h3>`)
let sin_a = SIN_A();
let cos_a = COS_A();
document.write(` Sinus von ${kraft_winkel[kraft_zähler -1]}°: ${sin_a} <br>`)
document.write(` Cosinus von ${kraft_winkel[kraft_zähler -1]}°: ${cos_a} <br>`)
F_y = KRAFT_Y(sin_a);
F_x = KRAFT_X(cos_a);
document.write(` Kraft in Y_Richtung: ${F_y} <br>`)
document.write(` Kraft in X_Richtung: ${F_x} <br>`)
x_ges += F_x
y_ges += F_y
document.write(`<br>`)
}
document.write(`<h3>Gesammtkraft und Winkel:</h3>`)
document.write(`Gesammtkraft:<b> ${F_GES()} </b><br>`);
document.write(`Winkel der Gesammtkraft:<b> ${F_ALPHA()}° </b>`);
function SIN_A() {
     return Math.round(Math.sin(kraft_winkel[kraft_zähler - 1] * (Math.PI / 180)) * 1000) / 1000
 }
function COS_A() {
     return Math.round(Math.cos(kraft_winkel[kraft_zähler -1] * (Math.PI / 180))*1000)/1000
}
function KRAFT_Y(sin_a) {
    return Math.round(sin_a*kraft[kraft_zähler -1]*1000)/1000
}
function KRAFT_X(cos_a) {
     return Math.round(cos_a*kraft[kraft_zähler -1]*1000)/1000
}
function F_GES() {
     return Math.round(Math.sqrt(Math.pow(x_ges, 2)+ Math.pow(y_ges, 2))*1000)/1000
}
function F_ALPHA() {
     return Math.round(Math.atan2(y_ges,x_ges) * (180 / Math.PI)*1000)/1000
}  