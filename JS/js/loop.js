//з передумовою.
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Кінець цикла з передумовою");
//з післяумовою
count = 5;
do {
    console.log(count);
    count--;
} while (count > 0);
console.log("Кінець цикла з післяумовою");
// з параметром
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log("Кінець цикла з параметром");
// ітератор
let array = [5, 4, 3, 2, 1];
for (let element of array){
    console.log(element)
}
console.log("Кінець ітератора");

// ітератор ключів
array = [5, 4, 3, 2, 1];
for (let index in array){
    console.log(array[index])
}
console.log("Кінець ітератора по ключах");
