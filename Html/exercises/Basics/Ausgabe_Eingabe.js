'use strict';

let a = prompt("Bitte die erste Zahl eingeben :)");
let b = prompt("Bitte die zweite Zahl eingeben :)";

a = Number(a);
b = Number(b);

document.write("Die Wurzel aus " + a + " ist: " + (Math.sqrt(a)).toFixed(4) + "<br>");

document.write(a + " hoch " + b + " ist: " + (Math.pow(a, b)).toFixed(4) + "<br>");

document.write("Der Wert von PI auf 4 Nachkommastellen ist: " + (Math.PI).toFixed(4) + "<br>");

// Fixing the missing parenthesis and spacing in the "Rest von" line
document.write("Der Rest von " + a + " ist: " + (Math.pow(a, b)) + "<br>");

document.close();