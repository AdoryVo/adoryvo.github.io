function calculate() {
  var form = document.getElementById("frm1");
  var dist = form.elements["dist"].value;
  var mins = form.elements["mins"].value;
  var secs = parseInt(form.elements["secs"].value);

  var total = (mins * 60 + secs) * dist;
  var left = Math.floor(total / 60);
  var right = total % 60;
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
