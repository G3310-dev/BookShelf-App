const add = document.getElementById('addBtn');
const about = document.getElementById('about');
const floating = document.getElementById('floating');
const floating1 = document.getElementById('abt');
const searchValue = document.querySelector("#src");
const search = document.querySelector('#searchEnter');

add.addEventListener('click', function (event) {
    if (floating.classList.contains('visible')) {
        floating.classList.remove('visible');
    } else {
        floating.classList.add('visible');
    }
})
about.addEventListener('click', function (event) {
    if (floating1.classList.contains('visible1')) {
        floating1.classList.remove('visible1');
    } else {
        floating1.classList.add('visible1');
    }
})

document.getElementsByTagName('html')[0].addEventListener('click', function (event) {
    floating.classList.remove('visible');
    floating1.classList.remove('visible1');
}, true);

search.addEventListener("click", function (event) {
    event.preventDefault()
    if (localStorage.getItem(storageKey) == "") {
        alert("No Book Founded");
        location.reload();
    } else {
        const getTitle = getData().filter(a => a.title == searchValue.value.trim());
        if (getTitle.length == 0) {
            const getAuthor = getData().filter(a => a.author == searchValue.value.trim());
            if (getAuthor.length == 0) {
                const getYear = getData().filter(a => a.year == searchValue.value.trim());
                alert("No Book Founded");
                location.reload();

            } else {
                showSearchResult(getAuthor);
            }
        } else {
            showSearchResult(getTitle);
        }
    }
})

function showSearchResult(books) {
    const result = document.querySelector("#sorted");

    result.innerHTML = '';

    books.forEach(book => {
        let element =
            `<article class="item">
            <h3>${book.title}</h3></h3>
            <p>Writer: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p >Progress : ${book.isComplete ? 'Readed' : 'Unreaded'}</p>
            <div class="action">
                <button class="remove" onclick="del('${book.id}')">🗑</button>
            </div>
        </article>`

        result.innerHTML += element;
    });
}