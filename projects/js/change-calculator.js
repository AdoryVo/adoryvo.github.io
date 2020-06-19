function calculate() {
    let form = document.getElementById("cost-form");
    let cost = form.elements["cost"].value;

    let dollars = Math.floor(cost / 1);
    let quarters = Math.floor((cost - dollars) / .25);
    let dimes = Math.floor((cost - dollars - .25 * quarters).toFixed(2) / .1);
    let nickels = Math.floor((cost - dollars - .25 * quarters - .1 * dimes).toFixed(2) / .05);
    let pennies = Math.floor(cost * 100 % 5)

    document.getElementById("result").innerHTML = `Dollars: ${dollars}<br>Quarters: ${quarters}<br>Dimes: ${dimes}<br>Nickles: ${nickels}<br>Pennies: ${pennies}`;
}
