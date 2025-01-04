let girlfrind = "kim";
let answer = "";
let quest = "";
let input = prompt("What is your name?");
const Right = () => {
quest = prompt("Do you love Jonas?")
const Yes = ()=>{
return answer="Jonas is loving you too"
}
const No = ()=>{
return answer="Nevermind, foget it..."
}
return (quest.toLocaleLowerCase()==="yes")? Yes() : No()
}
const Wrong = () => {
return answer = "Nevermind, foget it..."
}
document.write((girlfrind === input.toLocaleLowerCase()) ? Right() : Wrong());