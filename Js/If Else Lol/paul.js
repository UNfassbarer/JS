let p = prompt("Bitte Notenpunkte eingeben:"),m;
if (p <=0){
} else if(p>= 1 && p<= 3){
  m = "mangelhaft"
} else if(p>= 4 && p<=6){
  m = "ausreichend"
} else if(p>=7 && p <=9){
  m = "befriedigend"
} else if(p>=10 && p<=12){
  m = "gut"
} else if(p>= 13 && p <=15){
  m = "sehr gut"
} else if(p>15){
  m = "falsche eingebe!"
}
alert(m + " du hast " + p + " Notenpunkte ereichgt");