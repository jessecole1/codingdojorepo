function logout(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
function remove(element) {
    element.remove();
}
function ninja(element) {
    alert("Ninja was liked");
}