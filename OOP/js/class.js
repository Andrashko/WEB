// 4. класи

class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    logIn() {
        alert(`Hello, ${this.username}`);
    }

    logInWithDelay(timeout) {
        setTimeout(
            () => {
                alert(`Hello, ${this.username}`);
            },
            timeout
        )
    }

    get password() {
        console.log("geter");
        return this._password;
    }

    set password(value) {
        if (value.length < 3)
            throw "Password to short";
        this._password = value;
    }
}

class UserWithImage extends User {
    constructor(username, password, image) {
        super(username, password);
        this.image = image;
    }

    render() {
        document.write(
            `<img alt="${this.username}" src="${this.image}">`
        );
    }
}

// let user1 = new User("user", "qwerty");
// let admin = new User("admin", "admin");
// admin.logIn();

// let userWithImage2 = new UserWithImage("u2", "password", "img.jpg");

// userWithImage2.logIn();
// userWithImage2.render();