/* String in Array umwandeln:*/
const input = prompt("Please insert a value (e.g., 123456789)");
//a. String in Array + länge der unterteilung definiert !
let arr = [];
const defined = parseInt(prompt("Please set the Value of interpretation (1,2,3...)"));
for (let i = 0; i < input.length; i += defined) {
    arr.push(input.slice(i, i + defined)); /*  ".slice" extrahiert jeweils 1 Wert zwischen 2 festgelegten  Kriterien.(plaziert in  Schleife auomatisch "," nach jdem Wert.); "defined" === "2" -> 2er-Gruppen-/ === "3" ->3 er-Gruppen,...*/
}
document.write(`Array: ${arr} <br>`);
//b. String in Array + 
let array = [...input];
document.write(`Array: ${array}`);
console.log(`Array: ${array}`);