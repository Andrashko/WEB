async function getCurrency(code) {
    let resp = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
    let data = await resp.json();
    return data.find(el => el.ccy == code);
}


(async () => {
    let coures = await getCurrency("USD");
    console.log(coures);
})();