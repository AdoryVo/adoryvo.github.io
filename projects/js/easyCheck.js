let payer_form = document.getElementById("add_form");
let add_button = document.getElementById("add");
let payer_table = document.getElementById("payers");

function moneyConv(money) {
    return parseFloat(money).toFixed(2);
}

function calcResult() {
    let form = document.getElementById("frm1");
    let subtotal = moneyConv(form.elements["subtotal"].value);
    let tip_percent = form.elements["tip"].value;
    let num_payers = form.elements["num_payers"].value;

    let tip = moneyConv(subtotal * tip_percent / 100);
    let total = moneyConv(parseFloat(subtotal) + parseFloat(tip))

    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("tip_percent").innerHTML = tip_percent;
    document.getElementById("tip").innerHTML = tip;
    document.getElementById("total").innerHTML = total;

    document.getElementById("avg_subtotal").innerHTML = moneyConv(subtotal / num_payers);
    document.getElementById("avg_tip").innerHTML = moneyConv(tip / num_payers);
    document.getElementById("avg_total").innerHTML = moneyConv(total / num_payers);
}

function addPayer() {
    let payer = document.createElement("tr");

    let num = payer_form.children[0].cloneNode(true);
    num.textContent = (parseInt(num.textContent) + 1).toString();
    payer.appendChild(num);

    //console.log(num.textContent);
    for (let i = 1; i < 5; i++) {
        let col_value = payer_form.children[i].children[0].value;
        console.log(col_value.children);
        let col = document.createElement("td");
        col.textContent = col_value;

        payer.appendChild(col);
    }

    let rmv_button = document.createElement("td");
    rmv_button.classList.add("align-middle");
    rmv_button.innerHTML = "<button type='button' id='rmv' class='bg-danger border-0 rounded-circle'><i class='fas fa-trash text-white'></i></button>";
    payer.appendChild(rmv_button);

    payer_table.appendChild(payer);
}

add_button.addEventListener("click", addPayer);