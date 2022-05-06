function ButtonClick(event) {
    console.log(event);
    alert("button");
}

function FidsetClick() {
    alert("Fildset");
}

function FormClick(event) {
    alert("form");
    event.stopPropagation();
}

function DocumentClick() {
    alert("document");
}

function FormSubmit(event) {
    alert("submit");
    event.preventDefault();
}


document.getElementsByTagName("form")[0].onclick = FormClick;
document.getElementsByTagName("form")[0].onsubmit = FormSubmit;
document.getElementsByTagName("button")[0].onclick = ButtonClick;
document.onclick = DocumentClick;


document.getElementById("board").onclick = (event) => {
    let pointer = document.getElementById("pointer");
    pointer.style.top = `${event.layerY-25}px`;
    pointer.style.left = `${event.layerX-25}px`;
}