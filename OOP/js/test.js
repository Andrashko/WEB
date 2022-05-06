let users = new UsersWithDOM();

users.add(
    new UserWithId(
        "User",
        "qwerty",
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png"
    )
);
users.add(
    new UserWithId(
        "Admin",
        "VeryLongPassword!",
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png"
    )
);

users.mount(document.getElementById("root"));