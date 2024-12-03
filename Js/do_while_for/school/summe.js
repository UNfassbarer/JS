const while_loop = () => {
var input = prompt("Please insert number!");
var sum = 0;
while (input >=0){
  sum += parseInt(input);
  console.log(" Die Summe ist: "+ sum);
  input = prompt("Please insert number!");
}
console.log(" Die Summe ist: "+ sum);
console.log("Programmende");
}
while_loop();