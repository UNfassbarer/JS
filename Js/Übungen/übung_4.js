//Eingabe von 2 Zahlen und die Anschließende Ausgabe
//Ausgabe der Summe in Konsole und auf html Seite
//Wurzel aus Zahl a
//Potenz aus Zahl a hoch b
//Ausgabe der Zahl Pi mit 4 Nachkommastellen

let a = prompt("Bitte erste Zahl eingeben :)");
let b = prompt("Bitte zweite Zahl eingeben :)");

console.log("Die erste Zahl lautet: " + a);
console.log("Die zweite Zahl lautet: " + b);
document.write("Die erste Zahl lautet: " + a + "<br>");
document.write("Die zweite Zahl lautet: " + b + "<br>");

//Wurzel aus a
let sqrtA = Math.sqrt(a);
console.log("Die Wurzel der ersten Zahl ist: " + sqrtA);
document.write("Die Wurzel der ersten Zahl ist: " + sqrtA + "<br>");

// Potenz von a hoch b
let power = Math.pow(a, b);
console.log("Die Zahl a hoch b ist: " + power);
document.write("Die Zahl a hoch b ist: " + power + "<br>");

//Pi mit 4 Nachkommastellen
let pi = Math.PI.toFixed(4);
console.log("Pi auf 4 Nachkommastellen: " + pi);
document.write("Pi auf 4 Nachkommastellen: " + pi + "<br>");
document.close;