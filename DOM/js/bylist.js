let byList = ["milk", "honey"];
let byListUl = document.getElementById("by-list");
renderList(byList);

function renderList(list){
    byListUl.innerHTML = "";
    for (let item of list){
        li = document.createElement("li");
        li.innerText = item;
        byListUl.appendChild(li);
    }
}

function AddByItem(){
    let byItem = document.getElementById("by-item").value;
    let errorMessage = ValidateItem(byItem);
    if (errorMessage){
        document.getElementById("error-message").innerText = errorMessage;
        return;
    }
    byList.push(byItem);
    renderList(byList);
}

function ValidateItem(item){
    if (item.length < 2)
        return `Item "${item}" is too short`;
    if (byList.includes(item))
        return `Item "${item}" is already in list`;
}