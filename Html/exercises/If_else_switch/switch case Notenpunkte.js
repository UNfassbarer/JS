var input = prompt("Bitte Note eingeben:\n             (1-15)");
switch (true){
    case (input <= 15 && input >=13):
        console.log("Sehr gut");
        alert("Sehr gut");
        break;
    case (input <= 13 && input >=10):
        console.log("Gut");
        alert("Gut");
        break;
    case (input <= 10 && input >=7):
       console.log("Ausreichend");
        alert("Ausreichend");
        break;
    case (input <= 7 && input >=5):
        console.log("unzureichend");
        alert("unzureichend");
        break;
    case (input <= 5 && input >=0):
         console.log("mangelhaft!");
         alert("mangelhaft!");
         break;
    default:
        console.log(input + "ist kein güliger notenwert!");
        alert(input + "ist kein güliger notenwert!");
        break;
};
console.log(" 1.Progrmmende");
alert("1.Programmende");

switch (true){
    case (input >= 15):
        console.log("Sehr gut");
        alert("Sehr gut");
        break;
     case (input >= 13):
        console.log("Gut");
        alert("Gut");
        break;
     case (input >= 10):
       console.log("Ausreichend");
        alert("Ausreichend");
        break;
     case (input >= 7):
        console.log("unzureichend");
        alert("unzureichend");
        break;
     case (input >= 4):
         console.log("mangelhaft!");
         alert("mangelhaft!");
         break;
     case (input >= 1):
         console.log("mangelhaft!");
         alert("mangelhaft!");
         break;
    default:
        console.log(input + "ist kein güliger notenwert!");
        alert(input + "ist kein güliger notenwert!");
        break;
};
console.log("2.Progrmmende");
alert("2.Programmende");