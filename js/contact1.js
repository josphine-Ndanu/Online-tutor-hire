$(document).ready(function () {

    document.getElementById('submit').addEventListener('click', function () {
        var fullName = $("#f_name").val();
        var email = $("#email").val();
        var address = $("#inputAddress").val();
        var phone = $("#phone").val();
        var message = $("#message").val();
        if ($("#f_name").val() && $("#inputAddress").val() && $("#phone").val() && $("#email").val() && $("#message").val()) {
            alert("Hi " + fullName + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please fill all fields!");
        }
    })
})