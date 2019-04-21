function showMessage() {
    var message = document.getElementById("message").value;
    display_message.innerHTML= message;
    var username = document.getElementById("username").value;
    display_username.innerHTML= username;
    var email = document.getElementById("email").value;
    display_email.innerHTML= email;

}

var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function message() {
        alert("You are now idle.");
        //location.href = 'logout.html'
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(message, 3000);
        // 1000 milliseconds = 1 second
    }
};