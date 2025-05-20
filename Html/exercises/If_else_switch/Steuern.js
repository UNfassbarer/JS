let x = prompt("Please insert Value");
let value = parseInt(x);
let steuer;
if (value <= 50000) 
  steuer = 1; 
else if (value > 50000 && value <= 100000)
  steuer = 1.15;
 else if (value > 100000 && value <= 150000)
  steuer = 1.2;
 else if (value > 150000)
  steuer = 1.45;
alert("Your value is:\n" + (value * steuer).toFixed(2) + " coins");
document.write("Your value is: " + (value * steuer).toFixed(2) + " coins");
document.close();