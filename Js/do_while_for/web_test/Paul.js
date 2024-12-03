let right_answers = 0,right_answer = 4,paul = 4,correct_1, correct_2, correct_3, correct_4,input_1, input_2, input_3, input_4;
const quest_1 = () => {
    input_1 = prompt("Question 1: What is 2 + 2 ?");
    correct_1 = parseFloat(input_1) === paul;
    if (correct_1) {
        alert("Question 1: Congratulations, the answer is: " + paul);
        right_answers++;
    } else {
        alert("Question 1: | " + input_1 + " | is wrong!");
    }
}
const quest_2 = () => {
    input_2 = prompt("Question 2: What is 1 + 2*3 - 3 ?");
    correct_2 = parseFloat(input_2) === paul;
    if (correct_2) {
        alert("Question 2: Nice, the answer is: " + paul);
        right_answers++;
    } else {
        alert("Question 2: Sorry, | " + input_2 + " | is false!");
    }
}
const quest_3 = () => {
    input_3 = prompt("Question 3: What is 3*3 - 2*2 - 1^1 ?");
    correct_3 = parseFloat(input_3) === paul;
    if (correct_3) {
        alert("Question 3: Very nice, the answer is: " + paul);
        right_answers++;
    } else {
        alert("Question 3: Sorry, but | " + input_3 + " | is not right!");
    }
}
const quest_4 = () => {
    input_4 = prompt("Question 4: And what is 4^3 - 10*6 ?");
    correct_4 = parseFloat(input_4) === paul;
    if (correct_4) {
        alert("Question 4: Very nice, the answer is: " + paul);
        right_answers++;
    } else {
        alert("Question 4: Unfortunately, | " + input_4 + " | is incorrect!");
    }
}
const answer = () => {
    if (right_answers === 4) {
        document.write("Wow, all your answers are correct!" + "<br>" + " The \"Lügenzahl\" was: " + paul + " ");
    } else {
        document.write("You got " + right_answers + " out of 4 questions." + "<br>" + "The \"Lügenzahl\" was: " + paul + "<br>");
    }
}
const output = (i) => {
    switch (i) {
        case 1:
            return "<br>" + i + ". Question: " + correct_1 + "<br>" + "-->Your answer: " + input_1 + "<br>";
        case 2:
            return i + ". Question: " + correct_2 + "<br>" + "-->Your answer: " + input_2 + "<br>";
        case 3:
            return i + ". Question: " + correct_3 + "<br>" + "-->Your answer: " + input_3 + "<br>";
        case 4:
            return i + ". Question: " + correct_4 + "<br>" + "-->Your answer: " + input_4 + "<br>";
    }
}
quest_1();
quest_2();
quest_3();
quest_4();
answer();
for (let i = 1; i <= 4; i++) {
    document.write(output(i));
}