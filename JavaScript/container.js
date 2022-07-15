const unReadBook = document.querySelector("#unReadBook");
const readedBook = document.querySelector("#readedBook");

function showList(books = []) {
    books.forEach(book => {

        if (book.isComplete === true) {
            let element =
                `<article class="item">
                    <h3>${book.title}</h3></h3>
                    <p>Writer: ${book.author}</p>
                    <p>Year: ${book.year}</p>
        
                    <div class="action">
                        <button class="delete" onClick="changeSlot('${book.id}')">Unreaded X</button>
                        <button class="remove" onclick="del('${book.id}')">🗑</button>
                    </div>
                </article>`
            readedBook.innerHTML += element
        } else {
            if (book.link !== '') {
                let element =
                    `<article class="item">
                    <h3>${book.title}</h3></h3>
                    <p>Writer: ${book.author}</p>
                    <p>Year: ${book.year}</p>
        
                    <div class="action">
                        <button class="done" onClick="changeSlot('${book.id}')">Readed ✓</button>
                        <button class="read" ><a href="${book.link}">Read Book</a></button>
                        <button class="remove" onclick="del('${book.id}')">🗑</button>
                    </div>
                </article>`
                unReadBook.innerHTML += element
            } else {
                let element =
                    `<article class="item">
                        <h3>${book.title}</h3></h3>
                        <p>Writer: ${book.author}</p>
                        <p>Year: ${book.year}</p>

                    <div class="action">
                        <button class="done" onClick="changeSlot('${book.id}')">Readed ✓</button>
                        <button class="remove" onclick="del('${book.id}')">🗑</button>
                    </div>
                    </article>`
                unReadBook.innerHTML += element
            }

        }

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
        alert("Book Has Been Deleted")
    }
}


window.addEventListener("load", function () {
    if (checkDB()) {
        if (localStorage.getItem(storageKey) !== null) {
            const booksData = getData();
            showList(booksData);
        }
    } else {
        alert('DataBase Not Supported');
    }
})