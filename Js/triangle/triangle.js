function selfmade(){
let symbol = prompt("Please insert symbol for tree:")
let lines = prompt("Please insert size of the tree:\r[lines]")
let symbol_add = symbol+symbol, counter = 0
let space_anzahl= lines;
while (counter<lines) {
    space_anzahl--
    let space_counter = space_anzahl;
        while(space_counter>0) {
            space_counter--
            document.write("&nbsp;&nbsp;")
        }
    document.write(`${symbol}<br>`)
    symbol += symbol_add
    counter++
}}
function chat_gpt(){
    let symbol = prompt("Please insert symbol for tree:");
    let lines = parseInt(prompt("Please insert size of the tree:\r[lines]"));
    let counter = 0;
    let space_anzahl = lines - 1; // Start mit `lines - 1`, da die erste Zeile `lines - 1` Leerzeichen benötigt.
    
    while (counter < lines) {
        let row = ""; // Speichere die aktuelle Zeile.
        
        // Füge Leerzeichen hinzu.
        for (let i = 0; i < space_anzahl; i++) {
            row += " "; // Ein Leerzeichen pro Iteration.
        }
    
        // Füge die Symbole hinzu.
        for (let j = 0; j < 2 * counter + 1; j++) { // 1, 3, 5, ... Symbole
            row += symbol;
        }
    
        // Gehe zur nächsten Zeile.
        document.write(row + "<br>");
        
        counter++;
        space_anzahl--; // Reduziere die Leerzeichenanzahl.
}
}
prompt("selfmade(s) or ChatGpt(c)") ? selfmade():chat_gpt()