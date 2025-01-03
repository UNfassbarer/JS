const input_text = prompt("What to say?");
const input_number = prompt("How often?");
const quest = prompt("Console or Document?");
const desi = (quest == "Console") ? consol() : docu();
function docu(){
    let br = "";
    const quest = prompt("Breaks?");
    const desi = (quest == "Yes") ? br = "<br>" : false;
    let i = 0;
while(i < input_number){
    i++
    document.write(input_text + " " + br)
}
}
function consol(){
    let i = 0;
    while(i < input_number){
        i++
        console.log(input_text + " ")
    }
}