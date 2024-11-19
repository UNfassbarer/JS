let input = prompt("Bitte Notenwert eingeben");

if (input >= 0 && input <= 15 && input >= 10) {
  alert("Sehr gut du hast " + input + " Notenpunkte Von 15 Ereicht :)")
} else if (input <= 0) {
 alert(input + " ist nicht möglich !!!")
}
else {
 alert("Leider hast du nur " + input + " von 15 Notenpunkten ereicht")
}