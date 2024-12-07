const input = prompt("Please insert a value (e.g., 123456789)");
let arr = [];
const defined = parseInt(prompt("Please set the Value of interpretation (1,2,3...)"));
for (let i = 0; i < input.length; i += defined) {
    arr.push(input.slice(i, i + defined)); /*.slice extrahiert jeweils 1 Wert zwischen 
    2 festgelegten  Kriterien.
    (plaziert in  Schleife auomatisch "," nach jdem Wert.)
    defined === "2" -> 2er-Gruppen-/ === "3" ->3 er-Gruppen,...*/
}
let firstElement = arr[0];
let lastElement = arr[arr.length - 1];
document.write(`Array: ${arr} <br>`);
document.write(`Array length: ${arr.length} <br>`);
document.write(`First Element: ${firstElement} <br>`);
document.write(`Last Element: ${lastElement} <br>`);