const while_test = (massage) => {
    let input = prompt(massage),output = "<br>",
    i_1 = 1, // front 
    i_2; // back
    while (i_1 <= input) {
        i_2 = 1;
        while (i_2 <= input) {
            output += `${i_1} * ${i_2} = ${i_1 * i_2} <br> `;
            i_2++;
        }
        output +="<Br>";
        i_1++;
    }
    return output;
};
document.write(while_test("Insert number for HTML"));
console.log(while_test("Insert number for onsole"));