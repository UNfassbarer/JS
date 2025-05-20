// 1. Typumwandlungen
console.log("" + "");           // "" (Leerer String)
console.log({} + []);           // "0" ({} wird als Block interpretiert, [] als Zahl umgewandelt)
console.log([] + {});           // "[object Object]" ([] wird zu leerem String, {} wird zu "[object Object]")
console.log("5" - 3);           // 2 ("5" wird zu Zahl konvertiert, 5 - 3 = 2)
console.log(true + false);      // 1 (true = 1, false = 0; 1 + 0 = 1)

// 2. Lose Typisierung
let x = "5";
let y = 5;
console.log(x + y);             // "55" (String-Konkatenation, "5" + "5")

// 3. null und undefined
console.log(null == undefined); // true (lose Gleichheit, beide sind "leer" in losem Vergleich)
console.log(null === undefined);// false (strikte Gleichheit, verschiedene Typen)

// 4. Schlechte Designentscheidungen
console.log(typeof NaN);        // "number" (NaN wird als Zahl angesehen, obwohl es "Not-a-Number" bedeutet)
console.log(0.1 + 0.2 == 0.3);      // false --> 0.30000000000000004 (Gleitkomma-Ungenauigkeit)

// 5. Globals und das `this`-Keyword
function foo() {
  console.log(this);
}
foo();                          // Globales Objekt (z. B. `window` im Browser)

const obj = { method: foo };
obj.method();                   // `obj` (weil `method` durch das Objekt aufgerufen wird)

const arrow = () => console.log(this);
arrow();                        // Globales Objekt im Browser (bei Arrow-Funktionen bleibt `this` im äußeren Kontext)

// 6. var und Scope-Probleme
if (true) {
  var z = 10;
}
console.log(z);                 // 10 (var ignoriert Blockscope, `z` ist global innerhalb der Funktion)

// 7. Fehlender Standard für Module
// Vor ES6 musste man CommonJS oder AMD verwenden. Beispiel:
// const module = require('module'); // Kein Output, da nur ein Beispiel

// 8. Asynchronität
// Callback Hell
setTimeout(() => {
  console.log("First");         // "First" (nach 1 Sekunde)
  setTimeout(() => {
    console.log("Second");      // "Second" (nach 2 Sekunden)
    setTimeout(() => {
      console.log("Third");     // "Third" (nach 3 Sekunden)
    }, 1000);
  }, 1000);
}, 1000);

// Promises
new Promise((resolve) => {
  resolve("First");
})
  .then((res) => {
    console.log(res);           // "First"
    return "Second";
  })
  .then((res) => {
    console.log(res);           // "Second"
    return "Third";
  })
  .then((res) => console.log(res)) // "Third"
  .catch(console.error);        // Kein Fehler, daher keine Ausgabe im `catch`

// 9. Historische Ungereimtheiten
console.log(1 == "1");          // true (lose Gleichheit: `1` wird zu "1" umgewandelt)
console.log(1 === "1");         // false (strikte Gleichheit: Typen stimmen nicht überein)

console.log(typeof []);         // "object" ([] ist ein Objekt)
console.log([] instanceof Array); // true ([] ist eine Instanz von Array)

// 10. Performanzproblem
let sum = 0;
for (let i = 0; i < 1e7; i++) {
  sum += i;
}
console.log(sum);               // 49999995000000 (berechnete Summe von 0 bis 9999999; dauert spürbar länger als in C++)
