const one_to_n = () => {
let input = prompt("Please insert value of n"), sum = 1;
while (sum <= input ){
document.write(sum + " ");
sum++;
}
let sum_new = sum - input;
while (sum_new <= input ){
document.write( "<br>" + sum_new + "<br>")
sum_new++;
}
document.close();
}
one_to_n();
