//ввести масив
let count = parseInt(prompt("Count of elements:", "3"));
let arr = [];
for (let i=0; i<count; i++){
    arr[i] = parseFloat(prompt(`Enter ${i+1}-th element`, "0"));
}

// помножити на 17
// arr = arr.map( element => element * 17 );

for (let i=0; i<count; i++){
    arr[i] *= 17;
}

//вивести
console.log(arr);