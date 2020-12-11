let payer_form = document.getElementById("add_form");
let payer_table = document.getElementById("payers");

function moneyConv(money) {
    return parseFloat(money).toFixed(2);
}

function calcResult() {
    let form = document.getElementById("ezCheck-form");
    let subtotal = moneyConv(form.elements["subtotal"].value);
    let tip_percent = form.elements["tip"].value;
    let num_payers = form.elements["num_payers"].value;

    console.log(typeof num_payers);

    if (!num_payers) {
        return;
    }

    let tip = moneyConv(subtotal * tip_percent / 100);
    let total = moneyConv(parseFloat(subtotal) + parseFloat(tip));

    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("tip_percent").innerHTML = tip_percent;
    document.getElementById("tip").innerHTML = tip;
    document.getElementById("total").innerHTML = total;

    document.getElementById("avg_subtotal").innerHTML = moneyConv(subtotal / num_payers);
    document.getElementById("avg_tip").innerHTML = moneyConv(tip / num_payers);
    document.getElementById("avg_total").innerHTML = moneyConv(total / num_payers);
}

function calcSubShare() {
    let form = document.getElementById("subShareForm");
    let indSubtotal = moneyConv(form.elements["subIndSubtotal"].value);
    let subtotal = moneyConv(form.elements["subSubtotal"].value);
    let tax = moneyConv(form.elements["subTax"].value);

    if (isNaN(Number(indSubtotal))) {
        return;
    }

    if (isNaN(Number(subtotal))) {
        subtotal = 1;
    }

    if (isNaN(Number(tax))) {
        tax = 0;
    }

    let taxShare = (indSubtotal / subtotal) * tax;

    let subtotalShare = taxShare + parseFloat(indSubtotal);

    document.getElementById("subTaxResult").innerHTML = moneyConv(taxShare);
    document.getElementById("subSubShareResult").innerHTML = moneyConv(subtotalShare);
}

function updateTotal() {
    let form = document.getElementById("payerForm");
    let subtotal = moneyConv(form.elements["add_subtotal"].value);
    let tip = moneyConv(form.elements["add_tip"].value);

    if (isNaN(Number(subtotal)) || isNaN(Number(tip))) {
        return;
    }

    document.getElementById("totalResult").innerHTML = moneyConv(parseFloat(subtotal) + parseFloat(tip));
}

function addPayer() {
    let payer = document.createElement("tr");

    let num = payer_form.children[0].cloneNode(true);
    num.textContent = parseInt(num.textContent).toString();
    payer.appendChild(num);

    let nameCol = document.createElement("td");
    nameCol.textContent = payer_form.children[1].children[0].children[0].value;
    payer.appendChild(nameCol);

    for (let i = 2; i < 5; i++) {
        let col = document.createElement("td");
        let col_value = payer_form.children[i].children[0].children[0].value;

        col_value = moneyConv(col_value);

        col.textContent = "$" + col_value.toString();

        payer.appendChild(col);
    }

    let rmv_button = document.createElement("td");
    rmv_button.classList.add("align-middle");
    rmv_button.classList.add("text-center");
    rmv_button.innerHTML = `<button type='button' onclick='removePayer(${num.textContent})' class='bg-danger border-0 rounded-circle'><i class='fas fa-trash text-white'></i></button>`;
    payer.appendChild(rmv_button);

    payer_table.insertBefore(payer, payer_form);
    payer_form.children[0].textContent = (parseInt(num.textContent) + 1).toString();
}

function removePayer(rowNum) {
    payer_table.removeChild(payer_table.children[rowNum - 1]);

    for (let i = rowNum - 1; i < payer_table.children.length; i++) {
        let row = payer_table.children[i];
        let oldRowNum = row.children[0].textContent;
        row.children[0].textContent = (parseInt(oldRowNum) - 1).toString();

        if (i !== payer_table.children.length - 1) {
            row.children[5].children[0].setAttribute('onclick', `removePayer(${parseInt(oldRowNum) - 1})`);
        }
    }
}