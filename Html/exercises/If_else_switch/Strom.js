'use strict'

let eingabe = prompt("Bitte Abgelesenen Verbrauch eingeben (Kwh): ");
let single_family = prompt("Bitte Tarief eingeben: (1 für Single oder 2 für Family)");

function Endtarif() {

if (single_family == 1){
  alert("Der Endpreis Beträgt:" + 8.19+ (eingabe*44.33)/100 + "€")}
else if (single_family == 2) {
     alert("Der Endpreis Beträgt:" + 13.70 + (eingabe*37.50)/100 + "€")}
  else {
    prompt("Das eingegebene Tarif ist nicht Gültig !")
  };
};
Endtarif();