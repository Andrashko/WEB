//1. літерал
let user = {
    username: "user",
    password: "qwerty",
    logIn: function () {
        alert(`Hello, ${this.username}`);
    },

    wrongLogIn: () => { //не має this, тому так описувати не треба
        alert(`Hello, ${this.username}`);
    },

    logInWithDelay: function (timeout) {
        setTimeout(
            () => {
                alert(`Hello, ${this.username}`);
            },
            timeout
        );
    },

    wrongLogInWithDelay: function (timeout) {
        setTimeout(
            function () { //потрібен доступ до this обєкту
                alert(`Hello, ${this.username}`);
            },
            timeout
        );
    }
};


//успадкувати літерал

let userWithImage = {
    ...user,
    image: "photo.jpg",
    render: function () {
        document.write(
            `<img alt="${this.username}" src="${this.image}">`
        );
    }
}

// userWithImage.render();

// username = "global";
// user.wrongLogIn(); //використовує this при виклику
// user.logInWithDelay(1000);
// user.wrongLogInWithDelay(1500);

// user.image = "photo.jpg";

// console.log(user.image);

// user.logOut = function () {
//     alert(`gooby, ${this.username}`);
// }
// user.logOut();


// user.toString = function(){
//     return `{\n\tusername: "${this.username}",\n\tpassword: "${this.password}"\n}`;
// }
// console.log(user.toString());

// delete user.wrongLogIn;
// user.wrongLogIn();


// 2. Функція - конструктор
function User(username, password) {
    // this =  new Object() - якщо виклик з new
    this.username = username;
    this.password = password;
    //методи потрібно в прототипі
    // this.logIn = function () {
    //     alert(`Hello, ${this.username}`);
    // };
    // this.logInWithDelay = function (timeout) {
    //     setTimeout(
    //         () => {
    //             alert(`Hello, ${this.username}`);
    //         },
    //         timeout
    //     );
    // };
    // return this - якщо виклик з new
}

User.prototype.logIn = function () {
    alert(`Hello, ${this.username}`);
};
User.prototype.logInWithDelay = function (timeout) {
    setTimeout(
        () => {
            alert(`Hello, ${this.username}`);
        },
        timeout
    );
};


let user1 = new User("user", "qwerty");
let admin = new User("admin", "admin");
admin.logIn();

let users = [];
for (let i = 0; i < 100; i++) {
    users[i] = new User(`user${i}`, i);
}
console.log(users);


function UserWithImage (username, password, image){
    // this = new User();
    User.call(this, username, password);
    this.image = image;
}


//помилка 
// UserWithImage.prototype = User.prototype;

UserWithImage.prototype = Object.create(User.prototype);
UserWithImage.prototype.render = function () {
    document.write(
        `<img alt="${this.username}" src="${this.image}">`
    );
}

admin.render();

let userWithImage2 = new UserWithImage("u2", "password", "img.jpg");

userWithImage2.logIn();
userWithImage2.render();

3. //фабричний метод

4. // класи