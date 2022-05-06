class UsersWithDOM extends Users {
  userToHTML(user) {
    return `
        <tr>
            <td>
                ${user.id}
            </td>
            <td>
                ${user.username}
            </td>
            <td>
                ${"*".repeat(user.password.length)}
            </td>
            <td>
                <img
                    src="${user.image}"
                    alt="${user.username}"
                    class="avatar"
                />
            </td>
            <td> 
                <button onclick="DeleteUser(${user.id})">
                    Delete
                </button>
            </td>
            <td> 
                <button onclick="StartEditUser(${user.id})">
                    Edit
                </button>
        </td>
        </tr>
        `;
  }
  usersTableToHTML() {
    let rows = "";
    for (let user of this.items) {
      rows += this.userToHTML(user);
    }
    return `
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Avatar
                    </th>
                </tr>
                ${rows}
            </table>
        `;
  }
        
  addFormToHTML(){
    return ` 
    <form name="addForm" method="post" action="#">
        <h3> Add User </h3>
        <input name="id" type="hidden">
        <input name="username" placeholder="username"> 
        <input name="password" placeholder="password">
        <input name="image" placeholder="avatar url">
        <button type="button" onclick="AddNewUser()">
            Save
        </button>
    </form>
    `;
  }

  editFormToHTML(){
    return ` 
    <form name="editForm" method="post" action="#">
        <h3> Edit User </h3>
        <input name="id" type="hidden">
        <input name="username" placeholder="username"> 
        <input name="password" placeholder="password">
        <input name="image" placeholder="avatar url">
        <button type="button" onclick="EditUser()">
            Save
        </button>
    </form>
    `;
  }

  toHTML(){
      return this.usersTableToHTML() + this.addFormToHTML() + this.editFormToHTML();
  }

  mount(parrent) {
    this._parrent = parrent;
    parrent.innerHTML = this.toHTML();
    document.addEventListener("deleteUser", event => {
      super.delete(event.detail.id);
      this._parrent.innerHTML = this.toHTML();
    });

    document.addEventListener("addUser", event => {
        super.add(
            new UserWithId(
                event.detail.username,
                event.detail.password,
                event.detail.image
            )
        );
        this._parrent.innerHTML = this.toHTML();
      });
    document.addEventListener("editUser", event => {
        super.update(event.detail.id, event.detail);
        this._parrent.innerHTML = this.toHTML();
    });
  }
}

function DeleteUser(id) {
  let deleteUserEvent = new CustomEvent("deleteUser", { detail: { id: id } });
  document.dispatchEvent(deleteUserEvent);
}

function AddNewUser(){
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const image = document.getElementsByName("image")[0].value;
    let addUserEvent = new CustomEvent("addUser", { detail: {
        username,
        password,
        image
    } });
    document.dispatchEvent(addUserEvent);
}


function StartEditUser(id){
    let user = users.getById(id);
    document.getElementsByName("id")[1].value = user.id;
    document.getElementsByName("username")[1].value = user.username;
    document.getElementsByName("password")[1].value = user.password;
    document.getElementsByName("image")[1].value = user.image;
}

function EditUser(){
    const id = parseInt(document.getElementsByName("id")[1].value);
    const username = document.getElementsByName("username")[1].value;
    const password = document.getElementsByName("password")[1].value;
    const image = document.getElementsByName("image")[1].value;
    let editUserEvent = new CustomEvent("editUser", { detail: {
        id,
        username,
        password,
        image
    } });
    document.dispatchEvent(editUserEvent);
}