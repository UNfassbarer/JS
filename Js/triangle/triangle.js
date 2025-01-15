function triangle(){ // only works on Windows->no support from JS
    function getInputLength(input){
        const parts = Array.from(input.matchAll(/[\p{Emoji}\u200D\uFE0F]|./gu));
        return parts.length;
    }
let symbol = prompt("Please insert symbol for tree:")
let lines = prompt("Please insert size of the tree:\r[lines]")
let symbol_add = symbol+symbol,counter = 0
let space_anzahl= lines
let space = getInputLength(symbol)
    function writeSpace(space){
    let final_space = ""
    while (space>0){
        space--
        final_space += "&nbsp;&nbsp;"
    }
    return final_space
    }
while (counter<lines){
    space_anzahl--
    let space_counter = space_anzahl;
        while(space_counter>0){
            space_counter--
            document.write(writeSpace(space))
        }
    document.write(`${symbol}<br>`)
    symbol += symbol_add
    counter++
    }
}
confirm("Start Programm?")? triangle():document.write("Okay :)")