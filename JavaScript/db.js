const storageKey = 'DATA_BOOK';
const form = document.getElementById('formBook');

function checkDB() {
    return typeof (Storage) !== 'undefined';
}

function putUserList(data) {
    if (checkDB()) {
        let userData = [];
        if (localStorage.getItem(storageKey) !== null) {
            userData = JSON.parse(localStorage.getItem(storageKey));
        } else {
            alert('No Data Detected !');
        }

        userData.unshift(data);
        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
}

function getData() {
    if (checkDB()) {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    } else {
        return [];
    }
}

form.addEventListener('submit', function (event) {
    const title = document.getElementById('jdl').value;
    const author = document.getElementById('ath').value;
    const year = document.getElementById('yr').value;
    const complete = document.getElementById('cmplt').checked;
    const date = new Date();
    const id = Math.round(date.getTime());
    const url = document.getElementById('link').value;
    const newUserData = {
        id: id,
        title: title,
        author: author,
        year: year,
        link: url,
        isComplete: complete,
    };
    if (title !== '' && author !== '' && year !== '') {
        putUserList(newUserData);
        alert('Book Added')
    } else {
        alert('Please Fill All Data !')
    }
});