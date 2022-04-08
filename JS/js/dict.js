let dict = {
    key1: "value1",
    key2: "value2"
}

console.log(dict.key1);
console.log(dict["key2"]);

dict["newKey"] = "newValue";


let students = [
    {
        id: 101,
        name: "Myroslava",
        surname: "Hlebena"
    },
    {
        id: 123,
        name: "Yurii",
        surname: "Andrashko"
    },
    {
        id: 124,
        name: "Pavlo",
        surname: "Antosiak"
    }
];
//ваорядкували за прізвищем
students.sort(
    (stud1, stud2) => {
        if (stud1.surname > stud2.surname)
            return 1;
        if (stud1.surname < stud2.surname)
            return -1;
        return 0;
    }
)

console.log(students);

//вилучити із вказаним іменем.

let nameToDelete = prompt("Name to delete", "");
if (students.some(student => student.name.toLowerCase() == nameToDelete.toLowerCase()))
    students = students.filter(
        student => student.name.toLowerCase() != nameToDelete.toLowerCase()
    );
else 
    console.log(`There is no ${nameToDelete}`);
console.log(students);

nameToDelete = prompt("Name to delete", "");
let indexToDelete = students.findIndex(student => student.name.toLowerCase() == nameToDelete.toLowerCase());
if (indexToDelete >= 0) {
    students.splice(indexToDelete, 1);
}
else 
    console.log(`There is no ${nameToDelete}`);
console.log(students);