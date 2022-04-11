let firstli = document.childNodes[1].childNodes[3].childNodes[3].children['first-li'];
firstli = document.getElementById("first-li");
firstli = document.getElementsByClassName("first-li")[0];

let list = document.getElementById("list");
firstli = list.getElementsByClassName("first-li")[0];


firstli.style.fontSize = "50px";
//вилучення
// firstli.remove();
list.removeChild(firstli);

//додавання
list.appendChild(firstli);
let newli = document.createElement("li");
newli.innerText = "new li";
list.appendChild(newli);



