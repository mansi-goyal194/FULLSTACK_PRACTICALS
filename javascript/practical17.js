var time = document.querySelector("#time");
var greeting = document.querySelector("#greeting");
var myname = document.querySelector("#myname");
var date = document.querySelector("#date");

myname.addEventListener("keypress", setName);
myname.addEventListener("blur", setName);

function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.toDateString();

    date.innerHTML = day;

    const ampm = (h >= 12) ? "PM" : "AM";

    h = h % 12 || 12;

    time.innerHTML = `${addZero(h)}:${addZero(m)}:${addZero(s)} ${ampm}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    var s = (parseInt(n) < 10 ? "0" : "") + n;
    return s;
}

function setGreeting() {
    var today = new Date();
    var h = today.getHours();
    if (h < 12) {
        document.body.style.backgroundImage = 'url("../images/morning.jpg")';
        greeting.innerHTML = "GOOD MORNING";
    } else if (h < 18) {
        document.body.style.backgroundImage = 'url("../images/afternoon.jpg")';
        greeting.innerHTML = "GOOD AFTERNOON";
    } else {
        document.body.style.backgroundImage = 'url("../images/evening.jpg")';
        document.body.style.color = "white"
        greeting.innerHTML = "GOOD EVENING";
    }

}

function getName() {
    if (localStorage.getItem("name") === null) {
        myname.innerHTML = "[ENTER NAME]";
    } else {
        myname.innerHTML = localStorage.getItem("name");
    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerHTML);
            myname.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerHTML);
    }
}

showTime();
setGreeting();
getName();