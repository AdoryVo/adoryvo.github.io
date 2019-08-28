function calculate() {
    var form = document.getElementById("frm1");
    var numWeighted = parseInt(form.elements["weighted"].value);
    var numNonweighted = parseInt(form.elements["non-weighted"].value);
    var classes = numWeighted + numNonweighted;
    var grades = [];
    var sum = 0.0;

    var dict1 = {
        4: "A's",
        3: "B's",
        2: "C's",
        1: "D's",
        0: "F's"
    };

    document.getElementById("num_classes").innerHTML = classes;

    var letter;
    for (letter in dict1) {
        var numOfGrade = form.elements[dict1[letter]].value;
        grades.push(numOfGrade);
        sum += numOfGrade * letter;
    }

    for (letter in dict1) {
        var numOfGrade = form.elements[dict1[letter]].value;
        form.elements[dict1[letter]].max = classes - grades[0] - grades[1] - grades[2] - grades[3] - grades[4] + numOfGrade;
    }

    document.getElementById("nw_result").innerHTML = (sum / classes).toFixed(2);
    document.getElementById("w_result").innerHTML = ((sum + numWeighted) / classes).toFixed(2);
}
