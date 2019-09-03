function moneyConv(money) {
    return parseFloat(money).toFixed(2);
}

function calcResult() {
    var form = document.getElementById("frm1");
    var subtotal = moneyConv(form.elements["subtotal"].value);
    var tip_percent = form.elements["tip"].value;
    var num_payers = form.elements["num_payers"].value;

    var tip = moneyConv(subtotal * tip_percent / 100);
    var total = moneyConv(parseFloat(subtotal) + parseFloat(tip))

    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("tip_percent").innerHTML = tip_percent;
    document.getElementById("tip").innerHTML = tip;
    document.getElementById("total").innerHTML = total;

    document.getElementById("avg_subtotal").innerHTML = moneyConv(subtotal / num_payers);
    document.getElementById("avg_tip").innerHTML = moneyConv(tip / num_payers);
    document.getElementById("avg_total").innerHTML = moneyConv(total / num_payers);
}

function addPayer() {
    
}
