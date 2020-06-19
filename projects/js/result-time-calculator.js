function calculate() {
    let form = document.getElementById("result-time-form");
    let dist = form.elements["dist"].value;
    let mins = form.elements["mins"].value;
    let secs = parseInt(form.elements["secs"].value);

    let total = (mins * 60 + secs) * dist;
    let left = Math.floor(total / 60);
    let right = total % 60;

    if (right < 10) {
        right = "0" + right;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById("dist").innerHTML = dist;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
    document.getElementById("result").innerHTML = left + ":" + right + " min";
}
