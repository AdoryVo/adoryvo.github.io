function calculate() {
    let form = document.getElementById("gpa-form");
    let numWeighted = parseInt(form.elements["weighted"].value);
    let numNonweighted = parseInt(form.elements["non-weighted"].value);
    let classes = numWeighted + numNonweighted;
    let grades = [];
    let sum = 0.0;

    const dict1 = {
        4: "A's",
        3: "B's",
        2: "C's",
        1: "D's",
        0: "F's"
    };

    document.getElementById("num-classes").innerHTML = classes.toString();

    let letter;
    for (letter in dict1) {
        let numOfGrade = form.elements[dict1[letter]].value;
        grades.push(numOfGrade);
        sum += numOfGrade * letter;
    }

    for (letter in dict1) {
        let numOfGrade = form.elements[dict1[letter]].value;
        form.elements[dict1[letter]].max = classes - grades[0] - grades[1] - grades[2] - grades[3] - grades[4] + numOfGrade;
    }

    document.getElementById("nw-result").innerHTML = (sum / classes).toFixed(2);
    document.getElementById("w-result").innerHTML = ((sum + numWeighted) / classes).toFixed(2);
}
