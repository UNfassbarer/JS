var input = prompt("Bitte Note eingeben:\n             (1-6)");
var awnser;
switch (input){
    case "1":
        console.log("Sehr gut");
        alert("Sehr gut");
        break;
    case "2":
        console.log("Gut");
        alert("Gut");
        break;
    case "3":
       console.log("Ausreichend");
        alert("Ausreichend");
        break;
    case "4":
       console.log("Befriedigend");
       alert("Befriedigend");
        break;
    case "5":
        console.log("unzureichend");
        alert("unzureichend");
        break;
    case "6":
        console.log("mangelhaft!");
         alert("mangelhaft!");
         break;
    default:
        console.log(input + "ist kein güliger notenwert!");
        alert(input + "ist kein güliger notenwert!");
        break;
};
console.log("Progrmmende");
alert("Programmende");
/*
Exception: [Exception... "Security Manager vetoed action"  nsresult: "0x80570027 (NS_ERROR_XPC_SECURITY_MANAGER_VETO)"  location: "JS frame :: Scratchpad/1 :: <TOP_LEVEL> :: line 33"  data: no]
*/