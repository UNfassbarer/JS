function calculateLoop(){
var numbers = 0, sum = 0, durchschnitt;
var input = prompt("Please insert number!");
while (input >=0){
  sum += parseInt(input);
  console.log(" Die Summe ist: "+ sum);
  numbers++;
  durchschnitt = sum/numbers;
  console.log(" Der Durchschnitt ist: "+ durchschnitt);
  input = prompt("Please insert number!");
}
console.log("Die Summe ist: "+ sum);
console.log("Programmende");
console.log("Der finale Durchschnitt ist: "+ durchschnitt);
}

var quest = prompt("Start programm ? (Yes/No)");
while (quest == "Yes"){
calculateLoop();
quest = prompt("pressed ? (Yes/No)");
}