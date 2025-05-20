// Ausgangsarray
let arr = [1, 2, 3, 4];

// 1. Hinzufügen oder Entfernen von Elementen
arr.push(5); // [1, 2, 3, 4, 5] an letzter stelle hinzufügen
console.log("Push:", arr);

arr.pop(); // [1, 2, 3, 4] an letzter stelle entfernen
console.log("Pop:", arr);

arr.unshift(0); // [0, 1, 2, 3, 4] an erster stelle hinzufügen
console.log("Unshift:", arr);

arr.shift(); // [1, 2, 3, 4] an erster stelle entfernen
console.log("Shift:", arr);

arr.splice(2, 1, 99); // [1, 2, 99, 4] (Entfernt 1 Element an Index 2 und fügt 99 hinzu)
console.log("Splice:", arr);

// 2. Iterieren über Arrays
arr.forEach(num => console.log("ForEach:", num)); // Gibt jedes Element aus

let doubled = arr.map(num => num * 2); // [2, 4, 198, 8]
console.log("Map:", doubled);

// 3. Finden, Filtern und Testen
let evenNumbers = arr.filter(num => num % 2 === 0); // [2, 4]
console.log("Filter:", evenNumbers);

let firstLarge = arr.find(num => num > 3); // 99
console.log("Find:", firstLarge);

let firstLargeIndex = arr.findIndex(num => num > 3); // 2
console.log("FindIndex:", firstLargeIndex);

let hasOdd = arr.some(num => num % 2 !== 0); // true
console.log("Some:", hasOdd);

let allLessThan100 = arr.every(num => num < 100); // true
console.log("Every:", allLessThan100);

// 4. Kombinieren und Aufteilen
let newArray = arr.concat([6, 7]); // [1, 2, 99, 4, 6, 7]
console.log("Concat:", newArray);

let joinedString = arr.join("-"); // "1-2-99-4"
console.log("Join:", joinedString);

let slicedArray = arr.slice(1, 3); // [2, 99]
console.log("Slice:", slicedArray);

// 5. Sortieren und Reversieren
arr.sort((a, b) => b - a); // [99, 4, 2, 1] (Sortiert absteigend)
console.log("Sort:", arr);

arr.reverse(); // [1, 2, 4, 99] (Reihenfolge umkehren)
console.log("Reverse:", arr);

// 6. Reduzieren
let sum = arr.reduce((acc, num) => acc + num, 0); // 106
console.log("Reduce:", sum);

let reverseSum = arr.reduceRight((acc, num) => acc + num, 0); // 106
console.log("ReduceRight:", reverseSum);

// 7. Sonstige Methoden
let indexOfTwo = arr.indexOf(2); // 1
console.log("IndexOf:", indexOfTwo);

let lastIndexOfTwo = [1, 2, 3, 2].lastIndexOf(2); // 3
console.log("LastIndexOf:", lastIndexOfTwo);

let includesFour = arr.includes(4); // true
console.log("Includes:", includesFour);

let nestedArray = [1, [2, [3, 4]]];
let flatArray = nestedArray.flat(2); // [1, 2, 3, 4]
console.log("Flat:", flatArray);

let flatMapped = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 4, 8, 99, 198]
console.log("FlatMap:", flatMapped);
