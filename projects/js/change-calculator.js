function calculate() {
    var form = document.getElementById("frm1");
    var cost = form.elements["cost"].value;

    var dollars = Math.floor(cost / 1);
    var quarters = Math.floor((cost - dollars) / .25);
    var dimes = Math.floor((cost - dollars - .25 * quarters).toFixed(2) / .1);
    var nickels = Math.floor((cost - dollars - .25 * quarters - .1 * dimes).toFixed(2) / .05);
    var pennies = Math.floor(cost * 100 % 5)

    document.getElementById("result").innerHTML = `<br>Dollars: ${dollars}<br>Quarters: ${quarters}<br>Dimes: ${dimes}<br>Nickles: ${nickels}<br>Pennies: ${pennies}`;
}
