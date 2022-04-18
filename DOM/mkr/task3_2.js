/* Клієнт бере в банку х грн під у % на 1 рік.
 Сформувати таблицю графіку виплат. */
// document.getElementById("show-paymnents").onclick = () =>
document.getElementById("sum").onchange = showPaymentTable;
document.getElementById("percent").onchange = showPaymentTable;

function showPaymentTable() {
    let sum = parseFloat(document.getElementById("sum").value);
    let percent = parseFloat(document.getElementById("percent").value);
    if (isNaN(sum) || isNaN(percent)){
        alert("Невірні данні");
        return;
    }
    
    let now = new Date(Date.now());
    const months = ["січень", "лютий", "березень", "квітень",
        "травень", "червень", "липень", "серпень",
        "вересень", "жовтнь", "листопад", "грудень"];
    let table = document.getElementById("payments");
    let template = "";

    let sumToPayPerMonth = (sum * (1 + percent/100))/12;
    for (let i = 1; i <= 12; i++) {
        let monthIndex = i + now.getMonth();
        if (monthIndex >= 12)
            monthIndex -= 12;
        template +=
            `<tr>
                <td>
                    ${i}
                </td>
                <td>
                    ${months[monthIndex]}
                </td>
                <td>
                    ${sumToPayPerMonth.toFixed(2)} грн.
                </td>
            </tr>`;
    }

    table.getElementsByTagName("tbody")[0].innerHTML = template;
}