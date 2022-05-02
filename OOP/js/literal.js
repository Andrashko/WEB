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