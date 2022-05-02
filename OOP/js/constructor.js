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