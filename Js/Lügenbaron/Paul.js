let paul = 4;
let right_awnsers = 0;
let correct_1,correct_2,correct_3,correct_4;
function quest_1 () {
let input_1 = prompt("Frage 1: Was ist 2 + 2 ?");
correct_1 = input_1 == paul;
if (correct_1) {
    alert("Frage 1: Sehr gut, die Antwort ist: " + paul);
    right_awnsers++;
} else {
    alert("Frage 1: Leider ist | " + input_1 + " | falsch!");
    }
};
function quest_2 () {
let input_2 = prompt("Frage 2: Was ist 1 + 2*3 - 3 ?");
correct_2 = input_2 == paul;
if (correct_2) {
    alert("Frage 2: Sehr gut, die Antwort ist: " + paul);
    right_awnsers++;
} else {
    alert("Frage 2: Leider ist | " + input_2 + " | falsch!");
    }
}
function quest_3 () {
let input_3 = prompt("Frage 3: Was ist 3*3 - 2*2 - 1^1 ?");
correct_3 = input_3 == paul;
if (correct_3) {
    alert("Frage 3: Sehr gut, die Antwort ist: " + paul);
    right_awnsers++;
} else {
    alert("Frage 3: Leider ist | " + input_3 + " | falsch!");
    }
}
function quest_4 () {
let input_4 = prompt("Frage 4: Und was ist 4^3 - 10*6 ?");
correct_4 = input_4 == paul;
if (correct_4) {
    alert("Frage 4: Sehr gut, die Antwort ist: " + paul);
    right_awnsers++;
} else {
    alert("Frage 4: Leider ist | " + input_4 + " | falsch!");
    }
}
function awnser () {
    if (right_awnsers === 4) {
        document.write("Wow, alle deine Antworten sind korrekt!" + "<br>" + " Lügenzahl: " + paul + " ");
    } else {
        document.write("Du hast " + right_awnsers + " von 4 Fragen richtig beantwortet." + "<br>" + "Lügenzahl war: " + paul + "<br>" + " ");
        }
    }
quest_1();
quest_2();
quest_3();
quest_4();
awnser();
for (let i = 1; i < 5; i++) {
    oo(i);
}
function oo(i) {
    if (i == 1) {
        document.write("<br>" + i + ". Question: " + correct_1 + "<br>");
    } else if (i == 2) {
        document.write(i + ". Question: " + correct_2  +  "<br>");
    } else if (i == 3) {
        document.write(i + ". Question: " + correct_3 +  "<br>");
    } else if (i == 4) {
        document.write(i + ". Question: " + correct_4 +  "<br>");
    }
}