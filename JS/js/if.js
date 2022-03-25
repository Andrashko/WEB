let age = parseInt(prompt("Введіть Ваш вік",""));
const ALLOWED_AGE = 18;
if (isNaN(age)) {
    alert("Ви ввели вік невірно")
} else {
    if (age>=ALLOWED_AGE){
        alert("Ласкаво просимо");
    } else {
        alert(`Приходіть через ${ALLOWED_AGE-age} років`);
    }
}
