const unReadBook = document.querySelector("#unReadBook");

function showList(books = []) {
    books.forEach(book => {
        let element = 
        `<article class="item">
            <h3>${book.title}</h3></h3>
            <p>Writer: ${book.author}</p>
            <p>Year: ${book.year}</p>

            <div class="action">
                <button class="done">Readed ✓</button>
                <button class="remove" onclick="del('${book.id}')">🗑</button>
            </div>
        </article>`
        unReadBook.innerHTML += element

    })
}


function del(id) {
    const bookDetail = getData().filter(a => a.id == id);
    const popup = confirm(`This Following Book Will Be Deleted: ${bookDetail[0].title}`);

    if (popup === true) {
        const bookData = getData().filter(a => a.id != id);
        localStorage.setItem(storageKey, JSON.stringify(bookData));
        showList(getData());
        location.reload();
    } else {
        return 0;
    }
}


window.addEventListener("load", function () {
    if (checkDB) {
        if (localStorage.getItem(storageKey) !== null) {
            const booksData = getData();
            showList(booksData);
        }
    } else {
        alert('DataBase Not Supported');
    }
})