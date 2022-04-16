document.getElementById("calc-total").onclick = () => {
    let currency = parseFloat(document.getElementById("currency").value);
    // let shipping = document.querySelector('input[name="shipping"]:checked')?.value;
    let shipping = "";
    for (let radio of document.getElementsByName("shipping")) {
        if (radio.checked)
            shipping = radio.value;
    }

    let expedited = document.getElementById("expedited").checked;

    if (shipping == "post") {
        currency += 50
    } else if (shipping == "new-post") {
        currency += 70
    } else if (shipping == "courier") {
        currency += 100
    } else {
        alert("Спосібдоставки не вибрано");
    }

    if (expedited) {
        currency *= 1.05;
    }

    document.getElementById("total").value = currency.toFixed(2);
}   