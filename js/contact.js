function validateForm() {
    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    if (fname == "" || address == "" || email == "" || phone == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }
    return true;
}