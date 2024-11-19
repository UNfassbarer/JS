/*Informieren Sie sich im Internet über die Berechnung des 
Body-Mass-Index BMI (in 4 Stufen) und 
erstellen Sie dafür ein JavaScript-Programm mit der Switch-Anweisung!
Der BMI soll mit einer Kommastelle ausgegeben werden.

Zeichnen dazu vorher das Struktogramm! */

const k = prompt("Bitte Körpergewicht in Kg eingeben!");
const m = prompt("Bitte Körpergröße in m eingeben!");
const a = (k/(m*m)).toFixed(1);
var b
function k_m (b) {
switch (true){
  case (a <18.5):
 return "Unteregewicht!";
  case (a <=25):
 return "Normalgewicht!";
  case (a >=30):
 return "Übergewicht!";
  default:
 return "Adipös!!";
    }
}
document.write("Dein BMI ist: " + a + " und entspricht: " + k_m(b));
document.close();