/*Erstellen Sie ein Programm zur Berechnung und Ausgabe des Kraftstoffverbrauches eines
KFZ in Liter/100 km mit 2 Kommastellen nach Eingabe der getankten Liter und gefahrenen Kilometer!
Nutzen Sie dazu die IF ELSE Struktur!

Das Programm soll im Anschluss eine Wertung des Ergebnisses nach folgendem Muster vornehmen:
	Verbrauch mehr als 12 Liter/100 km     --> "schlecht"
	Verbrauch ab 10 bis 12 Liter/100 km    --> "befriedigend"
  Verbrauch ab 7 bis weniger als 10 Liter/100 km --> "gut"
	Verbrauch  ab 4	bis weniger als 7 Liter/100 km	--> "sehr gut"
	Verbrauch weniger als 4	Liter/100 km	  --> "Hybrid?"

Zeichnen Sie zu diesem Programm vorher das Struktogramm für Ihre Lösung!
*/
const l = prompt("Bitte verbrauchte Liter eingeben");
const k = prompt("Bitte vernrauchte Kilometer eingeben");
const v = (l/k*100).toFixed(2);
let a
if (v > 12) {
    a = "schlecht";
} else if (v >= 10) {
    a = "befriedigend";
} else if (v >= 7) {
    a = "gut";
} else if (v >= 4) {
    a = "sehr gut";
} else {
    a = "Hybrid?";
}
document.write(a);
document.close();
switch(true){
        case (v>12):
          a = "schlecht";
    break;
        case (v>=10):
          a = "befriedigend";
    break;
        case (v>=7):
          a = "gut";
    break;
        case (v>4):
          a = "sehr gut";
    break;
        case (v<4):
          a = "Hybrid?";
    default:
        break;
}
document.write(a);
document.close();
function l_k (a) {
switch(true){
        case (v>12):
    return "schlecht"
        case (v>=10):
    return "befriedigend"
        case (v>=7):
    return "gut"
        case (v>4):
    return "sehr gut"
        case (v<4):
    return "Hybrid?"
    default:
    return "???"
    }
}
document.write(l_k(a));
document.close();