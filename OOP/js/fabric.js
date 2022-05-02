// 3.  фабричний метод

function UserFabric(username, password){
    let self = new Object();
    self.username = username;
    self.password = password;
    self.__proto__.logIn = function () {
        alert(`Hello, ${this.username}`);
    };
    self.__proto__.logInWithDelay = function (timeout) {
        setTimeout(
            () => {
                alert(`Hello, ${this.username}`);
            },
            timeout
        );
    };
    return self;
}


function UserWithImageFabric (username, password, image){
    let self = UserFabric(username, password);
    self.image = image;
    self.__proto__.render = function () {
        document.write(
            `<img alt="${this.username}" src="${this.image}">`
        );
    }
    return self;
}

let user1 = UserFabric("user", "qwerty");
let admin = UserFabric("admin", "admin");
let userWithImage2 = UserWithImageFabric("u2", "password", "img.jpg");

userWithImage2.logIn();
userWithImage2.render();