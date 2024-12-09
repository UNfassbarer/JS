const Kapital_js =() => {
var Eingabe = prompt("Programm starten?");
var Zähler = 0;
do {
var kapital = parseFloat(prompt("Bitte Kapital eingeben"));
var Zinssatz = prompt("Bitte Zinssatz eingeben");
var Endkapital = kapital*2;
var Laufzeit = 0;
Zähler++;
document.write(`${Zähler}. Durchgang <br>`)
do{
  Laufzeit++;
  kapital = parseFloat(kapital) + kapital*Zinssatz/100;
  document.write(`Kapital: ${kapital} (Jahr: ${Laufzeit}) <br>`);
}
while(kapital < Endkapital)
Eingabe = prompt("Wiederholen?");
}while(Eingabe == "Ja")
document.write(`Die Laufzeit beträgt: ${Laufzeit} <br>`)
document.write(`Das kapital beträgt: ${kapital} <br>`);
document.write(`Das Endkapital beträgt: ${Endkapital}`);
document.close();
}
Kapital_js()