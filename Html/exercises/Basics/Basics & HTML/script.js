let zahl_a = prompt("Bitte erste Zahl eingeben");
let zahl_b = prompt("Bitte zweite Zahl eingeben");

// Anzeigen der eingegebenen Zahlen
alert("Die erste Zahl lautet: " + zahl_a);
alert("Die zweite Zahl lautet: " + zahl_b);

// Umwandeln der Eingaben in Ganzzahlen
let numA = parseInt(zahl_a);
let numB = parseInt(zahl_b);

// Berechnungen
let sum = numA + numB;
let sub = numA - numB;
let mult = numA * numB;
let div = numA / numB; // Keine Überprüfung auf Division durch Null

// Anzeigen der Ergebnisse
alert("Die Summe der Zahlen ist: " + sum);
alert("Die Differenz der Zahlen ist: " + sub);
alert("Das Produkt der Zahlen ist: " + mult);
alert("Der Quotient der Zahlen ist: " + div);

// Ausgabe auf die Webseite
document.write("Die Summe der Zahlen ist: " + sum + "<br>");
document.write("Die Differenz der Zahlen ist: " + sub + "<br>");
document.write("Das Produkt der Zahlen ist: " + mult + "<br>");
document.write("Der Quotient der Zahlen ist: " + div + "<br>");
