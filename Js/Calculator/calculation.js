const input = () =>{
    prompt("Insert Numbers:\rFor example 1,+,1").toLocaleLowerCase().split(",").map(Number)
};
input();
const wrong_input = () => {
    alert("Wrong input...\rtry agari :)")
    input()
};
const right_input = () => {
    document.write("Right input")
};
isNaN(input[0]||input[2])||!isNaN(input[1]) ? wrong_input() : right_input();
const subtrahate = () =>{}
const summ = () =>{}
const devide = () =>{}
const factorize = () =>{}
const sqrt = ()=>{}
input[1]===("-")? subtrahate():false;
input[1]===("+")? summ():false;
input[1]===(":" || "/")? devide():false;
input[1]===("*")? factorize():false;