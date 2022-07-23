function switchBetween() {
    if (document.getElementById("day__page")) {

        if (document.getElementById("day__page").style.display == "block") {
            document.getElementById("day__page").style.display = "block";
            document.getElementById("week__page").style.display = "none";
            console.log("if")
        } else {
            document.getElementById("day__page").style.display = "none";
            document.getElementById("week__page").style.display = "block";
            console.log("else")
        }
    }
}
function Monday() {
    document.getElementById("change__monday").innerHTML = "Monday, 28 Dec"
    document.getElementById("hide__text").style.display = "none"
}

function Tuesday() {
    document.getElementById("change__monday").innerHTML = "Tuesday, 29 Dec"
    document.getElementById("hide__text").style.display = "none"
}

function Wednesday() {
    document.getElementById("change__monday").innerHTML = " "
    document.getElementById("hide__text").innerHTML = "none"
}

function Thursday() {
    document.getElementById("change__monday").innerHTML = "Thursday, 31 Dec"
    document.getElementById("hide__text").innerHTML = "none"
}

function Friday() {
    document.getElementById("change__monday").innerHTML = "Friday, 1 Jan"
    document.getElementById("hide__text").innerHTML = "none"
}

function Saturday() {
    document.getElementById("change__monday").innerHTML = "Today: Saturday, 2 Jan"
    document.getElementById("hide__text").innerHTML = "none"
}

function Sunday() {
    document.getElementById("change__monday").innerHTML = "Sunday, 3 Jan"
    document.getElementById("hide__text").innerHTML = "none"
}

// Week changing

var array = ["14 Dec 2020 - 20 Dec 2020", "21 Dec 2020 - 27 Dec 2020", "4 Jan 2021 - 10 Jan 2021", "11 Jan 2021 - 17 Jan 2021"]

function lastweekSwitch() {
    document.getElementById("weeksleftarrow").innerHTML = "21 Dec 2020 - 27 Dec 2020"
    document.getElementById("hide__text").style.display = "none"
    document.getElementById("weeksrightarrow").style.display = "none"
}

function nextweekSwitch() {
    document.getElementById("weeksrightarrow").innerHTML = "4 Jan 2021 - 10 Jan 2021"
    document.getElementById("hide__week").style.display = "none"
    document.getElementById("weeksleftarrow").style.display = "none"
}