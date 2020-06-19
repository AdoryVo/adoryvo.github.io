function calculate() {
    let form = document.getElementById("pace-form");
    let dist = form.elements["dist"].value;
    let mins = form.elements["mins"].value;
    let secs = parseInt(form.elements["secs"].value);

    let pace = (mins * 60 + secs) / dist
    let left = Math.floor(pace / 60);
    let right = (pace % 60).toFixed(2);

    if (right < 10) {
        right = "0" + right;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById("dist").innerHTML = dist;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs.toString();
    document.getElementById("mins2").innerHTML = mins;
    document.getElementById("secs2").innerHTML = secs.toString();
    document.getElementById("pace").innerHTML = left + ":" + right + " min/mile";
}
