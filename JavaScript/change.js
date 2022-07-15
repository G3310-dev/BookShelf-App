function changeSlot(id) {
    const popup = confirm("Are You Sure ?");
    const dataBook = getData().filter(a => a.id == id);

    if (dataBook[0].isComplete === true) {
        if (popup == true) {
            const newBook = {
                id: dataBook[0].id,
                title: dataBook[0].title,
                author: dataBook[0].author,
                year: dataBook[0].year,
                isComplete: false
            }

            const bookData = getData().filter(a => a.id != id);
            localStorage.setItem(storageKey, JSON.stringify(bookData));
            location.reload();
            putUserList(newBook);
            alert('BookShelf Has Swaped');

        }
    } else if (dataBook[0].isComplete === false) {
        if (popup == true) {
            const newBook = {
                id: dataBook[0].id,
                title: dataBook[0].title,
                author: dataBook[0].author,
                year: dataBook[0].year,
                link: dataBook[0].link,
                isComplete: true
            }

            const bookData = getData().filter(a => a.id != id);
            localStorage.setItem(storageKey, JSON.stringify(bookData));
            location.reload();
            putUserList(newBook);
            alert('BookShelf Has Swaped');
        }
    }
}
