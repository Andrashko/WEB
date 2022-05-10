/*
Модульна контрольна робота No2
Web-програмування

1. Використовуючи js створити:
a. Об’єкт для зберігання даних про Фото (Id, Автор, Назва, Опис,
URL-файлу, Список гештегів, Дата опублікування, Кількість «лайків»).
b. На основі об’єкту фото створити новий об’єкт, який перевизначає
метод toString()
c. Об’єкт для зберігання даних про колекції фотографій, цей обєкт
повинен містити метод для знаходження даних про одне Фото із заданим Id.
d. Відобразити дані Фото на сторінці.
*/

class Photo {
    constructor(id, author, title, description, url, hashtags, date, likes) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.hashtags = hashtags;
        this.date = date;
        this.likes = likes;
    }
}

// Photo.prototype.toString = ...

class StrgifyPhoto extends Photo {
    toString() {
        return `${super.toString()}{
            id:${this.id},
            title:${this.title},
            ...
        }`;
    }
}

class PhotoCollection {
    constructor(items = []) {
        this.items = items;
    }

    getByd(id) {
        return this.items.find(photo => photo.id == id)
    }

    delete(id) {
        let userIndex = this.items.findIndex(photo => photo.id == id);
        if (userIndex == -1)
            throw "Not found";
        this.items.splice(userIndex, 1);
    }
}


class PhotoCollectionHtml extends PhotoCollection {
    constructor(items) {
        super(items);
        document.addEventListener("delete", event => {
            this.delete(event.detail.id);
            this.mount(this._parrent, this._id);
        });
    }
    
    photoToHTML(photo) {
        if (!photo)
            return ` <p class ="error">Photo with id not found</p>`;

        return `   
        <div class="photo">
            <h2> ${photo.title} </h2>
            <img src="${photo.url}" alt="${photo.title}">
            <div class="description">
                <p>Автор: ${photo.author}</p>
                <p>${photo.hashtags}</p>
                <p>Опубліковано: ${photo.date.toLocaleDateString()} </p>
                <p> ${photo.likes} lkes </p>
            </div>
            <p>
                ${photo.description}
            </p>
        </div>
        <input type="hidden" id="photo-id" value="${photo.id}">
        <button type="button" id="delete-button">delete</button>`;
    }


    mount(parrent, id) {
        this._parrent = parrent;
        this._id = id;
        parrent.innerHTML = this.photoToHTML(this.getByd(id));
        document.getElementById("delete-button").onclick = function () {
            let id = parseInt(document.getElementById("photo-id").value);
            document.dispatchEvent(
                new CustomEvent(
                    "delete",
                    {
                        detail: {
                            id
                        }
                    }
                )
            );
        }
    }
}

let ukrPhoto = new Photo(
    1,
    "народ",
    "Україна",
    `kraine is a sovereign state; its independence was proclaimed in 1991. Ukraine is situated in the east of
    Europe.
    The territory of Ukraine is 603 700 square kilometres. Ukraine borders on Russia, Belarus, Poland, Moldova,
    Slovakia, Hungary, and Romania. It’s washed by the Black Sea and the Sea of Azov and has very important
    ports.
    Ukraine is larger than France and Great Britain but considerably smaller than Russia. 5% of Ukraine’s
    territory
    is mountainous; the rest part of the Ukrainian area is flat. Ukraine has the Carpathians and the Crimean
    Mountains. The Carpathians is the natural mountainous boundary of Ukraine. They are covered with mixed
    forests
    of pine, fir, beech and oak trees. There are the thickest forests in Volyn, which are part of the famous
    Byelovezhskaya Puscha.`,
    "https://www.dinternal.com.ua/wp-content/uploads/2013/01/Ukraine-Map-400.png",
    ["#ukraine", "#country", "#tag"],
    new Date(2022, 5, 10),
    42000000
);

let kyivPhoto = new Photo(
    2,
    "ukraine",
    "Київ",
    "Дніпро — головна річка країни; більш того, це третя за довжиною річка в Європі. Такі річки, як Дністер і Буг, також мають велике значення.",
    "https://www.dinternal.com.ua/wp-content/uploads/2009/12/ukraine22.jpg",
    ["#capital", "#city"],
    new Date(1991, 8, 24),
    3000000
)

let photos = new PhotoCollectionHtml([ukrPhoto, kyivPhoto]);


photos.mount(document.getElementById("root"), 1);