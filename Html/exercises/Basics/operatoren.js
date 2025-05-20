'use strict';
let a = Number(prompt("Bitte die erste Zahl für a eingeben :)"));
let b = Number(prompt("Bitte die zweite Zahl für b eingeben :)"));
document.write("Die Wurzel aus " + a + " ist: " + (Math.sqrt(a)).toFixed(4) + "<br>");
document.write(a + " hoch " + b + " ist: " + (Math.pow(a, b)).toFixed(4) + "<br>");
document.write("Der Wert von PI auf 4 Nachkommastellen ist: " + (Math.PI).toFixed(4) + "<br>");
document.write("Der Rest von " + a + " und " + b + " ist: " + (a % b) + "<br>");
document.close();