// var spans = (
//     document.querySelector("#choice"),
//     document.querySelector("#choicetwo"),
//     document.querySelector("#choicethree")
// )
// var cities = ["Burbank", "Chicago", "Dallas"]
// var cookie = document.querySelector(".cookie")
// var leftDegrees = document.querySelector(".leftdegree")
var left = [75, 80, 69, 78]
var right = [65, 66, 61, 70]

function yourChoice (element) {
    alert("You chose " + element.innerText)
}

function acceptCookie() {
    cookie.remove();
}



function tempChange(element) {
    for(var i = 1; i<9; i++) {
        var degreeElement = document.querySelector(".degree" + i)
        var degree = parseInt(degreeElement.innerText)
        if(element.value == "celcius") {
            degreeElement.innerText = fromFarenheit(degree) + "°"
        }
        else {
            degreeElement.innerText = fromCelcius(degree) + "°"
        }
    }
}



function fromCelcius(temp) {
    var x = Math.round(9 / 5 * temp + 32)
    return x
}
console.log(fromCelcius(57))

function fromFarenheit(temp) {
    var y = Math.round(5 / 9 * (temp - 32))
    return y
}
console.log(fromFarenheit(78))