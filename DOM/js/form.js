let form = document.getElementById("sum-form");
let calcButton = document.getElementById("calc");
calcButton.onclick = calcButtonClick;

function calcButtonClick() {
    let firstNumber = parseInt(form.getElementsByTagName("input")[0].value);
    let secondNumber = parseInt(form.getElementsByTagName("input")[1].value);
    let sum = firstNumber + secondNumber;
    form.getElementsByTagName("input")[2].value = sum.toString();
};

let firstNumberInput = form.getElementsByTagName("input")[0];

firstNumberInput.onchange = () => {
    let firstNumber = parseInt(firstNumberInput.value);
    if (firstNumber < 0) {
        firstNumberInput.value = 0;
        alert("Negative number not allowed");        
    }
}

// calcButton.onclick= ()=> {
//     calcButtonClick
// }
