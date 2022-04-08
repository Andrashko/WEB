// //літерал
// let arr1 = [1, 2, 3];
// let arr2 = ["red", "bleck"];

// //конструктор
// let arr3 = new Array(1, 2, 3, 4, 5); //[1,2,3,4,5]
// let arr4 = new Array(10);// ![10], [,,,,,,,,,,]
// let arr5 = new Array("Word"); //['Word']

// console.log(arr1[1]);
// arr2[0] = "blue";
// arr2[2] = "red";

// arr1.length = 2;
// arr1.length = 5;

// for (let index = 0; index < arr2.length; index++)
//     console.log(arr2[index]);

// for (let element of arr2)
//     console.log(element);
// //присвоєння по посланню

// let newArr = arr2;
// newArr[0] = "green";
// console.log(arr2);

// function ChangeArray(arr) {
//     arr[1] = arr[0];
// }

// ChangeArray(arr2);

//методи масиву
let arr = ["red", "green", "blue", "grey"];
console.log(arr.concat(["white", "bleck"])); // arr = [...arr, ...["white", "bleck"]]

//spred
let concatedArray = [...arr, ...["white", "bleck"]];
console.log(concatedArray);

console.log(arr.every(element => element.length > 4));

// console.log(arr.fill("yellow", 1, 3 ));
let zeroVector = new Array(50).fill(0, 0, 50);

console.log(arr.filter(element => element[0] == "g"));
//arr = arr.filter();

console.log(arr.find(element => element[0] == "g"));
console.log(arr.find(element => element[0] == "x"));

console.log(arr.findIndex(element => element[0] == "g"));
console.log(arr.findIndex(element => element[0] == "x"));

arr.forEach(element => console.log(element.toUpperCase()));
// arr.forEach((element, index, array) => array[index] = element.toUpperCase() );

console.log(arr.includes("red"));

console.log(arr.indexOf("blue")); //findIndex(x=>x == "blue")

arr[4] = "blue";
console.log(arr.lastIndexOf("blue"));

console.log(arr.map(
    element => element.toUpperCase()
));

arr.push("white");
console.log(arr.pop());
arr.unshift("white");
console.log(arr.shift());

console.log(arr.reduce(
    (prev, curent) => prev + " " + curent
));

console.log(arr.reduce(
    (prev, current) => prev + current.length,
    0
));

// [].reduce((p,c)=>0); Reduce of empty array with no initial value
console.log(arr.reduce(
    (prev, current) => current.length > prev.length ? current : prev
));

console.log(arr.reverse());

arr.sort(
    (el1, el2) => el1.length - el2.length
);

arr.sort(
    (el1, el2) => {
        if (el1 > el2)
            return 1;
        if (el1 < el2)
            return -1;
        return 0;
    }
)

console.log(arr.some(element => element.length > 4));

console.log(arr.slice(1, 3));
console.log(arr.slice(-2));

console.log(arr.splice(1, 2, "insert"));
