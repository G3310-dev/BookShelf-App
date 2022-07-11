n = new Date();
y = n.getFullYear();
m =  n.getMonth() + 1;
d = n.getDate();
t = "";

const x = () => {
    switch (m) {
        case (1):
            t =  "January, ";
            break;
        case (2):
            t =  "Febuary, ";
            break;
        case (3):
            t =  "March, ";
            break;
        case (4):
            t =  "April, ";
            break;
        case (5):
            t =  "May, ";
            break;
        case (6):
            t =  "June, ";
            break;
        case (7):
            t =  "July, ";
            break;
        case (8):
            t =  "August, ";
            break;
        case (9):
            t =  "September, ";
            break;
        case (10):
            t =  "October, ";
            break;
        case (11):
            t =  "November, ";
            break;
        case (12):
            t =  "Decemmer, ";
            break;
    }
}

x();
document.getElementById("date").innerHTML = t + d + " " + y;