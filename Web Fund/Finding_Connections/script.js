console.log("page loaded...");
var friendRequest = document.querySelector("card-list-item")
var num = document.querySelector("#numOfRequests")
var number = document.querySelector("#badgeTwo")
var go = 1
var two = 500

function nameChange() {
    myName.innerText = "Jesse Cole";
}
function friendAction(element) {
    element.remove();
}

function subtractToo() {
    two-- ;
    number.innerText = (two + "+") ;
}

function addToo() {
    two++ ;
    number.innerText = (two + "+")
}