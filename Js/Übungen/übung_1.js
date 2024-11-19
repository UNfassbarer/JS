//Berechnung von Flächen und Umfängen eines Rechteckes
//Eingabe Von Länge und Breite
//Ausgabe im Diagnosefenster

let a = prompt("Bitte Länge der Rechteckes eingeben");
let b = prompt("Bitte Breite der Rechteckes eingeben");

let länge_a = parseInt(a);
let länge_b = parseInt(b);

let fläche = länge_a * länge_b;
let umfang = länge_a *2 + länge_b*2;

alert("Die Fläche des Rechteckes bertägt:" + fläche);
alert("Der Umfang des Rechteckes bertägt:" + umfang);