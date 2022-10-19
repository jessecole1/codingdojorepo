// var spans = (
//     document.querySelector("#choice"),
//     document.querySelector("#choicetwo"),
//     document.querySelector("#choicethree")
// )
// var cities = ["Burbank", "Chicago", "Dallas"]
var cookie = document.querySelector(".cookie")
var leftDegrees = document.querySelector(".leftdegree")
var left = [75, 80, 69, 78]
var right = [65, 66, 61, 70]

function yourChoice (element) {
    alert("You chose " + element.innerText)
}

function acceptCookie() {
    cookie.remove();
}

function tempChange() {
    leftDegrees.innerText = ;
}