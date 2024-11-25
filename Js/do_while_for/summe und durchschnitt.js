// const while_loop = () => {}
var numbers = 0, sum = 0, durchschnitt;
var input = parseInt(prompt("Please insert number!"));

while (input >=0){
  console.log("Deine Eingabe: "+ input);
  sum += input;
  console.log(" Die Summe ist: "+ sum);
  numbers++;
  durchschnitt = sum/numbers;
  console.log(" Der Durchschnitt ist: "+ durchschnitt);
  input = paresInt(prompt("Please insert number!"));
}
console.log(" Die Summe ist: "+ sum);
console.log("Programmende");
console.log(" Der finale Durchschnitt ist: "+ durchschnitt);